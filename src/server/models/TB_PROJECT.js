/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_PROJECT', {
    PJT_ID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    MEM_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'TB_MEMBER',
        key: 'MEM_ID'
      }
    },
    PJT_LOGO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PJT_TYPE: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    PJT_TYPE_ETC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PJT_NAME: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    PJT_DESC: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    PJT_STEP: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    PJT_DUE_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PJT_BUILD_DT: {
      type: DataTypes.DATE,
      allowNull: false
    },
    PJT_DT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'TB_PROJECT'
  });
};
