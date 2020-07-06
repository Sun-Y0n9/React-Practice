import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav';
import Home from './pages/home';
import { Col, Row} from 'antd';
class Admin extends Component {
	render () {
		return (
			<Row className='warpper'>
				<Col span='3' className='wrapper-left'>
					<LeftNav></LeftNav>
				</Col>
				<Col span='21' className='wrapper-right'>
					<Header></Header>
					<Row className='content'>
						<Home></Home>
					</Row>
					<Footer></Footer>
				</Col>
			</Row>
		)
	}
};
export default Admin;