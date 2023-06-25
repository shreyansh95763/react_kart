import React from "react";
import './Cart.css'

    class CartItem extends React.Component{
        constructor(){
            super();
            this.state={
                title: "Mobile Phone",
                price : 999,
                Qty : 1,
                img : " ",
            }
            // 2..this.increaseQuantity= this.increamentQuantity.bind(this)
        }
        // 1...increaseQuantity(){
        //     console.log('this',this.state);
        // }
        increaseQuantity=( )=>{  // 3...arr function if not write above condtion in constructor
            console.log('this',this.state);
        }
        render(){
            const {title,price,Qty} = this.state;
            return(
                <div>
                <h1 className="heading">  Lists of items </h1>
                <div className="cart-items">
                    <div className="cart-left">
                        <img src="https://www.jquery-az.com/html/images/banana.jpg" title="Title of image" alt="alt text here"/>
                    </div>

                    <div className="cart-right">
                        <div>{title}</div>
                        <div>{price}</div>
                        <div>{Qty}</div>
                        <div className="buttons">
                            <img alt="increame Item"
                                className="increase-button"
                                src="https://img.icons8.com/plus"
                                // onclick={this.increasementQuantity.bind(this)} // only with (1...)if not write in constructor 2..
                                onclick={this.increaseQuantity}//with 2.. and 3..
                            />
                            <img alt="Decrease Item"
                                className="minus-button"
                                src="https://img.icons8.com/minus"
                                onclick={this.increaseQuantity}//with 2.. and 3..

                            />
                            <img alt="Delete Item"
                                className="delete-button"
                                src="https://img.icons8.com/trash"

                            />

                        </div>
                    </div>

                </div>
                </div>
            )
        }
    }
    export default CartItem;