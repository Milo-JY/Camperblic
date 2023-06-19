import { useState } from "react";
import '../../../styles/adminStyles/AdminStockTab.css';
import AdminStockTabContent from "./AdminStockTabContent";

export default function AdminStockTab() {
    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index:any)=>{
        setActiveIndex(index);
    };

    const tabContArr=[
        {
            tabTitle:(
                <li className=  {activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}> 전체상품 </li>
            ),
            tabCont:(
                <AdminStockTabContent/>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}> 텐트/타프 </li>
            ),
            tabCont:(
                <AdminStockTabContent/>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}> 테이블/체어 </li>
            ),
            tabCont:(
                <AdminStockTabContent/>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===3 ? "is-active" : ""} onClick={()=>tabClickHandler(3)}> 침낭/매트 </li>
            ),
            tabCont:(
                <AdminStockTabContent/>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===4 ? "is-active" : ""} onClick={()=>tabClickHandler(4)}> 취사용품 </li>
            ),
            tabCont:(
                <AdminStockTabContent/>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===5 ? "is-active" : ""} onClick={()=>tabClickHandler(5)}> 소품 </li>
            ),
            tabCont:(
                <AdminStockTabContent/>
            )
        },
    ];

    return (
        <section className="adminStockTabContainer">
            <ul className="tabs is-boxed">
                {tabContArr.map((section, index)=>{
                    return section.tabTitle
                })}
            </ul>
            <div className='tabs_content'>
                {tabContArr[activeIndex].tabCont}
            </div>


        </section>
    );
}