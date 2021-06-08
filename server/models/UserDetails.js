import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
	name: {type: String, required: true},
    email: {type: String, required: true},
	password: {type: String, required: true},
	id: String
});

const UserDetail = mongoose.model('UserDetail', userSchema);

export default UserDetail;