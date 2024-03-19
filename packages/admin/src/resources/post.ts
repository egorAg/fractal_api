import { PostEntity } from "../entities/post.entity.js";

const post = {
  resource: PostEntity,
  options: {
    navigation: {
      icon: 'Columns',
    },
    properties: {
      bucket: {
        isVisible: { list: false, show: true, edit: false, filter: false },
      },
      content: {
        type: 'richtext',
        isVisible: { list: false, show: true, edit: true, filter: true },
      },
      system: {
        isVisible: { list: false, show: false, edit: false, filter: false },
      },
      systems: {
        isVisible: { list: true, show: true },
      },
    },
  },
};

export default post;
