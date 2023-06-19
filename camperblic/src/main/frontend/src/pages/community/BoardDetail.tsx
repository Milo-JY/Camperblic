import React, {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
<<<<<<< HEAD
import {Posting} from '../../types';
import '../../styles/communityStyles/boardDetail.css';

const EditDeleteButtons: React.FC<{ handleEdit: () => void; handleDelete: () => void }> = ({
                                                                                               handleEdit,
                                                                                               handleDelete,
                                                                                           }) => {
    return (
        <div className="button-group">
      <span className="button" onClick={handleEdit}>
        수정
      </span>
            <span className="button" onClick={handleDelete}>
        삭제
      </span>
        </div>
    );
};

const BoardDetail: React.FC = () => {
    const {id, category} = useParams<{ id: string; category: string }>();
=======
import { Posting } from '../../types';
import '../../styles/communityStyles/boardDetail.css';

const BoardDetail: React.FC = () => {
    const { id, category } = useParams<{ id: string, category: string }>();
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
    const [posting, setPosting] = useState<Posting>();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`/boarddetail/${category}/${id}`)
            .then((response) => setPosting(response.data))
            .catch((error) => {
                console.error('게시물을 가져오는 데 실패했습니다.', error);
            });
    }, [id]);

    const handleEdit = () => {
        // 게시물 수정 로직
        navigate(`/writepost/${category}?edit=true&id=${id}`);
    };

    const handleDelete = () => {
        axios
            .delete('/delete-posting', {
                params: {
                    category: category,
                    id: id
                }
            })
            .then((response) => {
                alert(response.data);
                navigate(`/${category}`);
            })
            .catch((error) => {
                alert('게시글 삭제에 실패했습니다:' + error);
            });
    };

    const handleGoBack = () => {
        navigate(-1);
    };

    const handleGoList = () => {
        navigate(`/${category}`);
    };

    return (
<<<<<<< HEAD
        <section className="board-detail-container">
            <div className="detailDecoTop">데코 들어갈 자리</div>

            <article className="board-detail">
                <div className="container">
                    <div className="post">
                        <div className="post-info">
                            <div className="post-header">
                                <h3>{posting?.title}</h3>
                                <p>글 번호: {posting?.id}</p>
=======
        <section>
            <div className="board-detail-container">
                <section className="board-detail">
                    <div className="container">
                        <div className="post">
                            <div className="post-info">
                                <div className="post-header">
                                    <h3>{posting?.title}</h3>
                                    <p>글 번호: {posting?.id}</p>
                                </div>
                                <div className="post-details">
                                    <p>
                                        작성자: {posting?.name} | 작성일: {posting?.createdate} | 조회수: {posting?.views}
                                    </p>
                                </div>
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
                            </div>
                            <div className="post-details">
                                <p>
                                    작성자: {posting?.name} | 작성일: {posting?.createdate} | 조회수: {posting?.views}
                                </p>
                            </div>
                        </div>
                        <div className="post-content">
                            <p>{posting?.content}</p>
                        </div>
                    </div>
<<<<<<< HEAD
                </div>
                {true && <EditDeleteButtons handleEdit={handleEdit} handleDelete={handleDelete}/>}
                <div className="button-group">
                    <span className="button" onClick={handleGoBack}>
                    뒤로가기
                    </span>
                    <span className="button" onClick={handleGoList}>
                    목록으로
                    </span>
                </div>
            </article>
            <article className="replyContainer">
                <textarea
                    placeholder="댓글 추가"
                ></textarea>
                <div className="replyInput">
                    <span>취소</span>
                    <span>등록</span>
                </div>
                <ul className="replyList">
                    <li className="replyOne">
                        <p>
                            작성자명
                        </p>
                        <p>
                            댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용댓글 내용
                        </p>
                        <div className="replyButtons">
                            <div>
                                <span>답글</span>
                            </div>
                            <div>
                                <span>수정</span>
                                <span>삭제</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </article>

            <div className="detailDecoTop">데코 들어갈 자리</div>
=======
                </section>
            </div>
>>>>>>> e55d47d211fce2377a00ff107978ef44ff2a5b7c
        </section>
    );
};

export default BoardDetail;