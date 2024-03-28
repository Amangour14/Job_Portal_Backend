"use strict";
import { Model } from "sequelize";

interface ContactAttribute {
  id: number;
  name: string;
  email: string;
  message: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Contact extends Model<ContactAttribute> implements ContactAttribute {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: number;
    name!: string;
    email!: string;
    message!: string;
    static associate(models: any) {
      // define association here
    }
  }
  Contact.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Contact",
    }
  );
  return Contact;
};
