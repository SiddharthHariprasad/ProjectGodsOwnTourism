import mongoose from 'mongoose';

const packSchema = mongoose.Schema({
    packID: String,
	packName: String,
	ticketID: String,
	hotelID: String,
	roomID: String,
	cabID: String,
	guideID: String,
	packPhoto: String,
	packAvailability : [String],
	packCost: Number,
});

const PackDetail = mongoose.model('PackDetail', packSchema);

export default PackDetail;