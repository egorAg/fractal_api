import { UserEntity } from "../entities/user.entity.js";
import passwordsFeature from "@adminjs/passwords";
import { loader } from "../components/index.js";
import bcrypt from "bcrypt";

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
  features: [
    passwordsFeature({
      componentLoader: loader,
      properties: {
        encryptedPassword: 'password',
        password: 'newPassword'
      },
      hash: (p) => bcrypt.hashSync(p, 10),
    })]
};

export default user;
