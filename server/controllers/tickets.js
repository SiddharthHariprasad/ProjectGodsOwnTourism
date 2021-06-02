import TicketDetails from '../models/TicketDetails.js'

export const getTickets = async (req, res) => {
    try {
        const ticketDetails = await TicketDetails.find();

        res.status(200).json(ticketDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postTicket = async (req, res) => {
    const ticket = req.body; 

    const newTicket = new TicketDetails(ticket);
    try {
        await newTicket.save();
        res.status(201).json(newTicket);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTicket = async (req, res) => {
    const { id: tID } = req.params;
    const ticket = req.body;
    const existCheck = await TicketDetails.exists({ ticketID: tID });
    if (!existCheck) {
        return res.status(404).send('No Ticket with that ID');
    } else {
        const selectedTicket = await TicketDetails.find({ticketID: tID}).select('_id');
        const updatedTicket = await TicketDetails.findByIdAndUpdate(selectedTicket, ticket, { new: true });
        res.json(updatedTicket);
    }
}

export const deleteTicket = async (req, res) => {
    const { id: tID } = req.params;
    const existCheck = await CabDetails.exists({ ticketID: tID });
    if (!existCheck) {
        return res.status(404).send('No Cab with that ID');
    } else {
        const selectedCab = await CabDetails.find({ticketID: tID}).select('_id');
        await TicketDetails.findByIdAndRemove(selectedTicket);
        res.json({ message: 'Post Deleted successfully' });
    }
}