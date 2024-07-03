import React from 'react'
import { CartIndv } from './cartindv';

const Cart = ({cart}) => {
    return ( 
        <center>
            <div>
                {
                    cart.map(function(item){
                        return(
                            <CartIndv key={itcdem.id} image={item.image} title={item.title}/>
                        )
                    })
                }
            </div>
        </center>
    )
}

export default Cart;