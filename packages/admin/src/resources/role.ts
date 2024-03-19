import { RoleEntity } from "../entities/role.entity.js";

const role = {
  resource: RoleEntity,
  options: {
    navigation: {
      icon: 'Aperture',
    },
    properties: {
      id: {
        isVisible: { list: false, show: true, edit: false, filter: false },
      },
    },
    label: 'Роли',
  },
};

export default role;
