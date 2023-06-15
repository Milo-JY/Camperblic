import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";

const Mat = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/mat')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (

            <ItemLayOut items={items} topText="침낭/매트"/>

    );
};

export default Mat;