/* jshint indent: 2 */
module.exports = function (sequelize, DataTypes) {
    const users = sequelize.define(
      "users",
      {
        username: {
          primaryKey: true,
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: true,
        }
      },
      {
        tableName: "users",
      }
    );
    return users;
  };
  