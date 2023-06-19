import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Item } from "../../types";
import "../../styles/itemStyles/itemLayOut.css";

interface ItemLayOutProps {
    items: Item[];
    topText: string;
    onLoadMore: () => void;
}

const ItemLayOut: React.FC<ItemLayOutProps> = ({ items, topText, onLoadMore }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [visibleItems, setVisibleItems] = useState<Item[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const initialItemCount = 20;
        const initialItems = items.slice(0, initialItemCount);
        setVisibleItems(initialItems);
    }, [items]);

    useEffect(() => {
        const handleScroll = () => {
            const isAtBottom =
                window.innerHeight + window.scrollY >= document.body.scrollHeight;

            if (isAtBottom && !isLoading && visibleItems.length < items.length) {
                setIsLoading(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLoading, visibleItems.length, items.length]);

    useEffect(() => {
        if (isLoading && visibleItems.length < items.length) {
            const nextItemCount = page * 10;
            const nextItems = items.slice(0, nextItemCount);

            setVisibleItems(nextItems);
            setPage((prevPage) => prevPage + 1);
            setIsLoading(false);
        }
    }, [isLoading, items, visibleItems, page]);

    return (
        <section className="itemLayOut">
            <div className="topFont">
                <h1 className="topText">{topText}</h1>
            </div>
            <div className="item-list">
                {visibleItems.map((item, index) => (
                    <Link to={`/itemdetail/${item.itemId}`} key={index}>
                        <div className="item-card">
                            <div className="item-image">
                                {item.imagePath ? (
                                    <img src={item.imagePath} alt={item.name} />
                                ) : (
                                    <div className="no-image-container">
                                        <span className="no-image-text">No Image Available</span>
                                    </div>
                                )}
                            </div>
                            <div className="item-details">
                                <h2 className="item-name">{item.name}</h2>
                                <p className="item-price">가격: {item.price}원</p>
                                <p className="item-description">설명: {item.description}</p>
                                <p className="item-stock">구매 가능 수량: {item.amount}</p>
                                <p className="item-stock">재고: {item.currentStock}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {isLoading && <p>Loading...</p>}
        </section>
    );
};

export default ItemLayOut;
