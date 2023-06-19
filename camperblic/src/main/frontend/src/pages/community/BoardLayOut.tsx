import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Posting } from '../../types';
import '../../styles/communityStyles/boardLayout.css';

interface BoardLayOutProps {
    postings: Posting[];
}

const BoardLayOut: React.FC<BoardLayOutProps> = ({ postings }) => {
    return (
        <section className="boardLayOut">
            <div className="topSide"></div>

            <div className="tableContainer">
                <table>
                    <colgroup>
                        <col style={{ width: '10%' }} />
                        <col style={{ width: '15%' }} />
                        <col style={{ width: '45%' }} />
                        <col style={{ width: '20%' }} />
                        <col style={{ width: '10%' }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>작성자</th>
                        <th>제목</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                    </thead>
                    <tbody>
                    {postings.map((posting) => (
                        <tr key={posting.id}>
                            <td>{posting.id}</td>
                            <td>{posting.name}</td>
                            <td>
                                <Link to={`/boarddetail/${posting.id}`}>{posting.title}</Link>
                            </td>
                            <td>{posting.createdate}</td>
                            <td>{posting.views}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="bottomSide"></div>
        </section>
    );
};

export default BoardLayOut;