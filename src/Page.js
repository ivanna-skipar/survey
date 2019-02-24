import React, { Component } from 'react';
import Questions from "./Questions";

class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    handleNameSubmit(event){
        var name = this.refs.name.value;
        this.setState({name:name}, function(){
          console.log(this.state);
        });
        event.preventDefault();
      }

    render() {
        if(this.state.name){
            return(
                <div>
                <h2>Welcome {this.state.name}</h2>
                <Questions />
                </div>
            )
        } else{
        return (
            <span>
                <h2>Please enter your name to begin the survey</h2>
                <form id="input" onSubmit={this.handleNameSubmit.bind(this)}>
                    <input type="text" placeholder="Enter Name..." ref="name" />
                </form>
            </span>
        )
        }
    }

}

export default Page;