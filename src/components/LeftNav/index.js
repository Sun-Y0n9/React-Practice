import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import menuList from '../../config/menu.js';
import './index.less';
const { SubMenu } = Menu;
class LeftNav extends Component {
	constructor (props) {
		super(props);
		this.state = {
			menuList: [],
			menuTreeNode: ''
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
						{/* {this.createMenuItem()} */}
						{ this.state.menuTreeNode }
					</Menu>
				</div>
			</div>
		)
	}
	createSubMenuItem (menu) {
		return menu.children.map((item) => {
			return (
        		<Menu.Item  key={item.key}>{item.title}</Menu.Item>
			)
		})
	}
	createMenuItem () {
		return this.state.menuList.map((menu) => {
			if (!(menu.children)) {
				return (
					<Menu.Item key={menu.key} title={menu.title}>
						{menu.title}
					</Menu.Item>
				)	
			} else {
				return (
					<SubMenu key={menu.key} title={menu.title}>
						{this.createSubMenuItem(menu)}
					</SubMenu>
				)
			}
		})
	}
	recursionMenuList (data) {
		return data.map(menu => {
			if (menu.children) {
				return (
					<SubMenu key={menu.key} title={menu.title}>
						{this.recursionMenuList(menu.children)}
					</SubMenu>
				)
			} else {
				return (
					<Menu.Item key={menu.key} title={menu.title}>
						<NavLink to={menu.key}>{menu.title}</NavLink>
					</Menu.Item>
				)
			}
		})
	}
	componentDidMount () {
		const menuTreeNode = this.recursionMenuList(menuList);
		this.setState({
			menuList: menuList,
			menuTreeNode
		});
	}
};
export default LeftNav;