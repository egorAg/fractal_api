import { CommentEntity } from "../entities/comment.entity.js";

const comment = {
  resource: CommentEntity,
  options: {
    navigation: {
      icon: 'Edit',
    },
    properties: {
      post_id: {
        isVisible: { list: false, show: true, edit: true, new: true },
      },
    },
  },
};

export default comment;
