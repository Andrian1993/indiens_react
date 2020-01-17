/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_BOARD_SUB', {
    BRD_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'TB_BOARD',
        key: 'BRD_ID'
      }
    },
    BRD_SUB_ID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    BRD_SUB_CONTENTS: {
      type: DataTypes.STRING(4000),
      allowNull: false
    },
    BRD_SUB_MEM_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    BRD_SUB_DT: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'TB_BOARD_SUB'
  });
};
