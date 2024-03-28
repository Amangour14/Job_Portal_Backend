"use strict";
import { Model } from "sequelize";
 export interface JobAttributes {
  jobId: number;
  jobTitle: string;
  remote_or_onsite: string;
  location: string;
  fulltime_or_Internship: string;
  salary: string;
  job_description: Text;
  job_responsibility: Text;
  educational_requirement: string;
  experiences: string;
}
module.exports = (sequelize: any, DataTypes: any) => {
  class Jobs extends Model<JobAttributes> implements JobAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    jobId!: number;
    jobTitle!: string;
    remote_or_onsite!: string;
    location!: string;
    fulltime_or_Internship!: string;
    salary!: string;
    job_description!: Text;
    job_responsibility!: Text;
    educational_requirement!: string;
    experiences!: string;

    static associate(models: any) {
      // define association here
       Jobs.belongsToMany(models.User, { through: "JobApplication" });

    }
  }
  Jobs.init(
    {
      jobId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      jobTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      remote_or_onsite: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fulltime_or_Internship: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      job_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      job_responsibility: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      educational_requirement: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      experiences: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Jobs",
    }
  );
  return Jobs;
};
