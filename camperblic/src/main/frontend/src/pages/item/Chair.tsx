import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";
import TopLayOut from "./TopLayOut";

const Chair = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/chair')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <TopLayOut>테이블/체어</TopLayOut>
        <ul>
            <ItemLayOut items={items}/>
        </ul>
            </>
    );
};

export default Chair;