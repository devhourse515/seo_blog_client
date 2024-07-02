'use client'
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { formatCurrency } from "@/common/utils";
import { addToCart } from "@/redux/actions/cartActions";
import { removeFromWishlist } from "@/redux/actions/wishlistActions";


const Wishlist = () => {
    const dispatch = useDispatch();
    const wishlistState = useSelector((state) => state.wishlistReducer);
    const cartState = useSelector((state) => state.cartReducer);
    const checkProductInCart = (pid) => {
        return cartState.find((item) => item.id === pid);
    };
    const addToCartHandle = (e, data) => {
        e.preventDefault();
        let productItem = checkProductInCart(data.id);
        if (!productItem) {
            dispatch(addToCart(data));
            return toast.success("Product added to cart !");
        }
    };
    const removeWishlistProduct = (e, pid) => {
        e.preventDefault();
        dispatch(removeFromWishlist(pid));
        return toast.error("Product removed from wishlist");
    };

    return (
        <div className="wishlist">
            <div className="container">
                {!wishlistState || wishlistState.length === 0 ? (
                    <div className="wishlist__empty">
                        <h3>No product in wishlist</h3>
                    </div>
                ) : (
                    <div className="wishlist__table">
                        <div className="wishlist__table__wrapper">
                            <table>
                                <colgroup>
                                    <col style={{ width: "40%" }} />
                                    <col style={{ width: "20%" }} />
                                    <col style={{ width: "20%" }} />
                                    <col style={{ width: "20%" }} />
                                </colgroup>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Unit Price</th>
                                        <th>Stock</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishlistState.map((item) => (
                                        <tr key={item.id}>
                                            <td>
                                                <div className="wishlist-product">
                                                    <div className="wishlist-product__image">
                                                        <img src={item.thumbImage[0]} alt={item.name} />
                                                    </div>
                                                    <div className="wishlist-product__content">
                                                        <h5>{item.category}</h5>
                                                        <Link
                                                            href={
                                                                process.env.PUBLIC_URL +
                                                                "/shop/product/[slug]"
                                                            }
                                                            as={
                                                                process.env.PUBLIC_URL +
                                                                "/shop/product/" +
                                                                item.slug
                                                            }
                                                        >
                                                            <span>{item.name}</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{formatCurrency(item.price)}</td>
                                            <td>{item.quantity > 0 ? "In stock" : "Out stock"}</td>
                                            <td>
                                                <a
                                                    href={process.env.PUBLIC_URL + "#"}
                                                    className={`btn -dark ${checkProductInCart(item.id) ? "-disable" : ""
                                                        }`}
                                                    onClick={(e) => addToCartHandle(e, item)}
                                                >
                                                    {checkProductInCart(item.id)
                                                        ? "Added to cart"
                                                        : "Add to cart"}
                                                </a>
                                                <a
                                                    className="remove-btn"
                                                    href={process.env.PUBLIC_URL + "#"}
                                                    onClick={(e) => removeWishlistProduct(e, item.id)}
                                                >
                                                    <i className="fas fa-times"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Wishlist