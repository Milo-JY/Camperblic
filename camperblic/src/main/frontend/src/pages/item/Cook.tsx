import React, {useEffect, useState} from 'react';
import ItemLayOut from "./ItemLayOut";
import axios from "axios";
import {Item} from "../../types";


const Cook = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/cook')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (

            <ItemLayOut items={items} topText="취사도구"/>

    );
};

export default Cook;