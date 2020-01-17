/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_PROPOSAL', {
    PRO_ID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    JOB_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_JOBS',
        key: 'JOB_ID'
      }
    },
    PJT_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_JOBS',
        key: 'PJT_ID'
      }
    },
    PRO_SENDER: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PRO_RECEIVER: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    PRO_CONTENT: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    PRO_RECEIVER_READ_YN: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'N'
    },
    PRO_ACCEPT_ST: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: '1'
    },
    PRO_FINAL_ACCEPT_ST: {
      type: DataTypes.STRING(1),
      allowNull: true,
      defaultValue: 'N'
    },
    PRO_DT: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'TB_PROPOSAL'
  });
};
