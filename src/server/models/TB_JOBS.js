/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_JOBS', {
    JOB_ID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    PJT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_PROJECT',
        key: 'PJT_ID'
      }
    },
    JOB_TYPE: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    JOB_PAY_TYPE: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    JOB_DEV_MM: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    JOB_ROLE: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    JOB_ST: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    JOB_VIEW_YN: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    JOB_DT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'TB_JOBS'
  });
};
