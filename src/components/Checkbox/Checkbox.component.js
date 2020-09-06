import React from 'react';
import './Checkbox.css';

export default class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { ...this.props };
    }

    handleClick = () => {
        console.log("clicked this", this);
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