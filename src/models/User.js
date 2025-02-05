import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true, //* sanitize email
        unique: true, //*This is not validator, its index
        match: /\@[a-zA-Z]+.[a-zA-Z]+$/,
        minLength: 10,
    },
    password: {
        type: String,
        required: true,
        match: /^\w+$/,
        minLength: [5, 'Password should be at least 6 characters'],
    },
});


userSchema.virtual('rePassword')
    .set(function (rePassword) {
        if (rePassword !== this.password) {
            throw new Error('Passwords do not match');
        }
    });

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 10);

});

const User = model("User", userSchema);




export default User;