import React, {Component} from 'react'
import {CardGrid, Card} from "@vkontakte/vkui";
import Data from "../api/Data";

export default class Useful extends Component
{
    render() {
        return (
            <CardGrid>
                {Data.getUseful(this.props.textId, this.props.languages).map((item, i)=>(
                    <Card key={i}>
                        <div style={{height: 96}}>
                            {item}
                        </div>
                    </Card>
                ))

                }
            </CardGrid>
        )
    }
}