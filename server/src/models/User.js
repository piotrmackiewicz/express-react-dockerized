import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: String,
    role: String,
    age: Number
});

const User = mongoose.model('users', userSchema);

export default User;