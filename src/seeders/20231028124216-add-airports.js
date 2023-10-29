'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports',[
    {
      name:'Kempegowda International aiurport',
      cityId:6,
      createdAt: new Date(),
      updatedAt:new Date()
    },
    {
      name:'Mysuru aiurport',
      cityId:6,
      createdAt: new Date(),
      updatedAt:new Date()
    },
    {
      name:'Mangluru International aiurport',
      cityId:6,
      createdAt: new Date(),
      updatedAt:new Date()
    },
    {
      name:'Indira Gandhi International aiurport',
      cityId:4,
      createdAt: new Date(),
      updatedAt:new Date()
    }
   ],{});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
