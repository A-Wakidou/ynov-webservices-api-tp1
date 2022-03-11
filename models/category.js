const Sequelize = require('sequelize')
const db = require('../config/databaseConfig')

const category = db.define('category', {   
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull:false
    },
    name: {
        type: Sequelize.STRING,
        allowNull:false
    }
    }, {
        timestamps: false,
        freezeTableName: true
    })

module.exports = category