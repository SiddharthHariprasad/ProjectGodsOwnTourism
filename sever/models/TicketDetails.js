import mongoose from 'mongoose';

const ticketSchema = mongoose.Schema({
    ticketID: String,
	ticketType: String,
	departure: String,
	destination: String,
	seatsAvailable: Number,
	date: String,
	time: String, 
	ticketCost: Number,
});

const TicketDetail = mongoose.model('TicketDetail', ticketSchema);

export default TicketDetail;