import React from 'react';
import barberLogo from '../barber_logo.png'
import StripeBtn from './StripeBtn';

const Confirm = () =>{
  return (
    <div className='confirmContainer'>

      <div className='confirmHeading'>
        <h2>
          Thank you for choosing to book
          an appointment with Blessed by Adean!
        </h2>

        <h3>
          This is a 1 hour service for a haircut.
          To secure your slot, you will be prompted to
          pay a security deposit that goes towards the
          cost of your service.
        </h3>

        <h3>
          The remainder of the cost will be due on
          the day of service.
        </h3>
      </div>

      <div className='paymentBtn'>
        <StripeBtn />
      </div>
      
    </div>
  )
}

export default Confirm;