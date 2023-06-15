import {useEffect, useState} from "react";
import axios from "axios";
import "../styles/memberList.css"
import {Member} from "../types";

export default function MemberList() {
    const [member, setMember] = useState<Member[]>([]);

    useEffect(() => {
        axios.get('/members')
            .then(response => setMember(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <main>
            {
                member.map((v) => {
                    return (
                        <li key={v.id}>{v.name}</li>
                    )
                })
            }
        </main>
    )
}