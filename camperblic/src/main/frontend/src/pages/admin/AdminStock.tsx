import React from 'react';
import AdminStockTab from "./components/AdminStockTab";
import '../../styles/adminStyles/AdminStock.css';

const AdminStock = () => {
    return (
        <section className='adminStock_container'>
            <h1 className='adminStock_title'>재고관리</h1>
            <AdminStockTab/>
        </section>
    );
};

export default AdminStock;