import React from 'react';
// import './Checkbox.css';
import {TodoStatusMutation} from './Checkbox.mutations';

export default class Checkbox extends React.Component {
    handleClick = () => {
        console.log("clicked this", this);
        // this.props.todo.complete = !this.props.todo.complete;
        console.log("preparing update to", this.props);
        let update = {
            ...this.props,
            ...{
                todo: {
                    ...this.props.todo,
                    complete: !this.props.todo.complete
                }
            }
        }
        TodoStatusMutation(update, () => {});
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