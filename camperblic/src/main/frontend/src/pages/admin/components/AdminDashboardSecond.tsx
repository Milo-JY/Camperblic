import React from 'react';
import '../../../styles/adminStyles/AdminDashboardSecond.css';

const AdminDashboardSecond = () => {
    return (
        <div className='second_div'>
            <a className='second_member' href='./ad' >멤버관리</a>
            <a>주문현황</a>
            <a>1대1문의내역</a>
            <a>취소관리</a>
            <a>환불관리</a>
            <a>오늘날짜 및 로그인한 시각 띄우기</a>
        </div>
    );
};

export default AdminDashboardSecond;