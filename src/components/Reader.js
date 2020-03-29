import React, {Component} from 'react'
import {Group, Card, Header, FormLayout} from "@vkontakte/vkui";
import Data from "../api/Data";
import CheckYourself from "./CheckYourself";
import Useful from "./Useful";

export default class Reader extends Component{
    render() {
        let text = Data.getText(this.props.textId, this.props.languages)
        return(
            <div>
                <Group separator={"show"} header={<Header mode={"secondary"}>{text.title}</Header>}>
                    <FormLayout>
                        {text.paragraphs.map((value, i) => (
                            <Card key={i}>
                                <div style={{height:96}}>
                                    {value}
                                </div>
                            </Card>
                        ))

                        }
                    </FormLayout>
                </Group>
                <Group separator={"show"} header={<Header mode={"secondary"}>Ответь-ка на вопросы</Header>}>
                    <CheckYourself textId={this.props.textId}/>
                </Group>
                <Group separator={"show"} header={<Header mode={"secondary"}>Запомни, если вдруг не знал :)</Header>}>
                    <Useful textId={this.props.textId} languages={this.props.languages}/>

                </Group>
            </div>

        )
    }
}