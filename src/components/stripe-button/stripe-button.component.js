import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton=({price})=>{
    const priceForStripe= price*100;
    const publishableKey='pk_test_51ItMCcD8vLd9qN6kojVLFxVXOAG4dJby9D0ANCXS72ai0GUc9cLfG9cZlaF28IgVPRNhOYtaRTSpTd3rt8TCVyje0041UazXJf'

    const onToken =token=>{
    alert('Payment successful');
}

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Kylie.Y Crown Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;