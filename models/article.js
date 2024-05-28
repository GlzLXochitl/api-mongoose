import mongoose from "mongoose";

const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    content : {
        type: String,
        required: true,
    }},{timestamps: true});

    const ArticleModel = mongoose.model('Article', articleSchema);

    export default ArticleModel;

