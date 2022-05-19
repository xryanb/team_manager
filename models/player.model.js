const mongoose = require('mongoose');


const PlayerSchema = new mongoose.Schema({
    player: { type: String,
    required:[true,'full name is required'],
    minlength:[7,'player must be 7 characters long']},

    position:{type:String,
        required:[true,'position is required!'],
        minlength:[5,'5 characters long']},

    action:{
        type:Number,
        default: 0,
        max:2
    }

}, { timestamps: true });
module.exports.Player = mongoose.model('Player', PlayerSchema);