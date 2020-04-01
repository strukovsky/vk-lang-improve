import React, {Component} from 'react'
import Data from "../api/Data";
import {Button, Checkbox, FormLayout, FormStatus} from "@vkontakte/vkui";
import Header from "@vkontakte/vkui/dist/components/Header/Header";
import Cookie from "../cookie/Cookie";
let languages = Data.getLanguages();

export default class Profile extends Component{
    constructor(props) {
        super(props);

        let languages = ["ru", "fr"];
        try {
            languages = JSON.parse(Cookie.getLanguages());

        }
        catch (e) {
            console.log(e);

        }
        let beautiful = Data.getBeautiful(languages);
        this.state = {
            choice: languages,
            beautiful: beautiful,
        };
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(code, isChecked)
    {
        let changedChoice = [];
        if(isChecked)
        {

            changedChoice = this.state.choice;
            changedChoice.push(code);

            this.setState({choice: changedChoice})

        }
        else
        {

            this.state.choice.forEach(item => {
                if(item !== code)
                {
                    changedChoice.push(item);
                }
            });
            this.setState({
                choice: changedChoice
            });
        }

        let beautiful = "Сейчас ты читаешь на ";
        if(changedChoice.length === 0)
        {
            this.setState({beautiful: "Ничего не выбрано ("});
            return;
        }
        changedChoice.forEach((item, i) => {
            beautiful += Data.getVerbose(item);
            if(i < changedChoice.length-1)
            beautiful += ", ";
        });

        this.setState({beautiful: beautiful});

    }

    render() {
        return(
            <FormLayout >
                <Header>{this.state.beautiful}</Header>
                {                languages.map((item, i) => (
                    <Checkbox checked={this.state.choice.indexOf(item.code) !== -1} key={i} onChange={
                        (e) => {this.handleChange(item.code, e.target.checked)}
                    }>{item.verbose}</Checkbox>
                ))
                }
                <Button onClick={() => {
                    if(this.state.choice.length === 0 || (this.state.choice.length===1 && this.state.choice[0] === 'ru'))
                    {
                        document.getElementById("status").style.visibility = "visible";
                    }
                    else
                    {
                        document.getElementById("status").style.visibility = "hidden";
                        if(!Cookie.isAuth())
                        Cookie.setAuth();
                        Cookie.changeLanguages(this.state.choice);
                        this.props.onLanguagesChanged(this.state.choice);
                    }
                }}>Сохранить изменения</Button>
                <FormStatus mode="error" id={"status"} style={{visibility: "hidden"}}>Может стоит выбрать какие-нибудь иностранные языки? Хотяб один :)</FormStatus>

            </FormLayout>
        )
    }
}