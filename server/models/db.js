var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/webcrawler');

domainSchema = {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}

var Domain = db.define('domain', domainSchema)

pageSchema = {
    // defined by <head> <title> title goes here </title> </head>
    title: {
        type: Sequelize.STRING,
        allowNull: false   // just store an empty string
    },
    // The precise URL where this page is located
    uri: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            isUrl: true
        }
    },
    // A string containing a concatenated form of all text strings from this page
    textContent: {
        type: Sequelize.TEXT,
        allowNull: false
    }
}

var Page = db.define('page', pageSchema)



queueSchema = {

    url: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    origin: {
        type: Sequelize.TEXT,
    }
}


var Queue = db.define('queue', queueSchema)



Page.belongsToMany(Page, { as: 'outboundLinks', through: 'links', foreignKey: 'linker' });
Page.belongsToMany(Page, { as: 'inboundLinks', through: 'links', foreignKey: 'linkee' });

Page.hasMany(Queue);

Domain.hasMany(Page);


module.exports = {
    db: db,
    Page: Page,
    Domain: Domain,
    Queue: Queue
}
