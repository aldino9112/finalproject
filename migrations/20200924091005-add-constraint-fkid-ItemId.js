'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Transactions', {
      fields: ['ItemId'],
      type: 'foreign key',
      name: 'custom_fkey_ItemId',
      references: { //Required field
        table: 'Items',
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
    return queryInterface.removeConstraint("Accounts", "custom_fkey_ItemId")
  }
};
