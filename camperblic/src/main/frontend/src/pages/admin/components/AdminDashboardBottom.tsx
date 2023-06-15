import React from 'react';
import AdminDashboardStock from './AdminDashboardStock';
import AdminDashboardBoard from './AdminDashboardBoard';
import '../../../styles/adminStyles/AdminDashboardBottom.css';

const AdminDashboardBottom = () => {
    return (
        <section className='admindashboard_bottom'>
            <AdminDashboardStock/>
            <AdminDashboardBoard/>
        </section>
    );
};

export default AdminDashboardBottom;