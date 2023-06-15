import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";


const Tent = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/tent')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (

            <ItemLayOut items={items} topText="텐드/타프"/>

    );
};

export default Tent;