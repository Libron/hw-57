import React, { Component } from 'react';
import './App.css';
import ControlPanel from "./components/ControlPanel/ControlPanel";

class App extends Component {
  state = {
    expenses: [],
      name: null,
      cost: 0,
    total: 0
  };

    addExpense = event => {
      event.preventDefault();
      if (this.state.name && this.state.cost) {
          const expenses = this.state.expenses;
          expenses.push({name: this.state.name, cost: this.state.cost});
          this.setState(expenses);
      }
    };

    setExpenseNameHandler = event => {
        this.setState({name: event.target.value});
    };

    setExpenseCostHandler = event => {
        this.setState({cost: parseInt(event.target.value)});
    };

  render() {
    return (
      <div className="App">
        <ControlPanel
            onSubmit={event => this.addExpense(event)}
            nameExpense={this.setExpenseNameHandler}
            costExpense={this.setExpenseCostHandler}
        />
        <div className="Expenses">
          <ul>
              {this.state.expenses.map((item, index) => {
                  return (<li key={index}>{item.name}</li>);
              })}
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
            <li>Milk</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
