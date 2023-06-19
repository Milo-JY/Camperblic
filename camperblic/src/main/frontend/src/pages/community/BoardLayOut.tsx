<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
=======
import React, { useState } from 'react';
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
=======
import React, { useState } from 'react';
>>>>>>> parent of aa1166d (minsu)
import { Link, useNavigate } from 'react-router-dom';
import { Posting } from '../../types';
import '../../styles/communityStyles/boardLayout.css';

interface BoardLayOutProps {
    postings: Posting[];
}

const BoardLayOut: React.FC<BoardLayOutProps> = ({ postings }) => {
    const navigate = useNavigate();
    const [visiblePostCount, setVisiblePostCount] = useState(15);
<<<<<<< HEAD
<<<<<<< HEAD
    const [currentPage, setCurrentPage] = useState(1);
    const [addIndex, setAddIndex] = useState(0);
    const [isLeftButtonActive, setIsLeftButtonActive] = useState(false);
    const [isRightButtonActive, setIsRightButtonActive] = useState(false);
=======
>>>>>>> parent of aa1166d (minsu)

    const handleTitleClick = (id: number, category: string) => {
        navigate(`/boarddetail/${category}/${id}`);
    };

<<<<<<< HEAD
    const increaseViewCount = async (id: number, category: string) => {
        await axios.put(`/increase-view`, null, {
            params: {
                category: encodeURIComponent(category),
                id: id
            }
        });
    };

    const handleWriteClick = (category: string) => {
        navigate(`/writepost/${category}`);
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        if (postings.length > 150) {
            if (currentPage > Math.floor(postings.length / visiblePostCount / 10) * 10) {
                setIsLeftButtonActive(true);
                setIsRightButtonActive(false);
            } else {
                setIsLeftButtonActive(false);
                setIsRightButtonActive(true);
            }
        } else {
            setIsLeftButtonActive(false);
            setIsRightButtonActive(false);
        }
    }, [currentPage, postings.length, visiblePostCount]);

    const start = (currentPage - 1) * visiblePostCount;
    const end = start + visiblePostCount;
    const visiblePostings = postings.slice(start, end);

    const maxLiCount = 10;
    const pageButtons = [];

    const leftBtnClick = () => {
        setAddIndex(Math.floor(currentPage / maxLiCount) * 10 - maxLiCount);
        setCurrentPage(Math.floor(currentPage / maxLiCount) + 9);
    };

    const rightBtnClick = () => {
        setAddIndex(Math.ceil(currentPage / maxLiCount) * maxLiCount);
        setCurrentPage(Math.floor(currentPage / maxLiCount) + 11);
    };

    for (let index = 0; index < maxLiCount; index++) {
        const pageNumber = index + 1 + addIndex;
        const pageButton = (
            <li key={pageNumber}>
                <button
                    className={currentPage === pageNumber ? 'active' : ''}
                    onClick={() => handlePageClick(pageNumber)}
                >
                    {pageNumber}
                </button>
            </li>
        );
        pageButtons.push(pageButton);
        if (pageNumber * visiblePostCount >= postings.length) break;
    }
=======

    const handleTitleClick = (id: number, category: string) => {
        navigate(`/boarddetail/${category}/${id}`);
    };

    const visiblePostings = postings.slice(0, visiblePostCount);
    const liCount = Math.ceil(postings.length / visiblePostCount);
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
=======
    const visiblePostings = postings.slice(0, visiblePostCount);
>>>>>>> parent of aa1166d (minsu)

    return (
        <section className="boardLayOut">
            <div className="topSide"></div>
            <div className="innerWrap">
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
                        {visiblePostings.map((posting) => (
                            <tr key={posting.id}>
                                <td>{posting.id}</td>
                                <td>{posting.name}</td>
                                <td className="linkTd" onClick={() => handleTitleClick(posting.id, posting.category)}>
                                    {posting.title}
                                </td>
                                <td>{posting.createdate}</td>
                                <td>{posting.views}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD

                <nav className="pageNationWrap">
                    <button
                        disabled={!isLeftButtonActive}
                        onClick={leftBtnClick}
                        className={isLeftButtonActive ? 'active' : ''}
                    >
                        이전
                    </button>
                    <ul className="pageBtnUl">{pageButtons}</ul>
                    <button
                        disabled={!isRightButtonActive}
                        onClick={rightBtnClick}
                        className={isRightButtonActive ? 'active' : ''}
                    >
                        다음
                    </button>
                    <button
                        className="writeBtn"
                        onClick={() => handleWriteClick(postings.length > 0 ? postings[0].category : '')}
                    >
                        글쓰기
                    </button>
=======
                <button className="writeBtn">
                    <Link to="/write">글쓰기</Link>
                </button>
                <nav>
                    <button>왼쪽</button>
                    <ul>
                        {Array.from({ length: liCount }, (_, index) => (
                            <li key={index + 1}>
                                <button>{index + 1}</button>
                            </li>
                        ))}
                    </ul>
                    <button>오른쪽</button>
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
                </nav>
=======
                <button className="writeBtn">
                    <Link to="/write">글쓰기</Link>
                </button>
>>>>>>> parent of aa1166d (minsu)
            </div>
            <div className="bottomSide"></div>
        </section>
    );
};

export default BoardLayOut;