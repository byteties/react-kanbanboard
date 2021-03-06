import React, { Component } from 'react';
import './App.css';

import Controls from './components/Controls';
import Board from './components/Board';

const NUM_STAGES = 4;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
          { name: 'task 0', stage: 0 },
          { name: 'task 1', stage: 0 },
          { name: 'task 2', stage: 0 },
          { name: 'task 3', stage: 0 },
          { name: 'task 4', stage: 1 },
          { name: 'task 5', stage: 1 },
          { name: 'task 6', stage: 1 },
          { name: 'task 7', stage: 2 },
          { name: 'task 8', stage: 2 },
          { name: 'task 9', stage: 3 },
      ],
      selectedTask:{ name:'' }
    };
    this.stagesNames = ['Backlog', 'To Do', 'Ongoing', 'Done'];
    this.handleSeleted = this.handleSeleted.bind(this);
    this.forward = this.forward.bind(this);
    this.back = this.back.bind(this)
  }

  handleSeleted(value){
    this.setState({
      selectedTask: value
    })
  }

  forward(){
    const { tasks,selectedTask } = this.state
    const task = selectedTask
    const index = tasks.findIndex((value)=> value.name === task.name)
    const temp = tasks.find((value)=> value.name === task.name)
    const newTask = {
      name: temp.name,
      stage: temp.stage <3 ?temp.stage +1 : temp.stage,
    }
    tasks.splice(index,1)
    tasks.push(newTask)
    this.setState({
      tasks: tasks
    })
  }

  back(){
    const { tasks,selectedTask } = this.state
    const task = selectedTask
    const index = tasks.findIndex((value)=> value.name === task.name)
    const temp = tasks.find((value)=> value.name === task.name)
    const newTask = {
      name: temp.name,
      stage: temp.stage >0 ?temp.stage -1 : temp.stage,
    }
    tasks.splice(index,1)
    tasks.push(newTask)
    this.setState({
      tasks: tasks
    })
  }

  render() {
    const { tasks } = this.state;
    let stagesTasks = [];
    for (let i = 0; i < NUM_STAGES; ++i) {
      stagesTasks.push([]);
    }
    for (let task of tasks) {
      const stageId = task.stage;
      stagesTasks[stageId].push(task);
    }
    console.log(this.state.selectedTask)
    return (
      <div className="App">
        <div>
        <Controls forward={this.forward} back={this.back}>{this.state.selectedTask.name}</Controls>
        <Board
          stagesTasks={stagesTasks}
          stagesNames={this.stagesNames}
          onSelect={this.handleSeleted}
        />
        </div>
      </div>
    );
  }
}

export default App;
