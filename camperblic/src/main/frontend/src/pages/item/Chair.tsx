import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";


const Chair = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/chair')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (

            <ItemLayOut items={items} topText="테이블/체어"/>

    );
};

export default Chair;