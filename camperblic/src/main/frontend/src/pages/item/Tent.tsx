import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";
import TopLayOut from "./TopLayOut";

const Tent = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/tent')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <>
            <TopLayOut>텐트/타프</TopLayOut>
        <ul>
            <ItemLayOut items={items}/>
        </ul>
            </>
    );
};

export default Tent;