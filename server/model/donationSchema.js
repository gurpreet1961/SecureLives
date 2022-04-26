const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    paidAmount: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    disc: {
        type: String,
        required: true
    },
    accHolderName: {
        type: String,
        required: true
    },
    accNo: {
        type: Number,
        required: true
    },
    ifscCode: {
        type: String,
        required: true
    },
    uipID: {
        type: String
    },
    postDate: {
        type: Date,
        default: Date.now
    }
})

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;