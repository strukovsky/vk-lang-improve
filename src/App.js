import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import {View, Epic, Tabbar, TabbarItem, Panel, PanelHeader} from '@vkontakte/vkui'
import './App.css';
import Reader from "./components/Reader";
import '@vkontakte/vkui/dist/vkui.css'
import Library from "./components/Library";
import Profile from "./components/Profile";
import Data from "./api/Data";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStory: 'library',
      textId: 0,
      languages: ["ru", "fr"]
    };
    this.onStoryChange = this.onStoryChange.bind(this);
    this.onTextSelected = this.onTextSelected.bind(this);
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
                 <Profile/>
             </Panel>
         </View>
     </Epic>
    );
  }
}

export default App;
