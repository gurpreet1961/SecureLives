const Donations = require
    ("../model/donationSchema");
const userAdd = async (req, res) => {
    // console.log(req.body);
    console.log(req.file);
    let image = (req.file) ? (req.file.mimetype == 'image/jpeg' || req.file.mimetype == 'image/jpg' || req.file.mimetype == 'image/png') ? req.file.filename : null : null;
    let { title,
        totalAmount,
        category,
        disc,
        accHolderName,
        accNo,
        ifscCode,
        uipID } = req.body;
    let data = new Donations({
        title,
        totalAmount,
        category,
        image,
        disc,
        accHolderName,
        accNo,
        ifscCode,
        uipID
    })
    let response = await data.save();
    res.status(200).json({ message: 'ok', response: response });
}
module.exports = {
    userAdd
}