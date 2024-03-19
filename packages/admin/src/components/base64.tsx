import React from "react"

const Base64 = (props) => {
    const { property, record, onChange } = props;

    const handleChange = (event) => {
        console.log("LOG>>>>", property)
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            let base64String = reader.result;
            if (typeof reader.result === 'string') {
                base64String = reader.result.split(',')[1]; // Удаляем заголовок data URL
            } else if (reader.result instanceof ArrayBuffer) {
                const bytes = new Uint8Array(reader.result);
                base64String = btoa(String.fromCharCode.apply(null, bytes));
            }
            onChange(base64String); // Передаем base64 строку в качестве значения поля
        };

        reader.readAsDataURL(file);
    };

    const value = record.params[ property.name() ] || '';

    return (
        <div>
            <input type="file" onChange={ handleChange }/>
            { value && <img src={ value } style={ { maxWidth: '200px', maxHeight: '200px' } }/> }
        </div>
    );
}

export default Base64;