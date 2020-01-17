/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_MESSAGE', {
    MSG_ID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    MSG_SENDER: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    MSG_RECEIVER: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    MSG_MESSAGE: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    MSG_DT: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'TB_MESSAGE'
  });
};
