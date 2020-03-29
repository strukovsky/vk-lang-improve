import React, {Component} from 'react';
import {View, Panel, PanelHeader, Group, CellButton, Cell, Root} from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import {Redirect} from "react-router-dom";
import Cookie from "../cookie/Cookie";

export default class Hello extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeView: 'hello',
            activePanel: 'hello_1',
            activeTitle: 'Настрой приложение'
        }
        this.onChangeTitle = this.onChangeTitle.bind(this)
    }

    onChangeTitle(story) {
        let title = "Чтение";
        if (story === 'library')
            title = "Выберите, что почитать";
        else if (story === 'profile')
            title = "Настройте приложение";
        this.setState({activeTitle: title})
    }


    render() {
        return (
            <Root activeView={this.state.activeView}>
                <View activePanel={this.state.activePanel} id={"hello"}>
                    <Panel id={"hello_1"}>
                        <PanelHeader>Приветики! Это LangImprove</PanelHeader>
                        <Group>
                            <Cell>
                                Это приложение поможет тебе не забывать о твоих любимых языках
                            </Cell>
                            <Cell>
                                Читай на языках, закреплением которых ты хочешь заняться, проходи тесты
                                и запоминай интересные выражения!
                            </Cell>
                            <CellButton onClick={() => {
                                this.setState({activePanel: 'hello_2'})
                            }}>
                                Вперед!
                            </CellButton>
                        </Group>
                    </Panel>

                    <Panel id={"hello_2"}>
                        <PanelHeader>Обучение</PanelHeader>
                        <Group>
                            <Cell>
                                Обучение проходит по восходящей:
                            </Cell>
                            <Cell>
                                Вначале ты читаешь параграф на самом знакомом языке, затем на твоем втором языке и так
                                до конца)
                            </Cell>
                            <Cell>
                                Укажи, пожалуйста, языки, которые ты хочешь подтянуть:
                            </Cell>
                            <CellButton onClick={() => {
                                Cookie.setAuth();
                                window.location.replace("http://localhost:3000/main/")
                            }
                            }>
                                Давайте
                            </CellButton>
                        </Group>
                    </Panel>
                </View>
            </Root>
        )
    }
}
