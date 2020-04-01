import React, {Component} from 'react'
import {FormLayout, Header, Radio, Snackbar, Avatar, Group} from "@vkontakte/vkui";
import Icon16Done from "@vkontakte/icons/dist/16/done"
import Icon16Cancel from "@vkontakte/icons/dist/16/cancel"
import Data from "../api/Data";

/*
Of course, here i should use delete questions[id] and manage right answer deleting question without any DOM, using only
react based solutions. But this solution leads to checking first radiobox of the next question. So, here we go
 */
export default class CheckYourself extends Component {
    constructor(props) {
        super(props);
        let questions = Data.getQuestions(this.props.textId);
        let questionsCount = questions.length;
        this.state = {
            questions: questions,
            snackbar: null,
            questionsCount: questionsCount
        };
        this.handleCheckbox = this.handleCheckbox.bind(this);

    }


    static orangeBackground = {
        backgroundImage: 'linear-gradient(135deg, #ff553d, #ff3300)'
    };

    static blueBackground = {
        backgroundColor: 'var(--accent)'
    };

    handleCheckbox(title, answer, correct)
    {
        if(answer === correct)
        {
            document.getElementById(title).remove();
            let currentCount = this.state.questionsCount;
            currentCount--;
            this.setState(
                {
                    snackbar: (
                        <Snackbar
                            layout="vertical"
                            before={<Avatar size={24} style={CheckYourself.blueBackground}>
                                <Icon16Done fill="#fff" width={14} height={14} />
                            </Avatar>}
/*
                            duration={1100}
*/
                            onClose={() => this.setState({snackbar: null})}
                        >
                            Правильно
                        </Snackbar>
                    ),
                    questionsCount: currentCount
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
                            before={<Avatar size={24} style={CheckYourself.orangeBackground}>
                                <Icon16Cancel fill="#fff" width={14} height={14} />
                            </Avatar>}
/*
                            duration={1100}
*/
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
        let thereAreQuestions = (
            <Group separator={"show"} header={<Header mode={"secondary"}>Ответь-ка на вопросы</Header>}>
                {this.state.questions.map((item, i) => (
                    <FormLayout key={i} id={i}>
                        {/*<FormStatus header={"Ответ неправильный!"} mode={"default"}/>*/}
                        <Header>{item.title}</Header>
                        <Radio name="radio"  onClick={()=>{
                            this.handleCheckbox(i, 0, item.correct)
                        }}
                        >{item.variants[0]}</Radio>
                        <Radio name="radio"  onClick={() => {
                            this.handleCheckbox(i, 1, item.correct)
                        }}>{item.variants[1]}</Radio>
                        <Radio name="radio" onClick={() =>{
                            this.handleCheckbox(i, 2, item.correct)
                        }}>{item.variants[2]}</Radio>
                    </FormLayout>
                ))}
                {this.state.snackbar}
            </Group>
        );

        if(this.state.questionsCount > 0)
        return thereAreQuestions;
        else return <div/>
    }
}