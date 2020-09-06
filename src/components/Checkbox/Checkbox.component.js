import React from 'react';
import './Checkbox.css';
import TodoStatusMutations from '../../mutations/TodoStatusMutations';

export default class Checkbox extends React.Component {
    handleClick = () => {
        console.log("clicked this", this);
        const {todo: { complete, todo_id } } = this.props;
        console.log("Preparing to run updates with", "todo_id:", todo_id, "complete:", complete)
        TodoStatusMutations(todo_id, !complete, () => console.log("Mutation complete"));
    }

    render() {
        const {todo: { complete, todo_id } } = this.props;
        return (
            <div id="checkbox" onClick={this.handleClick} className="relative rounded-full flex justify-center items-center bg-palette1-glaucous h-8 w-8 mr-2 row-span-2 col-span-1">
                {complete ? "✓" : ""}
            </div>
        )
    }
}