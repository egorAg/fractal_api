import { UserEntity } from "../entities/user.entity.js";
import passwordsFeature from "@adminjs/passwords";

const user = {
  resource: UserEntity,
  options: {
    navigation: {
      icon: 'User',
    },
    actions: {
      new: {
        isAccessible: true,
      },
    },
    properties: {
      password: {
        isVisible: { list: false, show: false, edit: false, filter: false },
      },
      reset_token: {
        isVisible: false,
      },
    },
  },
};

export default user;
