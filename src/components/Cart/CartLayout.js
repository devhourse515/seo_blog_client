'use client'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Countdown from 'react-countdown';
import Link from "next/link";
import Image from 'next/image';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { convertToSlug, formatCurrency } from '@/common/utils';
import { calculateTotalPrice, calculateTotalOrder } from '@/common/shopUtils';
import { decreaseQuantityCart, increaseQuantityCart, removeFromCart } from '@/redux/actions/cartActions';
import { setOrder } from '@/redux/actions/orderActions';
import Quantity from '../Control/Quantity';
import { useRouter } from 'next/navigation';

const CartLayout = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cartState = useSelector((state) => state.cartReducer);
    let moneyForFreeship = 200;
    let [shipCart, setShipCart] = useState(30)
    let [discountCart, setDiscountCart] = useState(0)
    let [totalCart, setTotalCart] = useState(calculateTotalPrice(cartState, true))
    let [totalOrder, setTotalOrder] = useState(calculateTotalOrder(cartState, discountCart, shipCart, true))

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
            return <span>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</span>;
        }
    };

    const removeProduct = (e, cartId) => {
        e.preventDefault();
        dispatch(removeFromCart(cartId));
        return toast.error("Product removed from cart");
    };

    useEffect(() => {
        setTotalCart(calculateTotalPrice(cartState, true))
        setTotalOrder(calculateTotalOrder(cartState, discountCart, shipCart, true))
    }, [cartState, shipCart, discountCart])

    const handleCheckout = () => {
        const orderData = {
            products: cartState,
            ship: shipCart,
            discount: discountCart,
            total: totalOrder,
        };

        dispatch(setOrder(orderData));
        router.push('/pages/checkout');
    };

    return (
        <div className="cart-block md:py-20 py-10 border-b border-outline">
            <div className="container flex max-xl:flex-col gap-y-12 justify-between">
                <div className="xl:basis-2/3 xl:pr-7 basis-full">
                    <div className="time bg-surface py-3 px-5 flex items-center rounded-lg">
                        <div className="heding5">🔥</div>
                        <div className="caption1 pl-2">Your cart will expire in
                            <span className="min text-pink text-button font-bold"> <Countdown date={Date.now() + 600000} renderer={renderer} /> </span>
                            <span>minutes! Please checkout now before your items sell out!</span>
                        </div>
                    </div>
                    <div className="heading banner mt-5">
                        <div className="text">Buy
                            <span className="text-button"> $<span className="more-price">{moneyForFreeship - totalCart > 0 ? (<>{moneyForFreeship - totalCart}</>) : (0)}</span>.00 </span>
                            <span>more to get </span>
                            <span className="text-button">freeship</span>
                        </div>
                        <div className="tow-bar-block bg-surface h-1 mt-4">
                            <div
                                className="progress-line bg-blue h-full"
                                style={{ width: totalCart <= moneyForFreeship ? `${(totalCart / moneyForFreeship) * 100}%` : `100%` }}
                            ></div>
                        </div>
                    </div>
                    <div className="list-product w-full sm:mt-7 mt-5">
                        <div className='w-full'>
                            <div className="heading bg-surface bora-4 pt-4 pb-4">
                                <div className="flex">
                                    <div className="w-1/2">
                                        <div className="text-button text-center">Products</div>
                                    </div>
                                    <div className="w-1/12">
                                        <div className="text-button text-center">Price</div>
                                    </div>
                                    <div className="w-1/6">
                                        <div className="text-button text-center">Quantity</div>
                                    </div>
                                    <div className="w-1/6">
                                        <div className="text-button text-center">Total Price</div>
                                    </div>
                                </div>
                            </div>
                            <div className="list-product-main w-full mt-3">
                                {!cartState || cartState.length < 1 ? (
                                    <p className='text-button pt-3'>No product in cart</p>
                                ) : (
                                    cartState.map((product) => (
                                        <div className="product-item style-cart flex md:mt-7 md:pb-7 mt-5 pb-5 border-b border-outline w-full" key={product.id}>
                                            <div className="w-1/2">
                                                <div className="flex items-center gap-6">
                                                    <Link
                                                        className="bg-img md:w-[100px] w-20 flex-shrink-0 aspect-[3/4]"
                                                        href={`${process.env.PUBLIC_URL}/pages/products-detail/[slug]`}
                                                        as={`${process.env.PUBLIC_URL}/pages/products-detail/${convertToSlug(product.name.toLowerCase())}?id=${product.id}`}
                                                    >
                                                        <Image
                                                            src={product.image}
                                                            width={1000}
                                                            height={1000}
                                                            alt={product.name}
                                                            className='w-full h-full object-cover rounded-lg'
                                                        />
                                                    </Link>
                                                    <div>
                                                        <Link
                                                            className="text-title name duration-300 hover:text-blue"
                                                            href={`${process.env.PUBLIC_URL}/pages/products-detail/[slug]`}
                                                            as={`${process.env.PUBLIC_URL}/pages/products-detail/${convertToSlug(product.name.toLowerCase())}?id=${product.id}`}
                                                        >
                                                            {product.name}
                                                        </Link>
                                                        <div className="list-select mt-3"></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-1/12 price flex items-center justify-center">
                                                <div className="text-title text-center">{formatCurrency(product.price)}</div>
                                            </div>
                                            <div className="w-1/6 flex items-center justify-center">
                                                <div className="quantity-block md:px-2 px-1 md:py-3 py-1.5 border border-outline rounded md:w-[100px] flex-shrink-0 w-24">
                                                    <Quantity
                                                        defaultQuantity={product.cartQuantity}
                                                        onIncrease={() =>
                                                            dispatch(increaseQuantityCart(product.cartId))
                                                        }
                                                        onDecrease={() =>
                                                            dispatch(decreaseQuantityCart(product.cartId))
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-1/6 flex total-price items-center justify-center">
                                                <div className="text-title text-center">{formatCurrency(product.price * product.cartQuantity)}</div>
                                            </div>
                                            <div className="w-1/12 flex items-center justify-center">
                                                <Icon.XCircle
                                                    className='text-xl max-md:text-base text-red cursor-pointer hover:text-pink duration-300'
                                                    onClick={(e) => removeProduct(e, product.cartId)}
                                                />
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="input-block discount-code w-full h-14 sm:mt-7 mt-5">
                        <form className='w-full h-full relative'>
                            <input type="text" placeholder='Add voucher discount' className='w-full h-full pl-4 pr-14 rounded-lg border border-outline' required />
                            <button className='button-main absolute top-1.5 bottom-1.5 right-1.5 px-5 rounded-lg flex items-center justify-center'>Apply Code
                            </button>
                        </form>
                    </div>
                </div>
                <div className="xl:basis-1/3 xl:pl-8 basis-full">
                    <div className="checkout-block bg-surface p-6 rounded-2xl">
                        <div className="heading5">Order Summary</div>
                        <div className="total-block py-5 flex justify-between border-b border-line">
                            <div className="text-title">Subtotal</div>
                            <div className="text-title">{totalCart}</div>
                        </div>
                        <div className="discount-block py-5 flex justify-between border-b border-line">
                            <div className="text-title">Discounts</div>
                            <div className="text-title"> <span>-$</span><span className="discount">{discountCart}</span><span>.00</span></div>
                        </div>
                        <div className="ship-block py-5 flex justify-between border-b border-line">
                            <div className="text-title">Shipping</div>
                            <div className="choose-type flex gap-12">
                                <div className="left">
                                    <div className="type">
                                        {moneyForFreeship - totalCart > 0 ?
                                            (
                                                <input
                                                    id="shipping"
                                                    type="radio"
                                                    name="ship"
                                                    disabled
                                                />
                                            ) : (
                                                <input
                                                    id="shipping"
                                                    type="radio"
                                                    name="ship"
                                                    value={0}
                                                    checked={shipCart === 0}
                                                    onChange={() => setShipCart(0)}
                                                />
                                            )}
                                        < label className="pl-1" htmlFor="shipping">Free Shipping:</label>
                                    </div>
                                    <div className="type mt-1">
                                        <input
                                            id="local"
                                            type="radio"
                                            name="ship"
                                            value={30}
                                            checked={shipCart === 30}
                                            onChange={() => setShipCart(30)}
                                        />
                                        <label className="text-surface1 pl-1" htmlFor="local">Local:</label>
                                    </div>
                                    <div className="type mt-1">
                                        <input
                                            id="flat"
                                            type="radio"
                                            name="ship"
                                            value={40}
                                            checked={shipCart === 40}
                                            onChange={() => setShipCart(40)}
                                        />
                                        <label className="text-surface1 pl-1" htmlFor="flat">Flat Rate:</label>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="ship">$0.00</div>
                                    <div className="local text-surface1 mt-1">$30.00</div>
                                    <div className="flat text-surface1 mt-1">$40.00</div>
                                </div>
                            </div>
                        </div>
                        <div className="total-cart-block pt-4 pb-4 flex justify-between">
                            <div className="heading5">Total</div>
                            <div className="heading5">{totalOrder}</div>
                        </div>
                        <div className="block-button flex flex-col items-center gap-y-4 mt-5">
                            <div className="checkout-btn button-main text-center w-full" onClick={handleCheckout}>Process To Checkout</div>
                            <Link className="text-button hover-underline" href={"/pages/our-shop"}>Continue shopping</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartLayout
