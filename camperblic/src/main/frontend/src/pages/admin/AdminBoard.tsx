import React from 'react';
import '../../styles/adminStyles/AdminBoard.css';
import AdminBoardForm from "./components/AdminBoardForm";

const AdminBoard = () => {
    return (
        <section>
            <h1 className='adminboard_title'>게시판관리</h1>
            <div className='adminboard_container'>
                <div className='adminboard_grid'>
                    <div className='adminboard_section'>
                        <span>캠핑이야기</span>
                        <AdminBoardForm/>
                    </div>
                    <div className='adminboard_section'>
                        <span>자유게시판</span>
                        <AdminBoardForm/>
                    </div>
                    <div className='adminboard_section'>
                        <span>캠퍼 구인</span>
                        <AdminBoardForm/>
                    </div>
                    <div className='adminboard_section'>
                        <span>캠핑장 후기</span>
                        <AdminBoardForm/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminBoard;