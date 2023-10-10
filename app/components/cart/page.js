'use client'
import { parse } from 'postcss';
import React, { useEffect, useState } from 'react';

export default function Cart() {
    // Get the cart data from localStorage
    const [data, setData] = useState([])


    useEffect(() => {
        const cartItem = localStorage !== 'undefined' ?
            JSON.parse(localStorage.getItem('cart')) || [] :
            alert("error")
            ;
        setData(cartItem)

    }, [])


    const calculateTotalAmount = () => {
        let totalAmount = 0;

        for (const item of data) {
            const intPrice = parseFloat(item.price)

            totalAmount += intPrice;
        }

        return totalAmount.toFixed(2);
    };


    // console.log(data);
    return (
        <div>

            <div>
                <div className="container mx-auto p-6">
                    <h1 className="text-2xl font-semibold mb-4">Your Shopping Cart</h1>
                    <table className="min-w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="py-2 text-left">Image</th>
                                <th className="py-2 text-left">Name</th>
                                {/* <th className="py-2 text-left">Quantity</th> */}
                                <th className="py-2 text-left">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((product, index) => (
                                    <tr className="border-b" key={index}>


                                        <td className="py-2">
                                            <img src={product.image} alt="Product" className="w-16 h-16 object-cover rounded-full " />
                                        </td>
                                        <td className="py-2">{product.name}</td>
                                        <td className="py-2">{product.price}</td>
                                    </tr>
                                ))
                            }


                            {/* Add more products as needed */}
                        </tbody>
                    </table>

                    <div className="mt-6 flex justify-end">
                        <p className="text-xl font-semibold">Subtotal: ${calculateTotalAmount()}</p>
                    </div>

                    <div className="mt-4 flex justify-end">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Checkout</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

