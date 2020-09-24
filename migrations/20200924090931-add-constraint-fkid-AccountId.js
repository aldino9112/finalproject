'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Transactions', {
      fields: ['AccountId'],
      type: 'foreign key',
      name: 'custom_fkey_AccountId',
      references: { //Required field
        table: 'Accounts',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return queryInterface.removeConstraint("Accounts", "custom_fkey_AccountId")
  }
};
