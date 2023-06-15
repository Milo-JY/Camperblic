import React, {useEffect, useState} from 'react';
import {Posting} from "../../types";
import axios from "axios";
import BoardLayOut from "./BoardLayOut";

const GatherCamperBoard = () => {
    const [postings, setPostings] = useState<Posting[]>([]);

    useEffect(() => {
        axios.get('/gathercamper')
            .then(response => setPostings(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <ul>
            <BoardLayOut postings={postings}/>
        </ul>
    );
};

export default GatherCamperBoard;