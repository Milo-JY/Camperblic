import React from 'react';
import '../../../styles/adminStyles/AdminDashboardOrder.css';

const AdminDashboardOrder = () => {
    return (
        <section className='admindashboard_container'>
            <div className='admindashboard_orderTest'>
                <table>
                    <tr>
                        <th>주문자id</th>
                        <th>주문자성명</th>
                        <th>주문상품</th>
                        <th>총가격(원)</th>
                        <th>주문시간</th>
                        <th>배송상태</th>
                        <th>주문취소하기</th>
                    </tr>
                    <tr>
                        <td>minwoo405</td>
                        <td>홍길동</td>
                        <td>텐트001</td>
                        <td>80000</td>
                        <td>23.5.5.16:42</td>
                        <td>배송중</td>
                        <td>
                            <button>주문취소</button>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
    );
};

export default AdminDashboardOrder;