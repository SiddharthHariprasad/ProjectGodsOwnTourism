import CabDetails from '../models/CabDetail.js'

export const getCabs = async (req, res) => {
    try {
        const cabDetails = await CabDetails.find();

        res.status(200).json(cabDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postCabs = async (req, res) => {
    const cab = req.body; 

    const newCab = new CabDetails(cab);
    try {
        await newCab.save();
        res.status(201).json(newCab);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}