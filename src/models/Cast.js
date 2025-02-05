import { Schema, model } from "mongoose";


const castSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, 'Name should be at least 5 characters long!'],
        match: [/^[a-zA-Z 0-9]+$/, 'Name should be alphanumeric, digits and whitespace only!'],
        trim: true,

    },
    age: {
        type: Number,
        required: true,
        min: [0, 'Age should be at least 1 year old!'],
        max: [120, 'Age should be at most 100 years old!'],
    },
    born: {
        type: String,
        min: 10,
        match: /^[a-zA-Z 0-9]+$/,
    },
    imageUrl: {
        type: String,
        // Custom validation
        validate: {
            validator: function (v) {
                return /https?:\/\//.test(v);
            },
            message: (props) => `Invalid URL: ${props.value}`
        }
    },
})


const Cast = model("Cast", castSchema);


export default Cast;