import React, {Component} from 'react'
import {FormLayout, Header, Radio, Snackbar} from "@vkontakte/vkui";
import Data from "../api/Data";

export default class CheckYourself extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions: Data.getQuestions(this.props.textId),
            snackbar: null
        };
        this.handleCheckbox = this.handleCheckbox.bind(this);

    }


    handleCheckbox(answer, correct)
    {
        if(answer === correct)
        {
            this.setState(
                {
                    snackbar: (
                        <Snackbar
                            layout="vertical"
                            onClose={() => this.setState({snackbar: null})}
                        >
                            Правильно
                        </Snackbar>
                    )
                }
            );
        }
        else
        {
            this.setState(
                {
                    snackbar: (
                        <Snackbar
                            layout="vertical"
                            onClose={() => this.setState({snackbar: null})}
                        >
Неправильно
                        </Snackbar>
                    )
                }
            );
        }

    }


    render() {
        return (
            <div>
                {this.state.questions.map((item, i) => (
                    <FormLayout key={i}>
                        {/*<FormStatus header={"Ответ неправильный!"} mode={"default"}/>*/}
                        <Header>{item.title}</Header>
                        <Radio name="radio" onClick={()=>{
                            this.handleCheckbox(0, item.correct)
                        }}
                        >{item.variants[0]}</Radio>
                        <Radio name="radio" onClick={() => {
                            this.handleCheckbox(1, item.correct)
                        }}>{item.variants[1]}</Radio>
                        <Radio name="radio" onClick={() =>{
                            this.handleCheckbox(2, item.correct)
                        }}>{item.variants[2]}</Radio>
                    </FormLayout>
                ))}
                {this.state.snackbar}
            </div>

        );
    }
}