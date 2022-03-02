const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');
router.get('/', (req, res) => {
    res.send('Hello from server router js');
});

/////Using Promises
// router.post('/register', (req, res) => {

//     // console.log(req.body.name);
//     // console.log(req.body.email);
//     const { name, email, phone, work, password, cpassword } = req.body;
//     // console.log(name);
//     // console.log(email);
//     // res.json({ message: req.body });

//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "enter all info" })
//     }

//     //check user already exist
//     User.findOne({ email: email })
//         .then((userExist) => {
//             if (userExist) {
//                 return res.status(422).json({ error: "Email already exist" });
//             }
//             //if user not exsist

//             //creating new object of User and pass all value of req.body(which we already destructured)
//             const user = new User({ name, email, phone, work, password, cpassword });

//             //saving the data in database it give a promise
//             user.save().then(() => {
//                 res.status(202).json({ message: "user registered successfuly" });
//             }).catch((err) => res.status(500).json({ error: "Failed to register" }));
//         }).catch(err => { console.log(err); });
// });

//Using Async Await
router.post('/register', async (req, res) => {

    // console.log(req.body.name);
    // console.log(req.body.email);
    const { name, email, phone, work, password, cpassword } = req.body;
    // console.log(name);
    // console.log(email);
    // res.json({ message: req.body });

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "enter all info" })
    }
    try {

        //check user already exist
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email already exist" });
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Comfirm password Should be same as password" });
        } else {
            const user = new User({ name, email, phone, work, password, cpassword });


            await user.save();
            res.status(202).json({ message: "user registered successfuly" });

        }
    } catch (err) {
        console.log(err);
    }

});




router.post('/login', async (req, res) => {
    try {
        // console.log(req.body);
        const { email, password } = req.body;
        // res.json({ message: req.body });
        if (!email || !password) {
            return res.status(400).json({ error: "enter all info" })
        }
        const userData = await User.findOne({ email: email });
        if (userData) {
            const isMatch = await bcrypt.compare(password, userData.password);
            if (!isMatch) {
                return res.status(422).json({ error: "Invalid Credientials" });
            } else {
                // res.status(201).json({ message: userData });
                res.json({ message: "Login Successful" });
            }
        } else {
            //user not present
            return res.status(422).json({ error: "Invalid Credientials" });


        }

    } catch (err) {

        console.log(err);

    }

});
module.exports = router;