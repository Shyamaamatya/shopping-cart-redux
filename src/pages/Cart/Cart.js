import React from 'react'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart, setToCart } from '../../redux/action/shopaction'
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai'


import "./style.css"

 const Cart = () => {
    // const [total, setTotal] = useState(0)
    const dispatch = useDispatch()
  
    const cartItem = useSelector((state) => state.shopReducer.list)
    console.log({cartItem})
    //for calcutalting Total Price
    const total = cartItem.reduce((sum, item) => sum + item.quantity * item.Price, 0);

    const removalFromCartHandler = (item) => {
        console.log(item)
        const filteredItem = cartItem.filter(({ id }) => id !== item.id)
        dispatch(removeFromCart(filteredItem))
      }

      //increase and decrease
  const quantityChangeHandler = (operator, product) => {
    if (operator === '+') {
      const finalCartProduct = cartItem.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
      dispatch(setToCart(finalCartProduct))
    } else {
      const finalCartProduct = cartItem.map((item) =>
        item.id == product.id ? { ...item, quantity: item.quantity - 1 } : item
      )
      const removeCartItem = finalCartProduct.filter(
        ({ quantity }) => quantity !== 0
      )

      dispatch(setToCart(removeCartItem))
    }
  }

      //for calculating Total Price
    //   useMemo(() => {
    //     total: cartItem.reduce(
    //         //reduce go through the array and cartItem is the each item in the array
    //         (accumulatedTotal, item) =>
    //           accumulatedTotal + item.data.Price * item.data.quantity,
    //         0 //0 is the start point of accumulatedTotal
    //       );
    //       console.log(total)
    //       setTotal(total)
    //   },[cartItem])
    //   useMemo(() => {
    //     var total1 = 0
    //     cartItem.map(( item ) => (total1 += item.data.Price * item.data.quantity))
    //     setTotal(total1)
    //   }, [cartItem])

    return (
        <div>
          <div className='cartitems'>
            <h5 className='cart-header'>
              You have ordered: {cartItem.length === 0 && <p>Nothing.</p>}
            </h5>
            {cartItem?.map((item) => {
                console.log(item)
              const { image, brandName, Description, Price, id } = item
            return (
            <div>
                
                <div className='cartitem-container' key={id}>
                    <div className='image-wrapper'>
                        <img src={image} alt='products' />
                    </div>
                    <div className='product-body'>
                        <h3 className='brand-name'>{brandName}</h3>
                        <p>{Description}</p>
                        <b>Price:{Price}$</b>
                        <br />
                        <b>Quantity:{item?.quantity}</b>
                        <br />
                  <button
                    className='decrease-btn'
                    onClick={() => quantityChangeHandler('-', item)}
                  >
                    <AiFillCaretDown />{' '}
                  </button>
                  <button
                    className='increase-btn'
                    onClick={() => quantityChangeHandler('+', item)}
                  >
                    <AiFillCaretUp />
                  </button>
                  <br />
                        <button
                            onClick={() => removalFromCartHandler(item)}
                            className='rmv-btn'
                        >
                            Remove
                        </button>
                    </div>
                </div>
            
            </div>
        // </div>
            )
            })}
            
            <h4 className='total-price'>Total: {total} $</h4>
        
        </div>
        </div>
    )
}

export default Cart;
