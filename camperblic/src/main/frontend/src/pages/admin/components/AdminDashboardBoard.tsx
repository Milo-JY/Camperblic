import React from 'react';
import '../../../styles/adminStyles/AdminDashboardBoard.css';
import {Link} from "react-router-dom";

const AdminDashboardBoard = () => {
    return (
        <section className='admindashboard_board'>
            <div className='admindashboard_boardtitle'><Link to='/adminboard'>게시판현황</Link></div>
            <div className='admindashboard_boardcenter'>
                <table className='admindashboard_boardtable'>
                    <tr className='admindashboard_boardtableth'>
                        <th className='admindashboard_boardth'>글번호</th>
                        <th className='admindashboard_boardth'>게시판제목</th>
                        <th className='admindashboard_boardth'>작성자ID</th>
                    </tr>
                    <tr className='admindashboard_boardtabletd'>
                        <td className='admindashboard_boardth'>233333</td>
                        <td className='admindashboard_boardth'>안녕하세요</td>
                        <td className='admindashboard_boardth'>dfjgl123</td>
                    </tr>
                </table>
            </div>
        </section>
    );
};

export default AdminDashboardBoard;