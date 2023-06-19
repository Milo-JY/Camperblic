import React from 'react';
import '../../styles/adminStyles/AdminDashboard.css';
import AdminDashboardSecond from './components/AdminDashboardSecond';
import AdminDashboardGraph from './components/AdminDashboardGraph';
import AdminDashboardBottom from './components/AdminDashboardBottom';

const AdminDashboard = () => {
    return (
        <div>
            <div className='admindashboard_first'>Camperblic_대시보드</div>
            <AdminDashboardSecond/>
            <AdminDashboardGraph/>
            <AdminDashboardBottom/>
        </div>
    );
};

export default AdminDashboard;