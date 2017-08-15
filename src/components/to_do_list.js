import React, { Component } from 'react';
import TodoItem from './to_do_item';

class TodoList extends Component {

    toggleComplete = (nodeId) => {
        this.props.toggleComplete(nodeId)
    }

    removeNode = (nodeId) => {
        this.props.removeNode(nodeId)
    }

    render() {
        const listNodes = this.props.data.map((listItem) =>
			<TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeNode={this.removeNode} toggleComplete={this.toggleComplete} />
		);

        return (
            <ul className="list-group">
				{listNodes}
			</ul>
        );
    }

}

export default TodoList;
