const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  text : {
    type : String,
    required : true,
  },
  posterId : {
    type : Schema.Types.ObjectId,
    required : true,
  },
  posterUsername : {
    type : String,
    required : true,
  },
}, {
  timestamps : true,
});

const Post = mongoose.model("Post", postSchema);

module.exports = {
  Post,
};