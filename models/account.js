'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    fullname(){
      return this.first_name + ' ' + this.last_name;
    }
    static associate(models) {
      // define association here
      Account.belongsToMany(models.Item, { through: 'Transaction' , foreignKey: 'AccountId' } )
    }
  };
  Account.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: { type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'email tidak boleh kosong'
        }
      }
    },
    password: { type:DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'password tidak boleh kosong'
        }
      }
    },
    no_telephone: DataTypes.STRING,
    role: DataTypes.STRING
  }, 
    {
      hooks: {
        beforeCreate: (instance, options) => {
          if ( !instance.first_name ) {
            instance.first_name = 'USER'
          }
          if ( !instance.last_name ) {
            instance.last_name = 'Anonymous'
          }
          if ( !instance.no_telephone ) {
            instance.no_telephone = 'No telepon belum di isi'
          }
          if ( !instance.role ) {
            instance.role = 'user'
          }
        }
      },
    sequelize,
    modelName: 'Account',
  });
  return Account;
};