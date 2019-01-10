import React, { Component } from 'react';
import './App.css';
import ControlPanel from "./components/ControlPanel/ControlPanel";
import ProgressBar from "./components/ProgressBar/ProgressBar";

class App extends Component {
  state = {
      expenses: [],
      name: null,
      category: null,
      cost: 0,
      total: 0
  };
    componentDidMount() {
        const initList = [
            {name: "Bottle of water", cost: 25, category: "Food"},
            {name: "Milk", cost: 40, category: "Food"},
            {name: "Bread", cost: 15, category: "Food"},
            {name: "Dinner at cafe", cost: 400, category: "Food"}
        ];
        this.setState({expenses: initList, total: 480, category: "Food"});
    };

    addExpense = event => {
      event.preventDefault();
      if (this.state.name && this.state.cost) {
          const expenses = this.state.expenses;
          expenses.push({name: this.state.name, cost: this.state.cost, category: this.state.category});
          let total = this.state.total;
          total += this.state.cost;

          this.setState({expenses, total});
      }
    };

    removeExpense = index => {
        const expenses = this.state.expenses;
        let total = this.state.total;
        total -= expenses[index].cost;
        expenses.splice(index, 1);

        this.setState({expenses, total});
    };

    setExpenseNameHandler = event => this.setState({name: event.target.value});
    setExpenseCostHandler = event => this.setState({cost: parseInt(event.target.value)});
    setExpenseCategoryHandler = event => this.setState({category: event.target.value});

  render() {
    return (
      <div className="App">
        <ControlPanel
            onSubmit={event => this.addExpense(event)}
            nameExpense={this.setExpenseNameHandler}
            costExpense={this.setExpenseCostHandler}
            categoryExpense={this.setExpenseCategoryHandler}
        />
        <div className="Expenses">
            <h2>Expenses List:</h2>
          <ul>
              {this.state.expenses.map((item, index) => {
                  return (
                      <li key={index}>
                          <p>{item.name}</p>
                          <span><i>{item.category}</i><b>{item.cost} KGS</b><button className="btn-remove" onClick={() => this.removeExpense(index)}> Remove </button></span>
                      </li>
                  );
              })}
          </ul>
        </div>
          <p className="Total">Total spent: {this.state.total} KGS</p>
          <ProgressBar data={this.state.expenses} />
      </div>
    );
  }
}

export default App;

