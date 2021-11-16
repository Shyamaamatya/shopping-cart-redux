import React from 'react'
import "./style.css"
import item1 from "../../Images/item1.jpg"
import item2 from "../../Images/item2.jpg"
import item3 from "../../Images/item3.jpg"


 const Home = () => {
    return (
        <>
            <div className="main">
                <div className="title">
                    <h2>Our Items</h2>
                </div>
                <div className="item-con">
                    <div className="items">
                        <div className="item-img">
                            <img src={item1} alt="item1"></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.</p>
                        <h4>Price: 110$</h4>
                    </div>

                    <div className="items">
                        <div className="item-img">
                            <img src={item2} alt="item2"></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.</p>
                        <h4>Price: 110$</h4>
                    </div>

                    <div className="items">
                        <div className="item-img">
                            <img src={item3} alt="item3"></img>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.</p>
                        <h4>Price: 110$</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
