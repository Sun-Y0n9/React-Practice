import React, { Component } from 'react';
import { Menu } from 'antd';
import menuList from '../../config/menu.js';
import './index.less';
const { SubMenu } = Menu;
class LeftNav extends Component {
	constructor (props) {
		super(props);
		this.state = {
			menuList: []
		}
	}
	render () {
		return (
			<div className='leftNav'>
				<div className='leftNav-top'>
					<img src={require('../../static/img/logo-ant.svg')} alt='' />
					<h1>React-MS</h1>
				</div>
				<div className='leftNav-bot'>
					<Menu theme='dark'>
						{this.state.menuList.map((menu) => {
							if (!(menu.children)) {
								return (
									<Menu.Item key={menu.key} title={menu.title}>
										{menu.title}
								    </Menu.Item>
								)	
							} else {
								return (
									<SubMenu key={menu.key} title={menu.title}>
										{this.createMenuItem(menu)}
							    	</SubMenu>
								)
							}
						})}
						{/*<SubMenu key="sub1" title="Navigation One">
					        <Menu.Item key="1">Option 1</Menu.Item>
					        <Menu.Item key="2">Option 2</Menu.Item>
					        <Menu.Item key="3">Option 3</Menu.Item>
					        <Menu.Item key="4">Option 4</Menu.Item>
					    </SubMenu>*/}
					</Menu>
				</div>
			</div>
		)
	}
	createMenuItem (menu) {
		console.log(menu);
		// {menu.children.map((item) => {
		// 	return (
  //       		<Menu.Item  key={item.key}>item.title</Menu.Item>
		// 	)
		// })}
		return menu.children.map((item) => {
			console.log(item.title)
			return (
        		<Menu.Item  key={item.key}>{item.title}</Menu.Item>
			)
		})
	}
	componentDidMount () {
		this.setState({
			menuList: menuList
		});
	}
};
export default LeftNav;