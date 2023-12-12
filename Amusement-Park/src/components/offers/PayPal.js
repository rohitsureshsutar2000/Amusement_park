import React from 'react'
import { useEffect, useRef } from 'react/cjs/react.production.min'

function PayPal() {

    let paypal = useRef()

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_unites: [
                        {
                            description: "New Offers",
                            ammount: {
                                currency_code: "RS",
                                value: 3000.00
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture()
                console.log("Successful Booking" + order);
            },
            onError: (err) => {
                console.log(err);
            },
        }).render(paypal.current)
    }, []);

    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPal