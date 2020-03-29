import React, {Component} from 'react'
import ReactDOM from 'react-dom'

export default class Profile extends Component{
    render() {
        return(
            <button onClick={() => {this.props.changePanel("reader")}}/>
        )
    }
}