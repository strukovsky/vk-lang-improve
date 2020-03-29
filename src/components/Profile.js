import React, {Component} from 'react'
import Data from "../api/Data";
import {Button, Checkbox, FormLayout} from "@vkontakte/vkui";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
let languages = Data.getLanguages();

export default class Profile extends Component{
    constructor(props) {
        super(props);
        this.state = {
            choice: [],
            beautiful: "Русский Французский"
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(code, isChecked)
    {
        if(isChecked)
        {

            let changedChoice = this.state.choice;
            changedChoice.push(code);

            this.setState({choice: changedChoice})

        }
        else
        {
            let changedChoice = []
            this.state.choice.forEach(item => {
                if(item!== code)
                changedChoice.push(item)
            });
            this.setState((state, props) => ({
                choice: changedChoice
            }));
        }

        let beautiful = ""
        this.state.choice.forEach(item => {
            beautiful += Data.getVerbose(item);
            beautiful += " "
        });

        this.setState({beautiful: beautiful});



    }

    render() {
        return(
            <FormLayout>
                <Header>Текущий выбор: {this.state.beautiful}</Header>
                {                languages.map((item, i) => (
                    <Checkbox key={i} onClick={(e) => {this.handleChange(item.code, e.target.checked)}}>{item.verbose}</Checkbox>
                ))
                }
                <Button onClick={() => {
                    this.props.onLanguagesChanged(this.state.choice)
                }}>Сохранить изменения</Button>
            </FormLayout>
        )
    }
}