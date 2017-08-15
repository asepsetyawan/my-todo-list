import React, { Component } from 'react';

class TodoItem extends Component {

    toggleComplete = () => {
        this.props.toggleComplete(this.props.nodeId);
    }

    removeNode = () => {
        this.props.removeNode(this.props.nodeId);
    }

    render() {

        let classes = 'list-group-item clearfix';

		if (this.props.complete === 'true') {
			classes = classes + ' list-group-item-success';
		}

        return (
            <li className={classes}>
				{this.props.task}
				<div className="pull-right" role="group">
					<button type="button" className="btn btn-xs btn-success img-circle" onClick={this.toggleComplete}>&#x2713;
                    </button> <button type="button" className="btn btn-xs btn-danger img-circle" onClick={this.removeNode}>&#xff38;</button>
				</div>
			</li>
        );
    }

}

export default TodoItem;
