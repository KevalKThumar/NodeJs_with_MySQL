'use strict';
// to create the seed : npx sequelize-cli seed:generate --name category
// to undo the seed : npx sequelize-cli db:seed:undo --seed filename
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('catagories', [
      {
        name: 'Node Js',
      },
      {
        name: 'Vue Js',
      },
      {
        name: 'React Js',
      },
      {
        name: 'Angular Js',
      },
      {
        name: 'Flutter',
      },
      {
        name: 'Dart',
      },
      {
        name: 'Kotlin',
      },
      {
        name: 'Java',
      },
      {
        name: 'Swift',
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('catagories', null, {})
  }
};
