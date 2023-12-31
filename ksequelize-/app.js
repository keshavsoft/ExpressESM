import Sequelize from "sequelize";

// Option 1: Passing a connection URI
const sequelize = new Sequelize('sqlite::memory:') // Example for sqlite

// Option 2: Passing parameters separately (sqlite)
const sequelize1 = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}