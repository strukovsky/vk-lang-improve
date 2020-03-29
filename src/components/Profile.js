import React, {Component} from 'react'
import Data from "../api/Data";
import {Button, Checkbox, FormLayout} from "@vkontakte/vkui";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Cookie from "../cookie/Cookie";
let languages = Data.getLanguages();

export default class Profile extends Component{
    constructor(props) {
        super(props);
        let languages = JSON.parse(Cookie.getLanguages());
        let beautiful = Data.getBeautiful(languages);
        this.state = {
            choice: languages,
            beautiful: beautiful,
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(code, isChecked)
    {
        console.log(isChecked);
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

        let beautiful = "";
        this.state.choice.forEach(item => {
            beautiful += Data.getVerbose(item);
            beautiful += " ";
        });

        this.setState({beautiful: beautiful});

        this.forceUpdate();

    }

    render() {
        return(
            <FormLayout>
                <Header>Текущий выбор: {this.state.beautiful}</Header>
                {                languages.map((item, i) => (
                    <Checkbox checked={this.state.choice.indexOf(item.code) !== -1} key={i} onChange={
                        (e) => {this.handleChange(item.code, e.target.checked)}
                    }>{item.verbose}</Checkbox>
                ))
                }
                <Button onClick={() => {
                    Cookie.changeLanguages(this.state.choice);
                    this.props.onLanguagesChanged(this.state.choice);
                }}>Сохранить изменения</Button>
            </FormLayout>
        )
    }
}