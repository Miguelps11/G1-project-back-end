
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const mongoDb = process.env.MONGO_DB;

const connect = async () => {
    try {
        const db = await mongoose.connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true })
        const { host } = db.connection;
        console.log(`Connected to the DB 👀: Co-working DB host❤️: ${host}`);
    } catch (error) {
        console.error(`Was´nt able to connect to the DB 💔`, error)
    }
}


module.exports = { connect };