import { ConsultationEntity } from "../entities/consultation.entity.js";

const consultation = {
  resource: ConsultationEntity,
  options: {
    navigation: {
      icon: 'Shuffle',
    },
    properties: {
      file: {
        isVisible: { list: false, show: true, edit: false, filter: false },
      },
      bucket: {
        isVisible: { list: false, show: true, edit: false, filter: false },
      },
      price: {
        type: 'currency',
      },
    },
  },
};

export default consultation;
