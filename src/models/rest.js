const mongoose = require("mongoose");

const restSchema = new mongoose.Schema({
    id: { type: Number },
    name: { type: String },
    cuisine: { type: String },
    address: [{
        street: {type: String},
        number: {type: String},
        neighborhood: {type: String}

    }],
    price: { type: String }
    
},{
    versionKey: false
});

module.exports = mongoose.model("rest", restSchema);


  