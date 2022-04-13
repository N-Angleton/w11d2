import React from "react";

export class TodoListItem extends React.Component{

    constructor(props){
        super(props);
        this.state = props.todo; 
        this.toggleDone = this.toggleDone.bind(this);
        this.remove = this.remove.bind(this);
    }

    toggleDone(e){
        if(this.state.done){
            this.setState({
                done: false
            }); 
        }else{
            this.setState({
                done: true
            }); 
        }
        this.props.receiveTodo(this.state);
    }

    remove(e){
        this.props.removeTodo(this.state);
    }

    render(){
        
        return (
            <>
                <li>
                    <span>{this.state.title}</span>
                    <span>{this.state.body}</span>
                    <span>{this.state.done.toString()}</span>
                    <br/>
                    <button onClick={this.toggleDone}>Toggle Done</button>
                    <button onClick={this.remove}>Remove Todo</button>
                </li>
            </>
        )
    }
}