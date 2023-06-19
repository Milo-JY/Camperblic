import React from 'react';
import AdminDashboardStock from './AdminDashboardStock';
import AdminDashboardBoard from './AdminDashboardBoard';
import '../../../styles/adminStyles/AdminDashboardBottom.css';

const AdminDashboardBottom = () => {
    return (
        <div className='admindashboard_bottom'>
            <AdminDashboardStock/>
            <AdminDashboardBoard/>
        </div>
    );
};

export default AdminDashboardBottom;