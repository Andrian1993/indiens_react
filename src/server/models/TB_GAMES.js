/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TB_GAMES', {
    GME_ID: {
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
    GME_TYPE: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    GME_NAME: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    GME_ROLE: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    GME_DT: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'TB_GAMES'
  });
};
