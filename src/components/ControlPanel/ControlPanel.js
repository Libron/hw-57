import React from 'react';

const ControlPanel = () => {
    return (
        <form className="Controls">
            <input type="text" className="Item-name" />
            <input type="text" className="Item-cost" />
            <button type="submit" className="btn-submit">Add item</button>
        </form>
    );
};

export default ControlPanel;