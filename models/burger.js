module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

  Burger.associate = function(models) {
    // Associating Customer with Burgers
    // When an Customer is deleted, also delete any associated Burgers
    Burger.hasMany(models.Customer, {
      onDelete: "cascade"
    });
  };

  Burger.sync();
  return Burger;
};
