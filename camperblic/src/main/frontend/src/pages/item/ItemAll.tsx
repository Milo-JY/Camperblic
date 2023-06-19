import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";
import TopLayOut from "./TopLayOut";

const ItemAll = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/items')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <TopLayOut>전체상품</TopLayOut>
        <ul>
            <ItemLayOut items={items}/>
        </ul>
            </>
    );
};

export default ItemAll;