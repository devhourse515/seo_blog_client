'use client'

import React, { useState } from "react";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Rate from "../Other/Rate";
import { formatCurrency } from "@/common/utils";
import ProductDetailController from "./Elements/ProductDetailController";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/actions/cartActions";
import { addToWishlist } from "@/redux/actions/wishlistActions";
import { toast } from "react-toastify";
import { checkProductInWishList } from "@/common/shopUtils";

export default function DetailInfo({ data }) {
  const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.wishlistReducer);
  const [quantity, setQuantity] = useState();

  const getQuantity = (q) => {
    setQuantity(q);
  };

  const onAddToCart = (e) => {
    e.preventDefault();
    dispatch(addToCart(data, quantity));
    toast.success("Product added to cart");
  };

  const onAddToWishList = (e) => {
    e.preventDefault();
    let product = checkProductInWishList(wishlistState, data.id);
    dispatch(addToWishlist(data));
    toast.dismiss();
    if (!product) {
      return toast.success("Product added to wishlist !");
    } else {
      return toast.error("Product removed from wishlist !");
    }
  };

  return (
    <div className="product-detail-heading lg:mt-[60px] sm:mt-12 mt-8">
      <div className="container">
        <div className="flex max-lg:flex-col gap-y-8">
          <div className="lg:w-1/2 lg:pr-[15px]">
            <div className="bg-img lg:py-12 py-8 px-7 w-full aspect-square bg-surface border border-outline rounded-lg flex items-center justify-center">
              <img src={data.image || '/images/product/product-detail.png'} alt="product" />
            </div>
          </div>
          <div className="lg:w-1/2 lg:pl-[65px]">
            <h4 className="name heading4">{data.name || 'Computer Networking: A Top-Down Approach 8th Edition'}</h4>
            <div className="flex items-center mt-3">
              <Rate currentRate={data.rate || 5} style={'text-yellow'} />
              <div className="caption1 text-surface1 pr-3 pl-2">(234)</div><span className="text-surface2">|</span>
              <div className="caption1 fw-600 pl-3">SKU: <span className="caption1 text-surface1">{data.sku || 'A515-56-36UT'}</span></div>
            </div>
            <div className="product-price-block flex items-center gap-3 mt-6">
              {data.discount ? (
                <>
                  <strong className="heading4 product-price">
                    {formatCurrency(data.price)}
                  </strong>
                  <del className="heading6 product-discount text-surface1">{formatCurrency(data.discount)}</del>
                </>
              ) : (
                <>
                  <strong className="heading4 product-price">
                    {formatCurrency(data.price || 69)}
                  </strong>
                </>
              )}
            </div>
            <div className="text-surface1 mt-6 pb-6">{data.description || 'The text works its way from the application layer down toward the physical layer, motivating students by exposing them to important concepts early in their study of networking.'}</div>
            <div className="prd-quantity list py-6 border-b border-t border-outline">
              <p>Quantity:</p>
              <div className="mt-3">
                <ProductDetailController
                  data={data}
                  getQuantity={getQuantity}
                  onAddToCart={onAddToCart}
                  onAddToWishList={onAddToWishList}
                />
              </div>
              <div className="more-infor mt-6">
                <div className="flex items-center gap-2">
                  <div className="left">
                    <div className="text-button">Categories:</div>
                    <div className="text-button mt-2">Brand:</div>
                    <div className="text-button mt-2">Share:</div>
                  </div>
                  <div className="right">
                    <p>{data.category || 'IT Solution'}</p>
                    <p className="mt-2">{data.brand || 'N/A'}</p>
                    <div className="list-share flex items-center gap-4 mt-2">
                      <Link href="https://www.facebook.com/" target="_blank"> <i className="icon-facebook text-surface1"></i></Link>
                      <Link href="https://www.linkedin.com/" target="_blank"> <i className="icon-linkedin text-surface1"></i></Link>
                      <Link href="https://www.twitter.com/" target="_blank"> <i className="icon-instagram text-surface1"></i></Link>
                      <Link href="https://www.youtube.com/" target="_blank"> <i className="icon-twitter text-surface1"></i></Link>
                      <Link href="https://www.instagram.com/" target="_blank"> <i className="icon-youtube text-surface1"></i></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="get-product pt-6">
              <div className="heading6">Get it today</div>
              <div className="list mt-4">
                <div className="item flex gap-3">
                  <Icon.Truck weight="light" className="text-3xl flex-shrink-0" />
                  <div className="desc">
                    <strong className="text-button">Free shipping</strong>
                    <p className="caption1 text-surface1 mt-1">Free shipping on orders over $75.</p>
                  </div>
                </div>
                <div className="item flex gap-3 mt-3">
                  <Icon.Package weight="light" className="text-3xl flex-shrink-0" />
                  <div className="desc">
                    <strong className="text-button">100 - Day Returns</strong>
                    <p className="caption1 text-surface1 mt-1">Support from 8:30AM to 10:00PM everyday</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
