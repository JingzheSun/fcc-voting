var mongoose = require('mongoose');

var voteSchema = mongoose.Schema({
    title: String,
    creatorName: String,
    options: [{opt: String, cnt: Number}],
    hidden: Boolean
})

module.exports = mongoose.model('Vote', voteSchema);
