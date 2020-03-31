import React, {Component} from 'react'
import {CardGrid, Card} from "@vkontakte/vkui";
import Data from "../api/Data";

export default class Useful extends Component {
    render() {
        return (
            <CardGrid>
                {Data.getUseful(this.props.textId, this.props.languages).map((item, i) => (
                    <Card style={{height: 96}}className={"usefulCard"} key={i} onClick={() => {
                        document.getElementById("useful" + i).classList.toggle('visited');

                    }}>
                        <div className="flip-container" id={"useful" + i}>
                            <div className="flipper">
                                <div className="front">
                                    {item.word}
                                </div>
                                <div className="back">
                                    {item.translation}
                                </div>
                            </div>
                        </div>

                    </Card>
                ))

                }
            </CardGrid>
        )
    }
}