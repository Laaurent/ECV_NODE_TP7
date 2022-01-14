'use strict';

const { Role } = require('../models');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {


  const admin = await Role.findOne({
    where: { name: 'admin' }
  });
  const user = await Role.findOne({
    where: { name: 'user' }
  });
  const guest = await Role.findOne({
    where: { name: 'guest' }
  });

   await queryInterface.bulkInsert('users', [
      {
        id: uuidv4(),
        updatedAt: new Date(),
        createdAt: new Date(),
        firstname: 'Jean-Michel',
        lastname: 'Admin',
        roleId: admin.id,
        email: 'jm@admin.com',
        github_url: 'https://github.com/jm-admin',
      },
      {
        id: uuidv4(),
        updatedAt: new Date(),
        createdAt: new Date(),
        firstname: 'Jean-Claude',
        lastname: 'User',
        roleId: user.id,
        email: 'jc@user.com',
        github_url: 'https://github.com/jc-user',
      },
      {
        id: uuidv4(),
        updatedAt: new Date(),
        createdAt: new Date(),
        firstname: 'Jean-Marie',
        lastname: 'Guest',
        roleId: guest.id,
        email: 'jm@guest.com',
        github_url: 'https://github.com/jm-guest',
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
