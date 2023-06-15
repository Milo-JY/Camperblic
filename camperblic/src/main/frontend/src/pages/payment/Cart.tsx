import React from 'react';
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import "../../styles/paymentStyles/Cart.css";
import TitleLayout from "./TitleLayout";
import ItemCart from "./ItemCart";

const Cart = () => {
    return (
        <section className={"cartLayout"}>
            <div className={'section_wrap'}>
                <div className={'list_section'}>
                    <div className={'list_inner'}>
                        <TitleLayout/>
                        <ItemCart/>
                    </div>
                </div>
                <div className={'fixed_section'}></div>
                <div className={'progress_section'}></div>
            </div>
        </section>
    );
};

export default Cart;