import React, {Component} from 'react'
import {Group, Card, Header, FormLayout, Cell} from "@vkontakte/vkui";
import Data from "../api/Data";
import CheckYourself from "./CheckYourself";
import Useful from "./Useful";

export default class Reader extends Component{
    render() {
        let text = Data.getText(this.props.textId, this.props.languages);
        let result = text.paragraphs.map((item, i) => {
            if(item.paragraph !== item.translation)
            return (
            <Cell key={i} onClick={() => {
                document.getElementById("reader" + i).classList.toggle('visited');

            }}>
                <div className="flip-container" id={"reader" + i}>
                    <div className="flipper">
                        <div className="front">
                            {item.paragraph}
                        </div>
                        <div className="back">
                            {item.translation}
                        </div>
                    </div>
                </div>

            </Cell>
        );
            else return (<Cell key={i}>{item.paragraph}</Cell>);
        });

        console.log(result);
        return(
            <div>
                <Group separator={"show"} header={<Header mode={"secondary"}>{text.title} (Нажми на абзац, чтобы увидеть его перевод)</Header>}>
                    <FormLayout>
                        {result}
                    </FormLayout>
                </Group>
                <CheckYourself textId={this.props.textId}/>

                <Group separator={"show"} header={<Header mode={"secondary"}>Запомни, если вдруг не знал :)       нажми на карточки</Header>}>
                    <Useful textId={this.props.textId} languages={this.props.languages}/>

                </Group>
            </div>

        )
    }
}