/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_FABS', {
    FAB_ID: {
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
    MEM_ID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'TB_MEMBER',
        key: 'MEM_ID'
      }
    },
    FAB_DT: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'TB_FABS'
  });
};
