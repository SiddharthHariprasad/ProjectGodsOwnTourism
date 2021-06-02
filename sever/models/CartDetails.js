import mongoose from 'mongoose';

const cartSchema = mongoose.Schema({
    cartID: String,
	packID: String,
	ticketID: String,
	hotelID: String,
	roomID: String,
	cabID: String,
	guideID: String,
});

const CartDetail = mongoose.model('CartDetail', cartSchema);

export default CartDetail;