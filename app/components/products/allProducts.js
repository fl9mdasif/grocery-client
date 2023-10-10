// 'use client'

import Spinner from "../shared/Snipper";
import GroceryProductSearch from "./SearchProduct"
import SingleProduct from "./singleProduct"
import { useQuery } from '@tanstack/react-query';

const Products = async () => {

    // const { isLoading, error, data: products } = useQuery(['pdDatas'], () =>
    //     fetch('http://localhost:5000/products').then(res =>
    //         res.json())
    // )
    // if (isLoading) return <Spinner />
    // if (error) return 'An error has occurred: ' + error.message
    // console.log('all', products);


    const res = await fetch('https://grecery-node-mysql-api1.onrender.com/products')
    const products = await res.json()



    return (
        <div className="container  px-5 py-24 mx-auto">

            <GroceryProductSearch />
            <div className="flex justify-center items-center flex-wrap m-4">

                {
                    products.map((items, index) =>

                        <SingleProduct
                            items={items}
                            id={items.id}

                            key={index} />

                    )
                }
            </div>
        </div>
    )
}
export default Products