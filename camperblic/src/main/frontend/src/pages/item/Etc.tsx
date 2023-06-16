import React, {useEffect, useState} from 'react';
import {Item} from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";


const Etc = () => {
    const [items, setItems] = useState<Item[]>([]);

    useEffect(() => {
        axios.get('/etc')
            .then(response => setItems(response.data))
            .catch(error => console.log(error))
    }, []);

    return (

            <ItemLayOut items={items} topText="소품"/>

    );
};

export default Etc;