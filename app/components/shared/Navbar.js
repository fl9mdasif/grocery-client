"use client"
import { UserAuth } from "@/app/context/AuthContext";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Spinner from "./Snipper";

const Navbar = () => {
    const { user, googleSignIn, logOut } = UserAuth();
    const [loading, setLoading] = useState(true);
    // console.log(user);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleSignOut = async () => {
        try {
            await logOut();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 50));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">

                    <span className="ml-3 text-xl">AgroMart</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link href="/components/contact" className="mr-5 hover:bg-gray-100">Contact</Link>



                    {!user ? null : (

                        <Link href="/components/cart" className="inline-flex items-center border-0  px-3 focus:outline-none hover:bg-gray-200 rounded text-base  md:mt-0">Cart</Link>

                    )}

                    {loading ? <Spinner /> : !user ? (
                        <ul className="flex ">
                            <li onClick={handleSignIn} className="p-2 hover:bg-gray-200 cursor-pointer">
                                Login
                            </li>
                        </ul>
                    ) : (
                        <div className="flex justify-center items-center">
                            <p className="pl-5 pr-5 hover:bg-gray-200 cursor-pointer" onClick={handleSignOut}>
                                Sign out
                            </p>
                            <p>
                                <img alt="ii" src={user.photoURL} className="w-10 h-10 object-cover rounded-full " />

                            </p>
                        </div>
                    )}

                </nav>
                {/* <button>Log In</button> */}


            </div>
        </header>
    );
};

export default Navbar;