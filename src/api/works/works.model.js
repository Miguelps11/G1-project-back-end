const mongoose = require('mongoose');
const worksSchema = new mongoose.Schema(

    {
        name: { type: String, required: true, trim: true },
        img: { type: String, trim: true, require: true},
        description: {type: String, trim: true, require: true },
        category: {type: String, trim: true, require: true},
        url: {type: String, trim: true, require: false}
    },
    {
        timestamps: true
    }
);


const Works = mongoose.model('works', worksSchema);
module.exports = Works;