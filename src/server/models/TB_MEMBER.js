/* jshint indent: 2 */
const bcrypt = require('bcryptjs');

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('TB_MEMBER', {
    MEM_ID: {
      type: DataTypes.INTEGER(11),
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    MEM_IMG: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MEM_EMAIL: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    MEM_PASS: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    MEM_NAME: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    MEM_TEL: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    MEM_TYPE: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    MEM_SKILLS: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MEM_LANG: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    MEM_LANG_ETC: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    MEM_LINK: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    MEM_JOB: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MEM_COINS: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    MEM_ADMIN_YN: {
      type: DataTypes.STRING(1),
      allowNull: false,
      defaultValue: 'N'
    },
    MEM_DT: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'TB_MEMBER',
    instanceMethods: {
      generateHash(password) {
        return bcrypt.hash(password, bcrypt.genSaltSync(8));
      },
      validPassword(password, hash, callback) {
        return bcrypt.compare(password, hash, (err, res) => {
          if (err) callback(err, null);
          else callback(null, res);
        });
      }
    }
  });
};
