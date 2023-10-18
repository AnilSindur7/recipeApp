import mongoose from "mongoose";

const RecipeSchema = mongoose.Schema({
    name: {
        type: String, 
        require: true, 
        unique: true},

    ingredients: [{
        type: String,
        require: true,    
    }],

    instruction:{
        type:String,
        requires: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    cookingTime:{
        type: Number,
        required: true

    },
    userOwner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true

    }

});

export const RecipeModel = mongoose.model("recipes", RecipeSchema); 