'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('set_times', {
      set_time_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stage_id: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      event_id: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      band_id: {
        allowNull: false,
        type: Sequelize.SMALLINT
      },
      available_start_time: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end_time: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('set_times');
  }
};