import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    orderID: String,
	orderCategory: String,
	orderCreatedAt: { type: Date, default: new Date() },

	cabID: String,
	driverName: String,
	carModel: String,
	driverLanguages: [String],
	driverExperience: Number,
	driverAge: Number,
	driverAvailability : [String],
	driverCost: Number,

	guideID: String,
	guideName: String,
	guideLanguages: [String],
	guideExperience: Number,
	guideAge: Number,
	guideAvailability : [String],
	guideCost: Number,
	
	packID: String,
	packName: String,
	packAvailability : [String],
	packCost: Number,

	ticketID: String,
	ticketType: String,
	departure: String,
	destination: String,
	seatsAvailable: Number,
	date: String,
	time: String, 
	ticketCost: Number,

	hotelID: String,
	hotelName: String,
	hotelDetails: String,
	roomID: String,
	roomType: String,
	facilities: [String],
    roomAvailability : [String],
	roomCost: Number
	
});

const OrderDetail = mongoose.model('OrderDetail', orderSchema);

export default OrderDetail;