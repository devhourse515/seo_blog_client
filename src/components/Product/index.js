'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import classNames from "classnames";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import Rate from "../Other/Rate";
import { convertToSlug, formatCurrency } from "@/common/utils";
import {
  checkProductInWishList,
  checkProductInCart,
} from "../../common/shopUtils";
import { addToCart } from "../../redux/actions/cartActions";
import {
  addToWishlist,
} from "../../redux/actions/wishlistActions";

function Product(props) {
  const dispatch = useDispatch();
  const { data } = props;
  const cartState = useSelector((state) => state.cartReducer);
  const wishlistData = useSelector((state) => state.wishlistReducer);
  const percentDiscount = data.discount
    ? Math.ceil(100 - (100 * data.discount) / data.price)
    : null;
  function renderType() {
    if (data.new) {
      return <span className="-new absolute top-4 left-4 text-label px-2 py-1 uppercase bg-[#F4D118] rounded">New</span>;
    }
    if (data.discount && typeof data.discount === "number") {
      return <span className="-sale absolute top-4 left-4 text-label px-2 py-1 uppercase bg-[#C72929] text-white rounded">-{percentDiscount}%</span>;
    }
    return null;
  }
  const addToCartHandle = (e) => {
    e.preventDefault();
    let productItem = checkProductInCart(cartState, data.id);
    if (!productItem && data.quantity > 0) {
      dispatch(addToCart(data, 1));
      return toast.success("Product added to cart !");
    } else {
      return toast.info("Products already in the cart !");
    }
  };
  const addToWishlistHandle = (e) => {
    e.preventDefault();
    const wishlistItem = checkProductInWishList(wishlistData, data.id);
    dispatch(addToWishlist(data));
    toast.dismiss();
    if (!wishlistItem) {
      return toast.success("Product added to wishlist !");
    } else {
      return toast.error("Product removed from wishlist !");
    }
  };

  return (
    <>
      <div className={`product-item ${classNames(props.className)}`}>
        <Link
          href={`${process.env.PUBLIC_URL}/pages/products-detail/[slug]`}
          as={`${process.env.PUBLIC_URL}/pages/products-detail/${convertToSlug(data.name.toLowerCase())}?id=${data.id}`}
          className="block w-full h-full relative"
        >
          <div className="product__thumb relative overflow-hidden border border-outline bg-surface rounded-lg">
            {renderType()}
            <div
              className="wishlist-icon absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-outline bg-white text-surface1 rounded-full duration-300 hover:bg-black hover:text-white"
              onClick={addToWishlistHandle}
            >
              {checkProductInWishList(wishlistData, data.id) ? <Icon.Heart weight="fill" className="text-lg text-[#C72929]" /> : <Icon.Heart className="text-lg" />}
            </div>
            <div className="bg-img w-full flex items-center justify-center py-10">
              <Image width={5000} height={5000} className="sm:w-[147px] w-4/5 h-auto" src={data.image} alt="Product image" />
            </div>
            <div className="product__thumb__actions absolute">
              <div className="product-btn flex justify-center" data-tip data-for="cartIcon">
                <button
                  className={`add-to-cart-btn button-main whitespace-nowrap ${checkProductInCart(cartState, data.id) && 'active'} ${data.quantity < 1 ? '-disable' : ''}`}
                  onClick={addToCartHandle}
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="product__info flex flex-col items-center justify-center px-5 overflow-hidden mt-4">
            <strong className="text-button text-center name">{data.name}</strong>
            <div className="product-rate w-full flex items-center justify-center gap-1 mt-1">
              <Rate currentRate={data.rate} style={'text-[#F4D118]'} />
              <span className="quantity-rate caption1 text-surface1">(1.234)</span>
            </div>
            <div className="product-price-block flex items-center justify-center gap-3 mt-2">
              {data.discount ? (
                <>
                  <strong className="heading6 product-price">
                    {formatCurrency(data.price)}
                  </strong>
                  <del className="product-discount text-surface1">{formatCurrency(data.discount)}</del>
                </>
              ) : (
                <>
                  <strong className="heading6 product-price">
                    {formatCurrency(data.price)}
                  </strong>
                </>
              )}
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Product;
