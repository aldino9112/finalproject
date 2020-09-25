'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('Accounts', [
    {
       first_name: 'Admin',
       last_name: 'Satu',
       email: 'admin@shop.com',
       password: 'admin',
       no_telephone: '081234567',
       role:'admin',
       createdAt: new Date(), 
       updatedAt: new Date()
    },
    {
      first_name: 'Admin',
      last_name: 'Dua',
      email: 'admin2@shop.com',
      password: 'admin',
      no_telephone: '081234568',
      role:'admin',
      createdAt: new Date(),
      updatedAt: new Date()
   }
  ]
    , {});
  },

  down:  (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Accounts', null, {})
  }
};
