import React from 'react';
import '../../../styles/adminStyles/AdminBoardForm.css';

const AdminBoardForm = () => {
    return (
        <section className='AdminBoard_formcenter'>
            <table className='AdminBoard_table'>
                <tr className='AdminBoardFormth'>
                    <th>글 번호</th>
                    <th>작성자</th>
                    <th>제목</th>
                    <th>작성일</th>
                    <th>Views</th>
                    <th>수정</th>
                </tr>
                <tr className='AdminBoardFormtd'>
                    <td className='AdminBoardFormtdcenter'>1</td>
                    <td className='AdminBoardFormtdcenter'>asd</td>
                    <td className='AdminBoardFormtdcenter'>dbds</td>
                    <td className='AdminBoardFormtdcenter'>22.33.33</td>
                    <td className='AdminBoardFormtdcenter'>5</td>
                    <td className='AdminBoardFormtdcenter'>
                        <button>수정</button>
                    </td>
                </tr>
            </table>
        </section>
    );
};

export default AdminBoardForm;