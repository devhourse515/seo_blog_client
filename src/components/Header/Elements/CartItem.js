import { useDispatch } from "react-redux";

import { convertToSlug, formatCurrency } from "../../../common/utils";
import { removeFromCart } from "../../../redux/actions/cartActions";
import { toast } from "react-toastify";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

function CartItem(props) {
  const dispatch = useDispatch();
  const { image, name, price, quantity, cartId, slug } = props;
  const removeProductHandle = (e) => {
    e.preventDefault();
    dispatch(removeFromCart(cartId));
    toast.error("Product removed from card");
  };
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={process.env.PUBLIC_URL + image} alt="Product image" />
      </div>
      <div className="cart-item__info">
        <Link
          href={process.env.PUBLIC_URL + "/pages/products-detail/[slug]"}
          as={process.env.PUBLIC_URL + "/pages/products-detail/" + convertToSlug(name.toLowerCase())}
        >
          <span>{name}</span>
        </Link>
        <h5>{formatCurrency(price)}</h5>
        <p>
          Quantity: <span>{quantity}</span>
        </p>
      </div>
      <a className="cart-item__remove flex items-center justify-center" href="#" onClick={removeProductHandle}>
        <Icon.X className=""/>
      </a>
    </div>
  );
}

export default CartItem;
