import React from 'react';
import '../../styles/adminStyles/AdminMember.css';
import AdminMemberList from "./components/AdminMemberList";

const AdminMember = () => {
    return (
        <section className='adminmember'>
            <h1 className='adminmembertitle'>멤버관리</h1>
            {/*<span className='widgetstitle'>멤버전체</span>*/}
            <AdminMemberList/>
        </section>
    );
};

export default AdminMember;