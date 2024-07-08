/*
		Your Name: Phill Hare
		Last Modified Date: 07/02/2024
		File: event_registration.js
		File Description: <Enter a brief paragraph to describe the purpose of this file>
*/

// Set the minimum and maximum number of tickets able to be purchased
var minTickets = 1;
var maxTickets = 3;
// Set variables for the ticket cost
var costPerTicket = 5.00;
var ticketSurcharge = 0.50;

/*** YOUR CODE STARTS BELOW HERE ***/

/* Countdown timer */

// Set the countdown timer to 10 minutes from the current time
let countdownDuration = 10 * 60 * 1000; // 10 minutes in milliseconds
let endTime = Date.now() + countdownDuration;

let countdownTimer = setInterval(function() {
    let now = Date.now();
    let timeLeft = endTime - now;

    if (timeLeft <= 0) {
        clearInterval(countdownTimer);
        alert("Your session has expired!");
        window.location.href = window.location.href; // Reload the page
    } else {
        let minutes = Math.floor(timeLeft / 60000);
        let seconds = Math.floor((timeLeft % 60000) / 1000);
        document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    }
}, 1000);

/* Calculate Total */
function calculateTotal() {
	const numTickets = document.getElementById('numTickets').value;
	if (isNaN(numTickets) || numTickets < 1 || numTickets > 3) {
	  document.getElementById('msgTickets').innerText = 'Enter a valid number (1-3)';
	  updateFieldBackground('numTickets', true);
	  document.getElementById('contactInformation').style.display = 'none';
	} else {
	  document.getElementById('msgTickets').innerText = '';
	  updateFieldBackground('numTickets', false);
	  document.getElementById('contactInformation').style.display = 'block';
	  const cost = (numTickets * costPerTicket).toFixed(2);
	  document.getElementById('totalCost').value = `$${cost}`;
	}
  }

/* Complete Purchase */
function completePurchase() {
	const name = document.getElementById('name').value;
	const email = document.getElementById('email').value;
	if (!name || !email) {
	  if (!name) updateFieldBackground('name', true);
	  if (!email) updateFieldBackground('email', true);
	  document.getElementById('msgname').innerText = 'Please enter a valid name';
	  document.getElementById('msgemail').innerText = 'Please enter a valid email';
	} else {
	  updateFieldBackground('name', false);
	  updateFieldBackground('email', false);
	  clearInterval(timer); // Stop the timer
	  alert(`Thank you for your purchase! Total amount: ${document.getElementById('totalCost').value}`);
	}
  }

/* Change Color of text*/
function updateFieldBackground(fieldId, hasError) {
	const field = document.getElementById(fieldId);
	field.style.backgroundColor = hasError ? 'lightcoral' : 'white';
  }


