'use client'

import { useState } from "react";
import { useSelector } from "react-redux";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import classNames from "classnames";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import Quantity from "../../Control/Quantity";
import AddToCart from "../../Control/AddToCart";
import Button from "../../Control/Button";
import {
  getAvaiableQuantityInCart,
  checkProductInWishList,
} from "../../../common/shopUtils";


export default function ProductDetailController({
  data,
  getQuantity,
  onAddToCart,
  onAddToWishList,
}) {
  const [quantity, setQuantity] = useState();
  const cartState = useSelector((state) => state.cartReducer);
  const wishlistState = useSelector((state) => state.wishlistReducer);

  const avaiableProduct = getAvaiableQuantityInCart(
    cartState,
    data.id,
    data.quantity
  );
  return (
    <div className="product-detail__controler flex max-sm:flex-col sm:items-center justify-between w-full gap-3">
      <Quantity
        className="-border rounded w-[140px] h-12 px-4"
        getQuantity={(q) => {
          setQuantity(q), getQuantity(q);
        }}
        maxValue={avaiableProduct}
      />
      <div className="flex items-center justify-between gap-2 w-full">
        <AddToCart
          className={`w-full text-center rounded ${classNames({
            "-disable": quantity > avaiableProduct || data.quantity < 1,
          })}`}
          onClick={onAddToCart}
        />
        <div className="product-detail__controler__actions">
          <div data-tip data-for="add-wishlist">
            <Button
              action="#"
              height="48px"
              width="48px"
              className={`rounded ${classNames({
                active: checkProductInWishList(wishlistState, data.id),
              })}`}
              onClick={onAddToWishList}
              color="white"
              content={<Icon.Heart className="text-xl" />}
            />
          </div>
          <ReactTooltip id="add-wishlist" type="dark" effect="solid">
            <span>Add to wishlist</span>
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}
