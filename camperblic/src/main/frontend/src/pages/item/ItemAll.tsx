import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";


const ItemAll = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/items')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (

            <ItemLayOut items={items} topText="전체상품"/>

    );
};

export default ItemAll;