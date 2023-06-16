import React, { useState } from 'react';
import '../../styles/adminStyles/AdminDashboard.css';
import AdminDashboardSecond from './components/AdminDashboardSecond';
import AdminDashboardGraph from './components/AdminDashboardGraph';
import AdminDashboardBottom from './components/AdminDashboardBottom';
import AdminDashboardOrder from "./components/AdminDashboardOrder";

const AdminDashboard = () => {
    const [isOrderStatusVisible, setOrderStatusVisible] = useState(false);

    const toggleOrderStatus = () => {
        setOrderStatusVisible(!isOrderStatusVisible);
    };

    return (
        <section>
            <h1 className='admindashboard_first'>Camperblic_대시보드</h1>
            <AdminDashboardSecond
                isOrderStatusVisible={isOrderStatusVisible}
                onToggleOrderStatus={toggleOrderStatus}
            />
            {isOrderStatusVisible ?  (
                <AdminDashboardOrder />
            ):(
                <>
                    <AdminDashboardGraph />
                    <AdminDashboardBottom />
                </>
            ) }
        </section>
    );
};

export default AdminDashboard;
