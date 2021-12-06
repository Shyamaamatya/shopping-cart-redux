import React from 'react'
import "./style.css"

import {GrAdd} from "react-icons/gr"

import {addToCart, setToCart} from "../../redux/action/shopaction"
import {useDispatch,useSelector} from "react-redux"
import product from './products'


 const Home = () => {

    const myState = useSelector((state) => state.shopReducer.list);
    // console.log(myState);
    const dispatch = useDispatch();

  const addToCartHandler = (item) => {
      
    const product = { ...item, quantity: 1 }
    console.log("myState", myState)
    console.log({product})
    var alreadyinCart = myState.find((cartItem) => {
      return cartItem.id === item.id
    })
    if (alreadyinCart) {
      const finalCartProducts = myState.map((cart) =>
        cart.id === item.id ? { ...cart, quantity: cart.quantity + 1 } : cart
      )
      console.log(finalCartProducts)
      dispatch(setToCart([...finalCartProducts]))
    } else {
      dispatch(addToCart(product))
    }
  }
//   console.log(myState)

    return (
        <>
            <div className="main">
                <div className="title">
                    {/* <h2>Our Items {myState.length}</h2> */}
                    <h2>Our Items</h2>

                </div>
                <div className="item-con">
                    {product.map((item)=> {
                        const {image, brandName, Description, Price, id}= item
                        // console.log(item)
                        return(
                            <div className="items" key={id}>
                                <div className="item-img">
                                    <img src={image} alt="products"></img>
                                    <p className="item-title">{brandName}</p>
                                </div>
                                <div>
                                    {/* <button><GrAdd onClick={() => 
                                dispatch(addToCart())
                                }/></button> */}
                                <button
                                    className='add-btn'
                                    onClick={() => addToCartHandler(item)}
                                >
                                    <GrAdd />
                                </button>
                                </div>
                                <div className="card-content">
                                    <p>{Description}</p>
                                    <b>Price: {Price}$</b>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default Home;
