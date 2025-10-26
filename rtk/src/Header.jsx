import { Link } from "react-router"

import AddToCart from "./AddToCart"

export default function Header(){
    return (
        <>
        <header>
    <div className="logo">ShopEase</div>

    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* <li><Link to="/">Home</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li> */}
        <AddToCart />
      </ul>
      
    </nav>
  </header>
  </>
    )
}