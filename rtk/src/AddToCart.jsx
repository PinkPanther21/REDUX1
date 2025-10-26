import { useSelector } from "react-redux";
import { Link } from "react-router";

export default function AddToCart() {
    const cartSelector = useSelector((state)=>state.cart.items)
  return (
    <>
      <div className="cart">
        <Link to="/cart">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487985079-b299ac8ba1df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
          alt=""
        />
        <span className="cart-count">{cartSelector.length?cartSelector.length:0}</span>
        </Link>
      </div>
    </>
  );
}
