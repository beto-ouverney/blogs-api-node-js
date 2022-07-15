'use strict';
module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    tableName: 'PostCategories',
    timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'categoryId',
      as: 'blogPosts',
      otherKey: 'postId',
      through: PostCategory,
    })
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'postId',
      as: 'categories',
      otherKey: 'categoryId',
      through: PostCategory,
    })
  }
  return PostCategory;

};