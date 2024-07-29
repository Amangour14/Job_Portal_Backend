"use strict";
import { Model } from "sequelize";
interface AppAttributes {
  applicationId: number;
  fullname: string;
  resume: File;
  email:string;
  experience: Text;
  userId: number;
  jobId: number;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class JobApplication extends Model<AppAttributes> implements AppAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    applicationId!: number;
    fullname!: string;
    email!: string;
    resume!: File;
    experience!: Text;
    userId!: number;
    jobId!: number;

    static associate(models: any) {
      // define association here
    }
  }
  JobApplication.init(
    {
      applicationId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false
      },
      resume: {
        type: DataTypes.BLOB,
        allowNull: false,
      },
      experience: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Users",
          key: "id",
        },
      },

      jobId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Jobs",
          key: "jobId",
        },
      },
    },
    {
      sequelize,
      modelName: "JobApplication",
    }
  );
  return JobApplication;
};
