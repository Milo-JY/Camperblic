import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";
import TopLayOut from "./TopLayOut";

const Mat = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/mat')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <TopLayOut>침낭/매트</TopLayOut>
        <ul>
            <ItemLayOut items={items}/>
        </ul>
            </>
    );
};

export default Mat;