import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Item } from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";
<<<<<<< HEAD

=======
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c

const ItemAll = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchItems = () => {
        setIsLoading(true);

        axios.get('/cook')
            .then(response => setItems(prevItems => [...prevItems, ...response.data]))
            .catch(error => console.log(error));

        axios.get('/etc')
            .then(response => setItems(prevItems => [...prevItems, ...response.data]))
            .catch(error => console.log(error));

        axios.get('/mat')
            .then(response => setItems(prevItems => [...prevItems, ...response.data]))
            .catch(error => console.log(error));

        axios.get('/chair')
            .then(response => setItems(prevItems => [...prevItems, ...response.data]))
            .catch(error => console.log(error));

        axios.get('/tent')
            .then(response => setItems(prevItems => [...prevItems, ...response.data]))
            .catch(error => console.log(error));

        setIsLoading(false);
    };

    const loadMoreItems = () => {
        fetchItems();
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
<<<<<<< HEAD

            <ItemLayOut items={items} topText="전체상품"/>

=======
        <ItemLayOut items={items} topText="전체상품" onLoadMore={loadMoreItems} />
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
    );
};

export default ItemAll;
