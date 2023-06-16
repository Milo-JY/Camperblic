import React from 'react';
import {Simulate} from "react-dom/test-utils";
import select = Simulate.select;
import "../../styles/paymentStyles/Cart.css";
import TitleLayout from "./TitleLayout";
import ItemlistCart from "./ItemlistCart";
import ChargeBox from "./ChargeBox";

const Cart = () => {
    return (
        <section className={"cartLayout"}>
            <div className={'section_wrap'}>
                <div className={'list_section'}>
                    <div className={'list_inner'}>
                        <TitleLayout/>
                        <ItemlistCart/>
                    </div>
                </div>

                <ChargeBox/>

                <div className={'progress_section'}></div>
            </div>
        </section>
    );
};

export default Cart;