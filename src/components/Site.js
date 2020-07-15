import React from 'react';
import './Site.css';

function Site(props) {
    const {name, url, color, img} = props;

    if(color) {
        return (
            <div className="item">
                <div className="frame" style={{backgroundImage: `url(${img})`
                , backgroundSize: 'contain'
                , backgroundColor: color}} onClick={()=>{window.open(url)}}>
                    <h1 className="icon"></h1>
                </div>
                <h2 className="name">{name}</h2>
            </div>
        );
    }
    else {
        return (
            <div className="item">
                <div className="frame" onClick={()=>{window.open(url)}}>
                    <h1 className="icon">{name.substring(0,1)}</h1>
                </div>
                <h2 className="name">{name}</h2>
            </div>
        );
    }
};

export default Site;