import { Recipe } from "../../models/index";

export default {
  Query: {
    allRecipes: async (_, args) => {
      let recipes = await Recipe.findAll();
      console.log("들어왔다!");
      return recipes;
    },

    recipe: async (_, args) => {
      const { id } = args;
      return await Recipe.findAll({
        where: { id }
      });
    }
  },
  Mutation: {
    createRecipe: async (_, args) => {
      const { userId, title, ingredients, direction } = args;
      return await Recipe.create({ userId, title, ingredients, direction });
    }
  }
};
