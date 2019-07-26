"use strict";
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define(
    "Recipe",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      ingredients: {
        type: DataTypes.STRING,
        allowNull: false
      },
      direction: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {}
  );
  Recipe.associate = function(models) {
    // associations can be defined here
    Recipe.belongsTo(models.user, { foreingKey: "userId" });
  };
  return Recipe;
};
