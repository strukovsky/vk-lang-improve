import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Group, CardGrid, Card, Header} from "@vkontakte/vkui";
import Data from "../api/Data";

export default class Reader extends Component{
    render() {
        let text = Data.getText(this.props.textId, this.props.languages)
        return(
            <Group separator={"hide"} header={<Header mode={"secondary"}>{text.title}</Header>}>
                <CardGrid>
                    {text.paragraphs.map((value, i) => (
                        <Card>
                            <div style={{height:96}}>
                                {value}
                            </div>
                        </Card>
                    ))

                    }
                </CardGrid>
            </Group>
        )
    }
}