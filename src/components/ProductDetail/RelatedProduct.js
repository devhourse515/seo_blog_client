import React from 'react'
import prdData from '@/data/products.json'
import Product from '../Product'

const RelatedProduct = () => {
    return (
        <div className='related-product lg:py-20 sm:py-14 py-10 border-b border-outline'>
            <div className="container">
                <h4 className="heading4 text-center">Related Products</h4>
                <div className="list grid lg:grid-cols-4 grid-cols-2 sm:gap-[30px] gap-5 lg:mt-10 mt-7">
                    {prdData.slice(0, 4).map(item => (
                        <Product key={item.id} data={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default RelatedProduct
