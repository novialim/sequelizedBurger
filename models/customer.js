module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    // Giving the Customer model a name of type STRING
    customername: DataTypes.STRING
  });

  Customer.associate = function(models) {
    // Associating Customer with Burgers
    // When an Customer is deleted, also delete any associated Burgers
    Customer.belongsTo(models.Burger, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Customer.sync();
  return Customer;
};
