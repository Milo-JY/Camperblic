import React from 'react';
import '../../../styles/adminStyles/AdminMemberList.css';

const AdminMemberList = () => {
    return (
        <div className='homeWidgets'>
            <ul className='widgetlist'>
                <li className='widgetlistmember'>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/01/16/22/15/waterfalls-1144130__340.jpg"
                        className='widgetimg'
                    />
                    <div className='widgetmember'>
                        <div className='widgetmemberid'>id:</div>
                        <div className='widgetmembername'>이름:</div>
                    </div>
                    <button className='widgetbtn'>
                        detail
                    </button>
                </li>
                <li className='widgetlistmember'>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/01/16/22/15/waterfalls-1144130__340.jpg"
                        className='widgetimg'
                    />
                    <div className='widgetmember'>
                        <div className='widgetmemberid'>id:</div>
                        <div className='widgetmembername'>이름:</div>
                    </div>
                    <button className='widgetbtn'>
                        detail
                    </button>
                </li>
                <li className='widgetlistmember'>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/01/16/22/15/waterfalls-1144130__340.jpg"
                        className='widgetimg'
                    />
                    <div className='widgetmember'>
                        <div className='widgetmemberid'>id:</div>
                        <div className='widgetmembername'>이름:</div>
                    </div>
                    <button className='widgetbtn'>
                        detail
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AdminMemberList;