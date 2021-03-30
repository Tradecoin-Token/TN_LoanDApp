function Calculate() {

	// Extracting value in the amount
	// section in the variable
	const amount = document.querySelector("#amount").value;

	// Extracting value in the interest
	// rate section in the variable
	const rate = document.querySelector("#rate").value;

	// Extracting value in the days
	// section in the variable
	const days = document.querySelector("#days").value;

	// Calculating interest per day
	const oneday = 1440
	const totalloanblocks = 1440*days
	const perblockinterest = 0.00000068
	const interest = (perblockinterest*totalloanblocks)*amount;
	
	// Calculating total payment
	const totalinterest = interest.toFixed(6);

	document.querySelector("#total")
		.innerHTML = "Total Interest(TN): " + totalinterest;		
		
}


