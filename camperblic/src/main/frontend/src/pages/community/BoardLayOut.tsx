import React from 'react';
import { Posting } from "../../types";
import "../../styles/communityStyles/boardLayout.css"

interface BoardLayOutProps {
    postings: Posting[];
}

const BoardLayOut: React.FC<BoardLayOutProps> = ({ postings }) => {
    return (
        <main className={"boardLayOut"}>
            <table>
                <colgroup>
                    <col style={{ width: '10%' }} />
                    <col style={{ width: '15%' }} />
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '20%' }} />
                    <col style={{ width: '10%' }} />
                </colgroup>
                <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>작성일</th>
                        <th>Views</th>
                    </tr>
                </thead>
                <tbody>
                    {postings.map((posting) => (
                        <tr key={posting.id}>
                            <td>{posting.id}</td>
                            <td>{posting.name}</td>
                            <td>{posting.title}</td>
                            <td>{posting.createdate}</td>
                            <td>{posting.views}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default BoardLayOut;