import {Schema, model} from "mongoose";

const articleSchema = new Schema({
    title: {type: String, required: true},
    body: {type:String}
});

export default model('Article', articleSchema);