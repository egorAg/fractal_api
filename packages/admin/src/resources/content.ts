import { ContentEntity } from "../entities/content.entity.js";

const user = {
  resource: ContentEntity,
  options: {
    navigation: {
      icon: 'FileText',
    },
    editProperties: ['name', 'value'],
    actions: {
      delete: {
        isAccessible: false,
      },
      bulkDelete: {
        isAccessible: false,
      },
    },
    properties: {
      value: {
        type: 'richtext',
      },
    },
  },
};

export default user;
