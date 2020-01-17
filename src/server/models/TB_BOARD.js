/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_BOARD', {
    BRD_ID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    BRD_MAIN_TITLE: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    BRD_MAIN_CONTENTS: {
      type: DataTypes.STRING(4000),
      allowNull: false
    },
    BRD_MAIN_MEM_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    BRD_MAIN_DT: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'TB_BOARD'
  });
};
