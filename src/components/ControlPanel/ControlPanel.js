import React from 'react';

const ControlPanel = props => {
    return (
        <form className="Controls" onSubmit={props.onSubmit}>
            <input type="text" className="Item-name" placeholder="Item name" />
            <input type="text" className="Item-cost" placeholder="Cost"/>
            <label htmlFor="Item-cost">KGS</label>
            <button type="submit" className="btn-submit">Add item</button>
        </form>
    );
};

export default ControlPanel;