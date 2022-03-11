const Sequelize = require('sequelize')
const db = require('../config/databaseConfig')
const Movies = require('./movies.js')

const category = db.define('category',
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
        }
    }, {
        timestamps: false,
    }
    )

    category.hasOne(Movies, {
        foreignKey: 'category_id'
    })

module.exports = category