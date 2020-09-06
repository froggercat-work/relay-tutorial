import React from 'react';
import './Todo.css';
import Checkbox from '../Checkbox';

export default class Todo extends React.Component {
    render() {
        const { todo: { complete, text, user } } = this.props;
        return (
            <div className="bg-palette1-darkJungleGreen h-16 border-0 border-palette1-darkSalmon grid mb-3 rounded-bl-full items-center justify-start rounded-r-full pl-2 grid-rows-2 grid-cols-24">
                <Checkbox complete={complete}/>
                <div className="row-span-1 col-start-2 pl-1 font-hairline text-xl text-white">
                    {text}
                </div>
                <div className="row-start-2 row-span-1 col-start-2 pl-1 font-hairline text-xs text-white">
                    {user.name}
                </div>
            </div>
        );
    }
}