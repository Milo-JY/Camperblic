import React, { useEffect, useState } from 'react';
import { Item } from "../../types";
import axios from "axios";
import ItemLayOut from "./ItemLayOut";
<<<<<<< HEAD

=======
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c

const Etc = () => {
    const [items, setItems] = useState<Item[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchItems = () => {
        setIsLoading(true);
        axios.get('/mat')
            .then(response => setItems(prevItems => [...prevItems, ...response.data]))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false));
    };

    const loadMoreItems = () => {
        fetchItems();
    };

    useEffect(() => {
        fetchItems();
    }, []);

    return (
<<<<<<< HEAD

            <ItemLayOut items={items} topText="침낭/매트"/>

=======
        <ItemLayOut items={items} topText="기타" onLoadMore={loadMoreItems} />
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
    );
};

export default Etc;