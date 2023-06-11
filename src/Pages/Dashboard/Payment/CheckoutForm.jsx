import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProviders/AuthProvider';
import useAxiosSecure from '../../../hooks/useAxiosSecure';



const CheckoutForm = ({price, cart}) => {
  // console.log(price)
  const {user} = useContext(AuthContext)
  // console.log(user)
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [ processing, setProcessing] = useState(false);
    const [ transactionId, setTransactionId] = useState('')

    useEffect( ()=>{
      if(price > 0){
        axiosSecure.post('/create-payment-intent', {price})
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
      }
      
    } ,[price, axiosSecure])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card = elements.getElement(CardElement);

        if (card === null) {
        return;
        }
        // console.log('card', card)

           // Use your card Element with other Stripe.js APIs
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });

        if (error) {
          console.log('error', error);
          setCardError(error.message)
        } 
        else {
          setCardError('');
          // console.log('PaymentMethod', paymentMethod);
        }

        setProcessing(true)

console.log(clientSecret)
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
      );
        if(confirmError){
          console.log(confirmError)
        }
        console.log('paymentIntent', paymentIntent)
        setProcessing(false)
        if(paymentIntent.status === 'succeeded'){
          setTransactionId(paymentIntent.id)

          // save payment information to the server
          const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            price,
            date: new Date(),
            quantity: cart.length,
            cartItems: cart.map(item => item._id),
            menuItems: cart.map(item => item.enrollId),
           image: cart.map(item => item.image),
            className: cart.map(item => item.className)
          }
          axiosSecure.post('/payments', payment)
          .then(res => {
            console.log(res.data);
            if(res.data.insertResult.insertedId){
              Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Payment Successful',
                showConfirmButton: false,
                timer: 1500
              })

            }
          })
          
        }


    }

    return (
        <>
        <form className='w-2/3 bg-red-400 p-3 mx-auto rounded-3xl' onSubmit={handleSubmit}>
        <CardElement className='pl-4 input-accent'
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: 'white',
                '::placeholder': {
                  color: 'white',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
         {
        cardError && <p className='text-red-200'>{cardError}</p>
      }
      {
        transactionId && <p className='text-green-800 font-bold pt-4'>Transaction complete your transaction_id: <span className='text-slate-900'>{transactionId}</span>
        </p>
      }
        <button className='btn w-full bg-orange-500 mt-10' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay Now
        </button>
      </form>
     
        </>
    );
};

export default CheckoutForm;