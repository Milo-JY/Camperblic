import React from 'react';
import '../../../styles/adminStyles/AdminDashboardStock.css';

const AdminDashboardStock = () => {
    return (
        <div className='adminstock_main'>
            <div>재고관리</div>
            <table>
                <th>상품코드</th>
                <th>상품이름</th>
                <th>재고수량</th>
            </table>
        </div>
    );
};

export default AdminDashboardStock;