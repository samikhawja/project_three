const db = require('../config/connection');
const { User, Journal } = require('../models');
const journalSeeds = require('./journalSeeds.json');

db.once('open', async () => {
    try {
        await Journal.deleteMany();

        const journalSeed = await Journal.insertMany(journalSeeds);

        console.log('Journals seeded');
        
        await User.deleteMany();

        await User.create({
            "email": "skhawja@gmail.com",
            "password": "password1",
            "fname": "Sami",
            "lname": "Khawja",
            "journals": [journalSeed[6]._id, journalSeed[7]._id]
        });

        await User.create({
            "email": "afriedman@gmail.com",
            "password": "password2",
            "fname": "Alix",
            "lname": "Friedman",
            "journals": [journalSeed[0]._id, journalSeed[1]._id, journalSeed[2]._id, journalSeed[3]._id, journalSeed[4]._id, journalSeed[5]._id,]
        });

        await User.create({
            "email": "sarah@gmail.com",
            "password": "qwert12345",
            "fname": "Sarah",
            "lname": "Hollingsworth",
            "journals": [journalSeed[8]._id, journalSeed[9]._id, journalSeed[10]._id, journalSeed[11]._id]
        });

        await User.create({
            "email": "johnsmoth@gmail.com",
            "password": "password3",
            "fname": "John",
            "lname": "Smith",
        });

        console.log('Users seeded');
        
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('all done!');
    process.exit(0);
});