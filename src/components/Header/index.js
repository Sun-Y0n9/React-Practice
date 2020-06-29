import React, { Component } from 'react';
import { request } from '../../axios';
import { Row, Col } from 'antd';
import { formateDate } from '../../utils';
import './index.less';
class Header extends Component {
	constructor (props) {
		super(props);
		this.state = {
			userName: 'Y0n9',
			time: '',
			weather: ''
		}
	}
	render () {
		const { time, weather} = this.state;
		return (
			<div className='header'>
				<Row className='header-top'>
					<Col span='24'>
						<span>欢迎 { this.state.userName }</span>
						<button>退出</button>
					</Col>
				</Row>
				<Row className='header-bot'>
					<Col span='4' className='header-bot-title'>
						首页
					</Col>
					<Col span='20' className='header-bot-time'>
						<span>{time }</span>
						<span>{weather}</span>
					</Col>
				</Row>
			</div>
		)
	}
	componentDidMount () {
		this.renderTime();
		setInterval(() => {
			this.renderTime();
		}, 1000);
		this.getWeatherFromBaidu();
	}
	renderTime () {
		let syatime = formateDate(new Date());
		this.setState({
			time: syatime
		})
	}
	getWeatherFromBaidu () {
		request.get('/telematics/v3/weather?location=beijing&output=json&ak=3p49MVra6urFRGOT9s8UBWr2')
		.then(res => {
			if (res.status === 'success') {
				this.setState({
					weather: res.results[0].weather_data[0].weather
				})
			} else {
				console.log('天气信息获取失败');
			}
		})
		.catch(err => {
			console.log(err);
		})
	}
};
export default Header;