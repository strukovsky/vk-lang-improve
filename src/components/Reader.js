import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Group, CardGrid, Card, Header, FormLayout} from "@vkontakte/vkui";
import Data from "../api/Data";

export default class Reader extends Component{
    render() {
        let text = Data.getText(this.props.textId, this.props.languages)
        return(
            <Group separator={"hide"} header={<Header mode={"secondary"}>{text.title}</Header>}>
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
        )
    }
}