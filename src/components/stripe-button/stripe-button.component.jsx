import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 1000;
  const publishableKey = "pk_test_jy0UjG4XyKUVGy0nZcBw4imO007b4T1iOy";
  const onToken = (token) => {
    console.log(token);
    alert("Payment was successfull");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Everland Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $ ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
