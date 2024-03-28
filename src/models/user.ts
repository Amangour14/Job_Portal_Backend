"use strict";
import { Model } from "sequelize";

interface UserAttribute {
  id: number;
  email: string;
  password: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttribute> implements UserAttribute {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    email!: string;
    password!: string;
    static associate(models: any) {
      // define association here
      User.belongsToMany(models.Jobs, { through: "JobApplication" });

    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};

