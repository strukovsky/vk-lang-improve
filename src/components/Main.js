import React, { Component } from 'react';
import {View, Epic, Tabbar, TabbarItem, Panel, PanelHeader} from '@vkontakte/vkui'
import Reader from "./Reader";
import Library from "./Library";
import Profile from "./Profile";
import Cookie from "../cookie/Cookie";
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28GridSquareOutline from '@vkontakte/icons/dist/28/grid_square_outline';
import Icon28Menu from '@vkontakte/icons/dist/28/menu';
export default class Main extends Component {
    constructor(props) {
        super(props);
        let languages = ["ru", "fr"];
        try {
            languages = JSON.parse(Cookie.getLanguages());

        }
        catch (e) {
            console.log(e);

        }
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
                          ><Icon28ArticleOutline/></TabbarItem>
                          <TabbarItem
                              onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'library'}
                              data-story={"library"}
                              text={"Библиотека"}
                          ><Icon28GridSquareOutline/></TabbarItem>
                          <TabbarItem
                              onClick={this.onStoryChange}
                              selected={this.state.activeStory === 'profile'}
                              data-story={"profile"}
                              text={"Профиль"}
                          ><Icon28Menu/></TabbarItem>
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
