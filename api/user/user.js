import { user } from "../../models/index";
export default {
  Query: {
    user: async (_, args) => {
      const { id } = args;
      return await user.findAll({
        where: { id }
      });
    }
  },
  Mutation: {
    createUser: async (_, args) => {
      const { name, email, password } = args;
      return await user.create({
        name,
        email,
        password
      });
    }
  }
};
