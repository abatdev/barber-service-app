import React, { Fragment } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
const stripeBtn = () => {
  const publishableKey = "pk_test_51LoNBZGyZqDl3ZrOwpg1G3LWFhMrBT0rFd0kdBJ16PxUM5naYSjawIIugt5LNSAiMF19RwRtzBIilt0THsQjMV7A00onoUzuiM";
   
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
  };
  axios
      .post("http://localhost:8000", body)
      .then(response => {
        console.log(response);
        alert("Payment Success");
      })
      .catch(error => {
        console.log("Payment Error: ", error);
        alert("Payment Error");
      });
  };
  return (
    <StripeCheckout
      label="Security Deposit" //Component button text
      name="Blessed by Adean" //Modal Header
      description="Reserve your appointment with Adean"
      panelLabel="Pay now" //Submit button in modal
      amount={2000} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
    >

    <button className='payBtn'>Book Now</button>

    </StripeCheckout>
  );
};
export default stripeBtn;