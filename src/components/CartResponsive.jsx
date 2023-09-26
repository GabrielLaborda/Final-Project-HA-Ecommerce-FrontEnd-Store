import React from "react"
import { Link } from "react-router-dom"
import { AiOutlineShopping } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import "./CartResponsive.css"
import { useEffect, useState } from "react";

function CartResponsive() {
    const cart = useSelector((state) => state.cart);
    const [isVisible, setIsVisible] = useState(false);
    

    const listenToScroll = () => {
        let heightToHidden = 20;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    return (
        <div id="goCartButton">
            {isVisible && (
                <Link to={'/cart'}>
                    <div className="cart-btn">
                        <AiOutlineShopping className="icon" />
                    <span>
                        {cart.reduce((total, item) => Number(total) + Number(item.quantity), 0)}
                    </span>
                    </div>
                </Link>
            )}
        </div>
    );
}

export default CartResponsive

    