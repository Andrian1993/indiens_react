/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_QUESTION', {
    QUE_ID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    MEM_ID: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    QUE_QS_TITLE: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    QUE_QS_CONT: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    QUE_AN_TITLE: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    QUE_AN_CONT: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    QUE_STATE: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'N'
    },
    QUE_QS_DT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    QUE_AN_DT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'TB_QUESTION'
  });
};
