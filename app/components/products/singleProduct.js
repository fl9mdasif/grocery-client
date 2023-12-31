'use client'

import React from 'react'

export default function SingleProduct({ items }) {


    function addToCart(product) {
        // Get the current cart data from localStorage or initialize an empty array
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);

        localStorage.setItem('cart', JSON.stringify(cart));
    }

    const handleAddToCart = () => {
        addToCart(items);
        alert('Product added to cart!');
    }

    return (

        <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block"
                    src={items.image} />
            </a>

            <div className="p-3">
                <div className="flex justify-between py-2 ">
                    <div>
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{items.name}</h2>
                        <p className="mt-1">${items.price}</p>
                        {/* <p className="mt-1">{productId}</p> */}
                    </div>


                    <button className='btn btn-primary px-4 py-2 text-white'
                        onClick={() => typeof window !== "undefined" ? document.getElementById(items.id).showModal() : <button>error</button>} >Details</button>

                    {/* modal plate */}
                    <dialog id={items.id} className="modal modal-bottom sm:modal-middle">
                        {/* <input type="checkbox" id={items.id} className="modal-toggle" /> */}
                        <div className="modal-box w-14/15 max-w-6xl">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>

                            {/* modal template  */}
                            <section className="text-gray-600 body-font overflow-hidden">
                                <div className=" px-5 py-4 mx-auto">
                                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                        <img alt="ecommerce1" className="lg:w-1/2 w-full   object-cover object-center rounded" src={items.image} />

                                        <div className="">
                                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{items.name}</h1>
                                            <div className="flex mb-4">



                                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                                    <a className="text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a className="text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a className="text-gray-500">
                                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                        </svg>
                                                    </a>
                                                </span>


                                            </div>
                                            <p className="leading-relaxed">{items.description}</p>
                                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">


                                            </div>
                                            <div className="flex flex-col">
                                                <span className="title-font font-medium text-2xl text-gray-900">${items.price}</span>

                                                <button onClick={handleAddToCart}

                                                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">AddToCart</button>

                                                <button className="rounded-full w-5 h-5 bg-gray-200 p-0 border-0  items-center justify-center text-gray-500 ml-4">
                                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>


                        </div>
                    </dialog>

                </div>
            </div >
        </div >
    )
}