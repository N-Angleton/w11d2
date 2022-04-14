import React from "react";


export class TodoForm extends React.Component { 

    constructor(props){
        super(props);
        this.state = {
            id: new Date().getTime(),
            title: '',
            body: '',
            done: false
        };
        this.updateDone = this.updateDone.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        // debugger
        e.preventDefault();
        this.props.receiveTodo(this.state);
        let varia = this.state.done;
        this.setState({
            id: new Date().getTime(),
            title: '',
            body: '',
            done: false
        });
    }

    updateDone(e){
        if (e.target.value === "true") {
            this.setState({ done: true });
        }
        else {
            this.setState({done: false});
        }
    }
    
    updateBody(e){
        this.setState({ body: e.target.value });
    }

    updateTitle(e){
        this.setState({ title: e.target.value });
    }

    render(){
        return (
            <form >
                <label>Title: 
                    <input type="text" onChange={this.updateTitle} value={this.state.title}/>
                </label>
                <br/>
                <label>Body: 
                    <input type="text" onChange={this.updateBody} value={this.state.body}/>
                </label>
                <br/>
                <label>Done:
                    <label>True: 
                        <input type="radio" onChange={this.updateDone} name="done" value="true" checked={this.state.done} />
                    </label>
                    <label>False: 
                        <input type="radio" onChange={this.updateDone} name="done" value="false" checked={!this.state.done}/>
                    </label>
                </label>
                <br/>
                <button onClick={this.handleClick}>Submit</button>
            </form>
        )
    }

}