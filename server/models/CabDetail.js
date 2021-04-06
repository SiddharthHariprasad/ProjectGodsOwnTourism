import mongoose from 'mongoose';

const cabSchema = mongoose.Schema({
    cabID: String,
	driverName: String,
	carModel: String,
	languages: [String],
	experience: Number,
	age: Number,
	photo: String,
	availability : Date,
	cost: Number,
});

const CabDetail = mongoose.model('CabDetail', cabSchema);

export default CabDetail;