import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout
class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="App">
                <Layout>
                    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">测试首页</Menu.Item>

                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px', marginTop: 64 }}>
                        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                            {
                                this.props.children
                            }
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        Ant Design ©2018 Created by Ant UED
    </Footer>
                </Layout>
            </div>
        )
    }
}
export default App