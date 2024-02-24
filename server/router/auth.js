const express = require('express');
const bcrypt = require('bcryptjs');
const multer = require("multer");
const userCtrl = require("../controllers/userController")
const jwt = require('jsonwebtoken');
const router = express.Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");
const cookieParser = require('cookie-parser');
router.use(cookieParser());
const authenticate = require("../middleware/authenticate")
require('../db/conn');
const User = require('../model/userSchema');
const Donation = require('../model/donationSchema');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + file.originalname);
    }
})

const upload = multer({ storage: storage });
router.get('/', (req, res) => {
    res.send('Hello from server router js');
});





//Using Async Await
router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body;

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




router.post('/signin', async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "enter all info" })
        }
        const userData = await User.findOne({ email: email });
        if (userData) {
            const isMatch = await bcrypt.compare(password, userData.password);
            token = await userData.generateAuthToken();
            res.cookie("jwtoken", token, {
                //expires after 30 days
                //Date.now() + milisec
                expires: new Date(Date.now() + 25892000000),
                httpOnly: true
            })
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
router.get('/getData', async (req, res) => {
    try {
        const donationData = await Donation.find();
        if (donationData) {
            res.json({ donationData });
        }
    } catch (err) {

        console.log(err);

    }
})
//About us Page
router.get('/profile', authenticate, (req, res) => {

    res.send(req.rootUser);
});

router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({ error: "please fill the contact form properly" })
        }
        const userContact = await User.findOne({ _id: req.userID });
        if (userContact) {

            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({ message: "user contact successfully" });
        }
    } catch (error) {
        console.log(error);
    }

});

router.post('/add', upload.single('myFile'), userCtrl.userAdd)

/**************PAYMENT GATEWAY BACKEND***************/
router.post("/orders", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100, // Convert amount to paise (1 INR = 100 paise)
            currency: "INR",
            receipt: crypto.randomBytes(10).toString("hex"),
        };

        instance.orders.create(options, (err, order) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Something Went Wrong!" });
            }
            res.status(200).json({ data: order });
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
});

router.post("/verify", async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = req.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto.createHmac("sha256", process.env.KEY_SECRET).update(sign.toString()).digest("hex");

        if (razorpay_signature === expectedSign) {
            return res.status(200).json({ message: "Payment verified successfully" });
        } else {
            return res.status(400).json({ message: "Invalid signature sent!" });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
});



router.get('/logout', authenticate, (req, res) => {
    console.log("logout done")
    res.clearCookie('jwtoken', { path: "/" })
    res.status(200).send("user logout");
});
module.exports = router;
