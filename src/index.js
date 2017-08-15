import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './components/to_do_form';
import TodoList from './components/to_do_list';

const API_KEY = 'AIzaSyCIv5qCEy5-Qaq5TW30105E5SuUf4Ux3Hs';

class App extends Component{
  constructor() {
    super();

    this.state = {
      data: [
          {"id":"00001","task":"Wake up","complete":"false"},
          {"id":"00002","task":"Eat breakfast","complete":"false"},
          {"id":"00003","task":"Go to work","complete":"false"}
      ]
    }
  }

  handleToggleComplete = (nodeId) => {
      let data = this.state.data;
      for (let i in data) {
          if (data[i].id == nodeId) {
              data[i].complete = data[i].complete === 'true' ? 'false' : 'true';
              break;
          }
      }
      this.setState({data});
  }

  handleNodeRemoval = (nodeId) => {
      let data = this.state.data;
      data = data.filter((el) => {
          return el.id !== nodeId;
      });
      this.setState({data});
  }

  generateId = () => {
      return Math.floor(Math.random()*90000) + 10000;
  }

  handleSubmit = (task) => {
      let data = this.state.data;
      let id = this.generateId().toString();
      let complete = 'false';
      data = data.concat([{id, task, complete}]);
      this.setState({data});
  }

  render() {
    return(
        <div className="well">
            <h1 className="vert-offset-top-0">To do:</h1>
            <TodoList data={this.state.data} removeNode={this.handleNodeRemoval} toggleComplete={this.handleToggleComplete} />
            <TodoForm onTaskSubmit={this.handleSubmit} />
        </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#todoBox'));
