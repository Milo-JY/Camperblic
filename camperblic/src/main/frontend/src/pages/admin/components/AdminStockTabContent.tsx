import React from 'react';
import '../../../styles/adminStyles/AdminStockTabContent.css';

const AdminStockTabContent = () => {
    return (
        <section>
            <table className='AdminStock_tabcontenttable'>
                <tr className='AdminStock_contenttableth'>
                    <th>상품 이미지</th>
                    <th>상품코드</th>
                    <th>상품명</th>
                    <th>상품가격</th>
                    <th>재고수량</th>
                    <th>재고수정</th>

                </tr>
                <tr className='AdminStock_contenttabletd'>
                    <td>
                        <img className='AdminStock_contentImg' src='' />
                    </td>
                    <td>A-001</td>
                    <td className='AdminStock_right1'>텐트01</td>
                    <td className='AdminStock_right2'>70000</td>
                    <td className='AdminStock_right3'>70</td>
                    <td className='AdminStock_right4'>
                        <button className='AdminStock_modifyBtn'>수정</button>
                    </td>
                </tr>
            </table>
        </section>
    );
};

export default AdminStockTabContent;