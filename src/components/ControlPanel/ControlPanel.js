import React from 'react';

const ControlPanel = props => {
    return (
        <form className="Controls" onSubmit={props.onSubmit}>
            <input type="text" className="Item-name" onChange={props.nameExpense} placeholder="Item name" />
            <input type="text" className="Item-cost" onChange={props.costExpense} placeholder="Cost"/>
            <label htmlFor="Item-cost">KGS</label>
            <select name="category" id="category" onChange={props.categoryExpense}>
                <option value="Food">Food</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Car">Car</option>
            </select>
            <button type="submit" className="btn-submit">Add item</button>
        </form>
    );
};

export default ControlPanel;