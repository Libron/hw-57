import React from 'react';
import './ProgressBar.css';

const ProgressBar = props => {
    const category = props.data.reduce((acc, item) => {
        if (item.category in acc) {
            acc[item.category] += item.cost;
        } else {
            acc[item.category] = item.cost;
        }
        return acc;
    }, {});


    return (
        <React.Fragment>
            <h3>Progress Bar:</h3>
            <div className="ProgressBar">
                {Object.keys(category).reduce((acc, key) => {
                    let barWidth = category[key] * 100 / props.total;
                    acc.push(<div key={key} className={key} style={{width: barWidth + '%'}}> {category[key] + ' KGS'}</div>);
                    return acc;
                }, [])}
            </div>
            <ul className="ProgressBar-Info">
                {Object.keys(category).map(key => <li className={key} key={key}>{key}</li>)}
            </ul>
        </React.Fragment>
    );
};

export default ProgressBar;