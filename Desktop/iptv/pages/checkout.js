import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

function checkout() {
  return (
    <>
    <StripeCheckout
    stripeKey='pk_test_51My7qwBPMltpexmsXF53SsaOf3jnvJhHRwaqqfPbY2hU0NmAw1rg3OefRoRevGMBGCEYxdvrqyn46fFAntv7aSkV00FBjHG8Ah'
    amount={20000}
    label='pay to get iptv'
    email='ilyasselharak@gmail.com'
    description='your payment will be 200$'/>
    </>
  )
}

export default checkout