import { useDispatch, useSelector } from "react-redux"
import { addItem, removeItem } from "./redux/slice"
import { useEffect } from "react"
import {fetchProducts} from './redux/productSlice'


export default function Product(){

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(fetchProducts())
    },[])

    const selector = useSelector((state)=>state.products.items)
    const cartSelector = useSelector((state)=>state.cart.items)
    return (
         <section className="products">
    {/* <div class="product-card">
      <img src="https://plus.unsplash.com/premium_photo-1678099940967-73fe30680949?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1160" alt="Product 1" />
      <h3>Wireless Headphones</h3>
      <p>$59.99</p>
      <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
      <button onClick={()=>dispatch(removeItem(1))}>Remove from Cart</button>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1172" alt="Product 2" />
      <h3>Smart Watch</h3>
      <p>$89.99</p>
      <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
      <button onClick={()=>dispatch(removeItem(1))}>Remove from Cart</button>
    </div>

    <div class="product-card">
      <img src="https://plus.unsplash.com/premium_photo-1677159499898-b061fb5bd2d7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=928" alt="Product 3" />
      <h3>Bluetooth Speaker</h3>
      <p>$45.00</p>
      <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
      <button onClick={()=>dispatch(removeItem(1))}>Remove from Cart</button>
    </div>

    <div class="product-card">
      <img src="https://images.unsplash.com/photo-1628832307345-7404b47f1751?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=883" alt="Product 4" />
      <h3>Gaming Mouse</h3>
      <p>$39.99</p>
      <button onClick={()=>dispatch(addItem(1))}>Add to Cart</button>
      <button onClick={()=>dispatch(removeItem(1))}>Remove from Cart</button>
    </div> */}
    <div className="grid">
    {
      selector.length && selector.map((item,idx)=>{
        return <div key={idx} className="product-card">
        <img src={item.thumbnail} alt="Product 4" />
      <h3>{item.title}</h3>
      <p>${item.price}</p>

    {
      cartSelector.find((cartItem)=> cartItem.id === item.id) ? <button onClick={()=>dispatch(removeItem(item))} style={{backgroundColor:"crimson", cursor:"pointer"}}>Remove from cart</button> :<button onClick={()=>dispatch(addItem(item))}>Add to Cart</button> 
    }

      
      {/* <button onClick={()=>dispatch(removeItem(1))}>Remove from Cart</button> */}
        </div>
      })
    }
    </div>
  </section>
    )
}