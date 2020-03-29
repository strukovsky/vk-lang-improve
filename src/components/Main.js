import React, { Component } from 'react';
import {View, Epic, Tabbar, TabbarItem, Panel, PanelHeader} from '@vkontakte/vkui'
import Reader from "./Reader";
import '@vkontakte/vkui/dist/vkui.css'
import Library from "./Library";
import Profile from "./Profile";
import Cookie from "../cookie/Cookie";
export default class Main extends Component {
    constructor(props) {
        super(props);
        let languages = JSON.parse(Cookie.getLanguages());
        let activeStory = "library";
        if(!languages){
            activeStory = "profile";
            languages = ["ru", "fr"]
        }
        this.state = {
            activeStory: activeStory,
            textId: 0,
            languages: languages
        };
        this.onStoryChange = this.onStoryChange.bind(this);
        this.onTextSelected = this.onTextSelected.bind(this);
        this.onLanguagesChanged =  this.onLanguagesChanged.bind(this);
    }

    onStoryChange(e)
    {
        this.setState({activeStory: e.currentTarget.dataset.story});

    }

    onTextSelected(id)
    {
        this.setState({activeStory: 'reader', textId: id});
    }

    onLanguagesChanged(newLanguages)
    {
        this.setState({activeStory: 'library', languages :newLanguages});
    }



    render() {
        return (

            <Epic activeStory={this.state.activeStory}
                  tabbar={
                      <Tabbar>
                          <TabbarItem
                              onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'reader'}
                              data-story={"reader"}
                              text={"Читаем"}
                          />
                          <TabbarItem
                              onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'library'}
                              data-story={"library"}
                              text={"Библиотека"}
                          />
                          <TabbarItem
                              onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'profile'}
                              data-story={"profile"}
                              text={"Профиль"}
                          />
                      </Tabbar>
                  }
            >
                <View id={"reader"} activePanel={"reader"}>
                    <Panel id={"reader"}>
                        <PanelHeader>Читаем</PanelHeader>
                        <Reader textId={this.state.textId} languages={this.state.languages}/>
                    </Panel>
                </View>
                <View id={"library"} activePanel={"library"}>
                    <Panel id={"library"}>

                        <PanelHeader>Библиотека</PanelHeader>

                        <Library onTextSelected={this.onTextSelected}/>
                    </Panel>
                </View>
                <View id={"profile"} activePanel={"profile"}>
                    <Panel id={"profile"}>

                        <PanelHeader>Профиль</PanelHeader>

                        <Profile onLanguagesChanged={this.onLanguagesChanged}/>
                    </Panel>
                </View>
            </Epic>
        );
    }
}
