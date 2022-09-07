import React, {useState, useEffect} from "react";
import { BsBagCheckFill } from 'react-icons/bs';
import { useStateContext } from "../context/StateContext";
import Link from 'next/link';


const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantity(0);

    }, [])
    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon"><BsBagCheckFill /></p>
                <h2> Thank you for your order!</h2>
                <p className="description">
                    If you have any questions, please email 
                    <a className="email" href="mailto:order@marcuscomputer.com">
                        order@marcuscomputer.com
                        </a>
                </p>
                <Link href='/' >
                    <button type='button' width='250px' className="btn">Continue Shopping</button>
                </Link>

            </div>
        </div>

    )
}


export default Success;