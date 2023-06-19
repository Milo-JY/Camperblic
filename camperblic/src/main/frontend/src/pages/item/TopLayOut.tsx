import React from 'react';
import "../../styles/itemStyles/topLayOut.css"
interface TopFontProps {
    children: React.ReactNode;
}

const TopLayOut: React.FC<TopFontProps> = ({ children }) => {
    return (
        <div className="topFont">
            <h1 className="topText">{children}</h1>
        </div>
    );
};

export default TopLayOut;
