import { useDispatch, useSelector } from "react-redux"
import './App.css'
import { useEffect, useState } from "react"
import { clearItem, removeItem } from "./redux/slice"
import {useNavigate} from 'react-router'

export default function CartList(){
    const cartSelector = useSelector((state)=>state.cart.items)
    const [cartItems, setCartItems] = useState(cartSelector)

    useEffect(()=>{
      setCartItems(cartSelector)
    },[cartSelector])
    const manageQuantity = (id, q)=>{
       let quantity = parseInt(q)>1?parseInt(q):1
       const cartTempItems = cartSelector.map((item)=>{
        return item.id==id?
        {...item,quantity}:item  
       })
       setCartItems(cartTempItems)
    }
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handlePlaceOrders = ()=>{
      localStorage.clear()
      dispatch(clearItem())
      alert('Your order Have been Placed')
      navigate('/')
    }
    return (
        <>
        <div className="cart-container">
          <div className="cart-header">
            <h2>Your Cart Item</h2>
            <span>{cartItems.length} items</span>
          </div>
          {
            cartItems.length>0 ? cartItems.map((item)=>{
               return <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <img src={item.thumbnail} alt="" />
                      <div className="item-details">
                        <h4>{item.title}</h4>
                        <p>{item.brand}</p>
                      </div>
                    </div>
                    <div className="item-actions">
                        <input type="number" placeholder="Quantity" value={item.quantity?item.quantity:1} onChange={(e)=>manageQuantity(item.id,e.target.value)}/>
                        <span className="price">${item.quantity?(item.price*item.quantity).toFixed(2):item.price}</span>
                        <button onClick={()=>dispatch(removeItem(item))} className="btn">Remove</button>
                    </div>
               </div>
            })
            : null
          }
          <div className="total">
            Total: ${(cartItems.reduce((sum,item)=>item.quantity?sum+item.price*item.quantity:sum+item.price,0)).toFixed(2)}
          </div>
          <button onClick={()=>handlePlaceOrders()} className="order-btn">Place Order</button>
        </div>
        </>
    )
}