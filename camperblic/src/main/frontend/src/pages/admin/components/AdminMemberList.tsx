import React from 'react';
import '../../../styles/adminStyles/AdminMemberList.css';

const AdminMemberList = () => {
    return (
        <section className='homeWidgets'>
            <table className='widgettable'>
                <thead>
                <tr className='widgetmember1'>
                    <th className='widgetmemberid'>id</th>
                    <th className='widgetmembername'>이름</th>
                    <th className='widgetmemberphone'>전화번호</th>
                    <th className='widgetmemberemail'>이메일</th>
                    <th className='widgetmemberdetail'>상세보기</th>
                </tr>
                </thead>
                <tbody>
                <tr className='widgetmember2'>
                    <td className='widgetmemberid2'>minwoo405</td>
                    <td className='widgetmembername2'>양민우</td>
                    <td className='widgetmemberphone2'>010-1234-1234</td>
                    <td className='widgetmemberemail2'>gsjlg@gmail.com</td>
                    <td className='widgetmemberdetail2'>
                        <button className='widgetbtn'>detail</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </section>
    );
};

export default AdminMemberList;
