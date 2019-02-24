import React, { Component } from 'react';

class Questions extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionsList: [
                {
                    id: 1,
                    label: 'What is your favorite operating system?',
                    name: 'q1',
                    value1: 'Windows',
                    value2: 'OSX',
                    value3: 'Linux',
                    value4: 'Solaris',
                    value5: 'Other'
                }, {
                    id: 2,
                    label: 'What is your favorite brand of TV?',
                    name: 'q2',
                    value1: 'Sony',
                    value2: 'Samsung',
                    value3: 'Panasonic',
                    value4: 'Vizio',
                    value5: 'Other'
                }, {
                    id: 3,
                    label: 'What is your favorite Smartphone Brand?',
                    name: 'q3',
                    value1: 'Apple',
                    value2: 'Samsung',
                    value3: 'Nexus',
                    value4: 'Blackberry',
                    value5: 'Other'
                }, {
                    id: 4,
                    label: 'What is your favorite CPU Brand?',
                    name: 'q4',
                    value1: 'Intel',
                    value2: 'AMD',
                    value3: 'Nvidia',
                    value4: 'ARM',
                    value5: 'Other'
                }
            ],
            answers: {
                q1: '',
                q2: '',
                q3: '',
                q4: ''
            },
        }
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
    }

    handleQuestionSubmit(event) {
        console.log(this.state.questionsList[0].label + " --> " + this.state.answers.q1)
        console.log(this.state.questionsList[1].label + " --> " + this.state.answers.q2)
        console.log(this.state.questionsList[2].label + " --> " + this.state.answers.q3)
        console.log(this.state.questionsList[3].label + " --> " + this.state.answers.q4)
        document.getElementById('form').reset();
    }

    handleQuestionChange(event) {
        var answers = this.state.answers;
        if (event.target.name === 'q1') {
            answers.q1 = event.target.value;
        } else if (event.target.name === 'q2') {
            answers.q2 = event.target.value;
        } else if (event.target.name === 'q3') {
            answers.q3 = event.target.value;
        } else if (event.target.name === 'q4') {
            answers.q4 = event.target.value;
        }
    }


    render() {
        return (
            <div>
                <h3>Survey Questions</h3>
                <form id='form'>
                    {
                        this.state.questionsList.map((el) => {
                            return (
                                <div>
                                    <label>{el.label}</label><br />
                                    <input type="radio" name={el.name} value={el.value1} onChange={this.handleQuestionChange} />{el.value1}<br />
                                    <input type="radio" name={el.name} value={el.value2} onChange={this.handleQuestionChange} />{el.value2}<br />
                                    <input type="radio" name={el.name} value={el.value3} onChange={this.handleQuestionChange} />{el.value3}<br />
                                    <input type="radio" name={el.name} value={el.value4} onChange={this.handleQuestionChange} />{el.value4}<br />
                                    <input type="radio" name={el.name} value={el.value5} onChange={this.handleQuestionChange} />{el.value5}<br />
                                </div>
                            )
                        })
                    }
                    <input className="submit" type="button" value='Submit' onClick={this.handleQuestionSubmit.bind(this)} />
                </form>
            </div>
        )
    }
}

export default Questions;