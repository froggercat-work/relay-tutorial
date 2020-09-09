import React from 'react';
// import './Checkbox.css';
import TodoStatusMutations from '../../mutations/TodoStatusMutations';

export default class Checkbox extends React.Component {
    handleClick = () => {
        console.log("clicked this", this);
        const {todo: { complete, todo_id } } = this.props;
        console.log("Preparing to run updates with", "todo_id:", todo_id, "complete:", complete)
        TodoStatusMutations(todo_id, !complete, () => {});
    }

    render() {
        const {todo: { complete } } = this.props;
        return (
            <div id="checkbox" onClick={this.handleClick} 
                className="rounded-full flex justify-center items-center bg-palette1-glaucous h-8 w-8">
                {complete ? "✓" : ""}
            </div>
        )
    }
}