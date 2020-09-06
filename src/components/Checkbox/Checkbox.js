import React from 'react';
import './Checkbox.css';

export default class Checkbox extends React.Component {
    handleClick() {
        
    }
    render() {
        const { complete } = this.props;
        return (
            <div id="checkbox" className="relative rounded-full flex justify-center items-center bg-palette1-glaucous h-8 w-8 mr-2 row-span-2 col-span-1">
                    {complete ? "✓" : ""}
            </div>
        )
    }
}