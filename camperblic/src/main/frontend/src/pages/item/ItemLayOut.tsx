import React from 'react';
import { Item } from "../../types";
import "../../styles/itemStyles/itemLayOut.css";

interface ItemLayOutProps {
    items: Item[];
    topText: string;
}

const ItemLayOut: React.FC<ItemLayOutProps> = ({ items, topText }) => {
    return (
        <section className="itemLayOut">
            <div className="topFont">
                <h1 className="topText">{topText}</h1>
            </div>
            <div className="item-list">
                {items.map((item) => (
                    <div key={item.item_id} className="item-card">
                        <div className="item-image">
                            <img src={item.image_path} alt={item.name} />
                        </div>
                        <div className="item-details">
                            <h2 className="item-name">{item.name}</h2>
                            <p className="item-price">가격: {item.price}원</p>
                            <p className="item-description">설명: {item.description}</p>
                            <p className="item-category">카테고리: {item.category_id}</p>
                            <p className="item-stock">재고: {item.current_stock}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ItemLayOut;
