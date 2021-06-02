import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    email: String,
	password: String,
	name: String
});

const UserDetail = mongoose.model('UserDetail', userSchema);

export default UserDetail;