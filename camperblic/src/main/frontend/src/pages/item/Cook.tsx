import React, {useEffect, useState} from 'react';
import ItemLayOut from "./ItemLayOut";
import axios from "axios";
import {Item} from "../../types";
import TopLayOut from "./TopLayOut";

const Cook = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/cook')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <TopLayOut>취사용품</TopLayOut>
        <ul>
            <ItemLayOut items={items}/>
        </ul>
        </>
    );
};

export default Cook;