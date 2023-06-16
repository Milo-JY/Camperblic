import React, { useState } from 'react';
import '../../../styles/adminStyles/AdminDashboardSecond.css';
import AdminDashboardSecondTime from "./AdminDashboardSecondTime";
import {Link} from "react-router-dom";

interface AdminDashboardSecondProps {
    isOrderStatusVisible: boolean;
    onToggleOrderStatus: () => void;
}

const AdminDashboardSecond: React.FC<AdminDashboardSecondProps> = ({ isOrderStatusVisible, onToggleOrderStatus }) => {
    const [buttonText, setButtonText] = useState("주문현황");

    const handleOrderStatusClick = () => {
        onToggleOrderStatus();
        setButtonText(prevText => (prevText === "주문현황" ? "전체요약" : "주문현황"));
    };

    return (
        <section className='second_div'>
            <Link className='second_member' to='/adminmember'>회원관리</Link>
            <div>
                <div className='admindashboard_test'>
                    <button className='adminsecond_btn' onClick={handleOrderStatusClick}>{buttonText}</button>
                </div>
            </div>
            {isOrderStatusVisible && <AdminDashboardSecondTime />}
        </section>
    );
};

export default AdminDashboardSecond;
