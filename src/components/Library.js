import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {CardGrid, Card} from "@vkontakte/vkui";
import Data from '../api/Data.js'


let list =  Data.getTexts();
let sizes = ["l", "m", "s"];

export default class Library extends Component{
    constructor(props) {
        super(props);

    }


    render() {
        return(
            <CardGrid>
                {
                    list.map((item, i) => (
                            <Card size={sizes[Math.random() % 3]} onClick={() => {
                                this.props.onTextSelected(i)
                            }}>
                                <div style={{height: 96}}>
                                    {item}
                                </div>
                            </Card>
                        )


                    )
                }
            </CardGrid>
        )
    }
}