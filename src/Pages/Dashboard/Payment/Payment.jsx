import React from 'react';

import { loadStripe } from '@stripe/stripe-js';

import useEnroll from '../../../hooks/useEnroll';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


// TODO provide publishable Key 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {


    const [cart] = useEnroll()
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));

    return (
        <div className='text-black pb-[700px] w-full pt-20 '>

            <h2 className='text-3xl text-center text-red-500 font-bold py-5'>Pay By Card <span className='text-yellow-400'>${price}</span></h2>
           
                <Elements className='' stripe={stripePromise}>
                    <CheckoutForm cart={cart} price={price} ></CheckoutForm>
                </Elements>
           

        </div>
    );
};

export default Payment;