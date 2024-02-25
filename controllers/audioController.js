const Audio = require('../models/audioModel');

const getAudio = async (req, res) => {
    try {
        const audio = await Audio.find();
        res.status(200).json(audio);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const postAudio = async (req, res) => {
    try {
        const { audio } = req.body;
        const newAudio = await Audio.create({
            audio,
        });
        res.status(201).json(newAudio);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteAudio = async (req, res) => {
    try {
        const audioId = req.params.id;
        const deletedAudio = await Audio.findByIdAndDelete(audioId);
        if (!deletedAudio) {
            return res.status(404).json({ message: 'Audio not found' });
        }
        res.status(200).json({ message: 'Audio deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAudio, postAudio, deleteAudio };
