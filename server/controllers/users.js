import UserDetails from '../models/UserDetails.js'

export const getUsers = async (req, res) => {
    try {
        const userDetails = await UserDetails.find();

        res.status(200).json(userDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const postUser = async (req, res) => {
    const user = req.body; 

    const newUser = new UserDetails(user);
    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id: uID } = req.params;
    const user = req.body;
    const existCheck = await UserDetails.exists({ userID: uID });
    if (!existCheck) {
        return res.status(404).send('No User with that ID');
    } else {
        const selectedUser = await UserDetails.find({userID: uID}).select('_id');
        const updatedUser = await UserDetails.findByIdAndUpdate(selectedUser, user, { new: true });
        res.json(updatedUser);
    }
}

export const deleteUser = async (req, res) => {
    const { id: uID } = req.params;
    const existCheck = await UserDetails.exists({ userID: uID });
    if (!existCheck) {
        return res.status(404).send('No User with that ID');
    } else {
        const selectedUser = await UserDetails.find({userID: uID}).select('_id');
        await UserDetails.findByIdAndRemove(selectedUser);
        res.json({ message: 'Post Deleted successfully' });
    }
}