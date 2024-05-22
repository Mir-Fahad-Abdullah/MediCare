const Doctor = require('../models/doctor'); 

 

/** 

 * @desc Get ongoing serial for a specific doctor 

 * @param req 

 * @param res 

 */ 

const getOngoingSerial = async (req, res) => { 

    try { 

        const { doctorId } = req.params; 

        const doctor = await Doctor.findById(doctorId); 

 

        if (!doctor) { 

            return res.status(404).send('Doctor not found'); 

        } 

 

        res.status(200).json({ ongoingSerial: doctor.ongoingSerial }); 

    } catch (error) { 

        res.status(500).send(error.message); 

    } 

}; 

 

module.exports = { getOngoingSerial }; 