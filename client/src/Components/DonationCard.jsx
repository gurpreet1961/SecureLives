import axios from "axios";
import React, { useState } from "react";
function DonationCard(props) {
	const [Amount, setAmount] = useState();
	const handleInputs = (e) => {
		setAmount(e.target.value);
	};
	const initPayment = (data) => {
		const options = {
			key: "rzp_test_x3SdLCLG2uf5ml",
			amount: data.amount,
			currency: data.currency,
			name: props.accHolderName,
			description: "Test Transaction",
			image: `http://localhost:8000/public/uploads/${props.image}`,
			order_id: data.id,
			handler: async (res) => {
				try {
					const verifyUrl = "http://localhost:8000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, res);
					if (data.message === "Payment cerified successfully") {
						setAmount("");
						window.alert(data.message);
					}
				} catch (error) {
					window.alert(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
	};
	const handlePayment = async () => {
		try {
			const orderUrl = "http://localhost:8000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: Amount });
			initPayment(data.data);
		} catch (err) {
			window.alert(err);
		}
	};
	return (
		<>
			<div className="activeDonation">
				<div className="DonationImg">
					<img
						src={`http://localhost:8000/public/uploads/${props.image}`}
						alt=""
					/>
				</div>
				<div className="middle">
					<div className="Middlelef">
						<h2 className="disc">{props.disc}</h2>
						<h1>₹{props.totalAmount}</h1>
						<p className="RemaingAmount">
							Remaing: ₹{props.totalAmount - props.paidAmount}
						</p>
					</div>
					<div className="donationCompletion">
						<svg>
							<circle cx={38} cy={38} r={36}></circle>
						</svg>
						<div className="percentage">
							<p>{Math.round((props.paidAmount * 100) / props.totalAmount)}%</p>
						</div>
					</div>
				</div>
				<input
					className="payamount"
					type="number"
					value={Amount}
					name="Amount"
					onChange={handleInputs}
					placeholder="Enter Amount"
					autoComplete="off"
					required
				></input>
				<button onClick={handlePayment}>Donate</button>
			</div>
		</>
	);
}

export default DonationCard;
