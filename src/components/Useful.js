import React, {Component} from 'react'
import {CardGrid, Card} from "@vkontakte/vkui";
import Data from "../api/Data";

export default class Useful extends Component
{
    render() {
        return (
            <CardGrid>
                {Data.getUseful(this.props.textId, this.props.languages).map((item, i)=>(
                    <Card className={"usefulCard"} key={i} onClick={() => {
                        document.getElementById(i).innerText = item.translation;
                    }}>
                        <div style={{height: 58}} id={i}>
                            {item.word}
                        </div>
                    </Card>
                ))

                }
            </CardGrid>
        )
    }
}