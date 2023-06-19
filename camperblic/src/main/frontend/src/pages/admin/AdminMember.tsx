import React from 'react';
import '../../styles/adminStyles/AdminMember.css';
import AdminMemberList from "./components/AdminMemberList";

const AdminMember = () => {
    return (
        <div className='adminmember'>
            <h1 className='membertitle'>멤버관리</h1>
            {/*<span className='widgetstitle'>멤버전체</span>*/}
            <AdminMemberList/>
        </div>
    );
};

export default AdminMember;