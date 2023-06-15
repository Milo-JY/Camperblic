import React from 'react';
import '../../../styles/adminStyles/AdminDashboardStock.css';

const AdminDashboardStock = () => {
    return (
        <section className='adminstock_main'>
            <div className='adminstock_title'><a href='./adminstock'>재고현황</a></div>
            <div className='adminstock_center'>
                <table className='adminstock_table'>
                    <tr className='adminstock_tableth'>
                        <th className='adminstock_tablecenter'>상품코드</th>
                        <th className='adminstock_tablecenter'>상품이름</th>
                        <th className='adminstock_tablecenter'>재고수량</th>
                    </tr>
                    <tr className='adminstock_tabletd'>
                        <td className='adminstock_tablecenter'>A-001</td>
                        <td className='adminstock_tablecenter'>Tent1</td>
                        <td className='adminstock_tablecenter'>100</td>
                    </tr>
                </table>
            </div>
        </section>
    );
};

export default AdminDashboardStock;