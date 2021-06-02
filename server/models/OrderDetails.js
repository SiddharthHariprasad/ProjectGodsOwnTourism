import mongoose from 'mongoose';

const orderSchema = mongoose.Schema({
    orderID: String,
	packID: String,
	ticketID: String,
	hotelID: String,
	roomID: String,
	cabID: String,
	guideID: String,
});

const OrderDetail = mongoose.model('OrderDetail', orderSchema);

export default OrderDetail;