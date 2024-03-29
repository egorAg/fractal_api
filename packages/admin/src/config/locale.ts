export const locale = {
    language: 'ru',
    availableLanguages: ['ru', 'en'],
    localeDetection: true,
    translations: {
        'ru': {
            "actions": {
                "new": "Создать",
                "edit": "Редактировать",
                "show": "Показать",
                "delete": "Удалить",
                "bulkDelete": "Удалить всех",
                "list": "Список"
            },
            "buttons": {
                "save": "Сохранить",
                "addNewItem": "Добавить",
                "filter": "Фильтры",
                "filterActive": "Фильтр ({{count}})",
                "applyChanges": "Применить",
                "resetFilter": "Сбросить",
                "confirmRemovalMany": "Подтвердите удаление {{count}} записей",
                "logout": "Выйти",
                "login": "Войти",
                "seeTheDocumentation": "Перейти на: <1>Документация</1>",
                "createFirstRecord": "Создать первую запись",
                "cancel": "Отмена",
                "confirm": "Применить",
                "contactUs": "Связаться с нами"
            },
            "components": {
                "DropZone": {
                    "placeholder": "Перетащите файл, или нажмите что-бы выбрать",
                    "acceptedSize": "Максимальный размер файла: {{maxSize}}",
                    "acceptedType": "Поддерживаемые типы файлов: {{mimeTypes}}",
                    "unsupportedSize": "Файл {{fileName}} слишком большой",
                    "unsupportedType": "Тип файла: {{fileName}} не поддерживается: {{fileType}}"
                },
                "LanguageSelector": {
                    "availableLanguages": {
                        "de": "German",
                        "en": "English",
                        "es": "Spanish",
                        "it": "Italian",
                        "ja": "Japanese",
                        "pl": "Polish",
                        "pt-BR": "Portuguese (Brazil)",
                        "ua": "Ukrainian",
                        "zh-CN": "Chinese",
                        "ru": "Русский"
                    }
                },
                "Login": {
                    "welcomeHeader": "Добро пожаловать",
                    "welcomeMessage": "в CRM портала Fractal",
                    "properties": {
                        "email": "Почта",
                        "password": "Пароль"
                    },
                    "loginButton": "Войти"
                }
            },
            "labels": {
                "navigation": "Навигация",
                "pages": "Страницы",
                "selectedRecords": "Выбраны ({{selected}})",
                "filters": "Фильтры",
                "adminVersion": "Версия: {{version}}",
                "appVersion": "Приложение: {{version}}",
                "dashboard": "Главная",
                RoleEntity: "Роли",
                UserEntity: 'Пользователи',
                ContentEntity: 'Контент',
                SystemEntity: 'Системы',
                TopicEntity: 'Топики',
                ConsultationEntity: 'Консультации',
                PostEntity: 'Записи в блоге',
                CommentEntity: 'Комментарии'
            },
            "properties": {
                "length": "Длина",
                "from": "От",
                "to": "До",
                name: 'Имя',
                surname: 'Фамилия',
                description: 'Описание',
                price: 'Цена',
                type: 'Тип',
                profitable: 'Выгодное предложение',
                comparisons: 'Сравнения',
                created_at: 'Создано',
                updated_at: 'Обновлено',
                specialist: 'Специалист',
                file: 'Файл',
                system: 'Система',
                compares: 'Сравнения',
                topic: 'Тематика',
                value: 'Значение',
                author: 'Автор',
                content: 'Контент',
                approved: 'Подтвержден',
                slug: 'Слаг',
                amount: 'Сумма',
                status: 'Статус',
                City: 'Город',
                Message: 'Сообщение',
                "Updated At": "Обновлен"
            },
            "resources": {
            },
            "messages": {
                "successfullyBulkDeleted": "Удалено {{count}} записей",
                "successfullyBulkDeleted_plural": "Удалено {{count}} записей",
                "successfullyDeleted": "Запись удалена",
                "successfullyUpdated": "Запись обновлена",
                "thereWereValidationErrors": "Ошибка валидации",
                "forbiddenError": "Вы не можете выполнить {{actionName}} в {{resourceId}}",
                "anyForbiddenError": "Недостаточно прав",
                "successfullyCreated": "Запись создана",
                "bulkDeleteError": "Ошибка при удалении записей, проверьте консоль",
                "errorFetchingRecords": "Ошибка при получении записей, проверьте консоль",
                "errorFetchingRecord": "Ошибка при получении записи, проверьте консоль",
                "noRecordsSelected": "Вы не выбрали записи",
                "theseRecordsWillBeRemoved": "Следующие записи будут удалены",
                "theseRecordsWillBeRemoved_plural": "Следующие записи будут удалены",
                "pickSomeFirstToRemove": "Для удаления, выберите запись",
                "error404Resource": "Ресурс с id: {{resourceId}} не найден",
                "error404Action": "Ресурс с id: {{resourceId}} не имеет action: {{actionName}} или у вас недостаточно прав",
                "error404Record": "Resource of given id: {{resourceId}} does not have a record with id: {{recordId}} or you are not authorized to use it!",
                "seeConsoleForMore": "Посмотрите в консоль разработчика",
                "noActionComponent": "You have to implement action component for your Action",
                "noRecordsInResource": "Записи отсутствуют",
                "noRecords": "Нет записей",
                "confirmDelete": "Вы уверены что хотите удалить выбранные записи?",
                "welcomeOnBoard_title": "Добро пожаловать!",
                "welcomeOnBoard_subtitle": "Теперь ты один из нас! Вот несколько подсказок:",
                "addingResources_title": "Добавление ресурсов",
                "addingResources_subtitle": "Как добавить новые ресурсы в меню",
                "customizeResources_title": "Кастомизация ресурсов",
                "customizeResources_subtitle": "Определите поведение, свойства и многое другое...",
                "customizeActions_title": "Кастомизация событий",
                "customizeActions_subtitle": "Изменяйте существующие действия или добавляйте свои собственные",
                "writeOwnComponents_title": "Компоненты",
                "writeOwnComponents_subtitle": "Как изменить внешний вид AdminJS",
                "customDashboard_title": "Пользовательская главная страница",
                "customDashboard_subtitle": "Изучите, как кастомизировать главную страницу",
                "roleBasedAccess_title": "Управление доступом на основе ролей",
                "roleBasedAccess_subtitle": "Определите права доступа для пользователей AdminJS",
                "community_title": "Discord",
                "community_subtitle": "Пообщайтесь с создателями AdminJS и другими пользователями AdminJS",
                "foundBug_title": "Нашли ошибку? Нужны улучшения?",
                "foundBug_subtitle": "Поднимите вопрос на нашем репозитории GitHub",
                "needMoreSolutions_title": "Нужны более сложные решения?",
                "needMoreSolutions_subtitle": "Мы готовы предоставить вам красивый UX/UI дизайн и индивидуально разработанное программное обеспечение, основанное (не только) на AdminJS.",
                "invalidCredentials": "Неправильная почта или пароль",
                "keyPlaceholder": "КЛЮЧЬ",
                "valuePlaceholder": "ЗНАЧЕНИЕ",
                "initialKey": "Key-{{number}}",
                "keyInUse": "Ключи объектов должны быть уникальными",
                "keyValuePropertyDefaultDescription": "Все значения хранятся в виде текста. Ключи должны быть уникальными, дубликаты ключей не будут сохранены.",
                "pageNotFound_title": "Страница не найдена",
                "pageNotFound_subtitle": "Page <strong>\"{{pageName}}\"</strong> does not exist",
                "componentNotFound_title": "Компонент не указан",
                "componentNotFound_subtitle": "Вы должны указать компонент, который будет отображать этот элемент"
            }
        }
   }
}