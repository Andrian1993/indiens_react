/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_COIN', {
    CON_ID: {
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
    CON_GOODS_TYPE: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    CON_GOODS_PRICE: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    CON_DT: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'TB_COIN'
  });
};
