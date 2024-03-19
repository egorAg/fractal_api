import { ConsultationEntity } from "../entities/consultation.entity.js";
import { owningRelationSettingsFeature, RelationType } from "@adminjs/relations";
import { loader } from "../components/index.js";

const consultation = {
  resource: ConsultationEntity,
  options: {
    navigation: {
      icon: 'Shuffle',
    },
    properties: {
      // file: {
      //   isVisible: { list: true, show: true, edit: true, filter: true },
      //   components: {
      //     edit: Components.Base64,
      //   }
      // },
      bucket: {
        isVisible: { list: false, show: true, edit: false, filter: false },
      },
      price: {
        type: 'currency',
      },
    },
  },
  features: [
    owningRelationSettingsFeature({
      componentLoader: loader,
      licenseKey: <string>process.env.LICENSE_KEY,
      relations: {
        topic: {
          type: RelationType.ManyToMany,
          junction: {
            joinKey: 'consultationsId',
            inverseJoinKey: 'topicsId',
            throughResourceId: 'topics_consultations_consultations',
          },
          target: {
            resourceId: 'TopicEntity',
          },
        },
      },
    }),
  ]
};

export default consultation;
