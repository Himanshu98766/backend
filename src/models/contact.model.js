import { model, Schema } from "mongoose";

export const contactSchema = new Schema({
    username:{type:String, required: true},
    email:{type:String, required: true},
    message:{type:String, required: true}
});

// model or collection
export const Contact = new model("Contact", contactSchema);