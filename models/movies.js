const Sequelize = require('sequelize')
const db = require('../config/databaseConfig')

const movies = db.define('movies',
    {   
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false
        },
        name: {
            type: Sequelize.STRING,
            allowNull:false
        },
        description: {
            type: Sequelize.STRING,
            allowNull:false
        },
        date: {
            type: Sequelize.DATE,
            allowNull:false
        },
        note: {
            type: Sequelize.INTEGER,
            allowNull:false
        }
    }, {
        timestamps: false,
    }
    )

module.exports = movies