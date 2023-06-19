import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// 아이템 인터페이스 정의
interface Item {
    name: string;
    price: number;
    description: string;
    categoryId: number;
    imagePath: string;
    amount: number;
    currentStock: number;
}

const ItemDetail = () => {
    const { itemId } = useParams<{ itemId: string }>();
    const [item, setItem] = useState<Item>();

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await fetch(`/items/${itemId}`);
                const data = await response.json();
                setItem(data);
            } catch (error) {
                console.error('상품을 가져오는 중에 오류가 발생했습니다:', error);
            }
        };

        fetchItem();
    }, [itemId]);

    if (!item) {
        return <p>로딩 중...</p>;
    }

    return (
        <div>
            <h1>상세페이지입니다</h1>
            <h2>{item?.name}</h2>
            <p>가격: {item?.price}</p>
            <p>설명: {item?.description}</p>
            <p>카테고리 ID: {item?.categoryId}</p>
            <p>이미지 경로: {item?.imagePath}</p>
            <p>수량: {item?.amount}</p>
            <p>재고: {item?.currentStock}</p>
            <Link to="/itemall">상품목록</Link>
            <Link to={`/cart?itemId=${itemId}`}>장바구니</Link>
        </div>
    );
};

export default ItemDetail;
