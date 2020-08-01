import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined, SearchOutlined, DownloadOutlined, RightOutlined , LeftOutlined} from '@ant-design/icons';
import './index.less';
class Buttons extends Component {
	constructor (props) {
		super(props);
		this.state = {
			loading: true,
			value: 1
		}
		this.handleOperateLoading = this.handleOperateLoading.bind(this);
		this.sizeRadioChange = this.sizeRadioChange.bind(this);
	}
	render () {
		return (
			<div className='buttonsPage'>
				<Card title='基础按钮'>
					<Button type='primary'>主按钮</Button>
					<Button>普通按钮</Button>
					<Button type='dashed'>虚线边框按钮</Button>
					<Button type='danger'>危险按钮</Button>
					<Button disabled>禁用按钮</Button>
				</Card>
				<Card title='图形按钮'>
					<Button icon={<PlusOutlined />}>创建</Button>
					<Button icon={<EditOutlined />}>编辑</Button>
					<Button icon={<DeleteOutlined />}>删除</Button>
					<Button shape='circle' icon={<SearchOutlined />}></Button>
					<Button type='primary' icon={<SearchOutlined />}>搜索</Button>
					<Button icon={<DownloadOutlined />} type='primary'>下载</Button>
				</Card>
				<Card title='加载按钮'>
					<Button type='primary' loading={this.state.loading}>确定</Button>
					<Button onClick={() => {
						this.handleOperateLoading(true)
					}} type='primary' loading={this.state.loading}>点击加载</Button>
					<Button shape='circle' type='primary' loading={this.state.loading}></Button>
					<Button shape='circle' loading={this.state.loading}></Button>
					<Button onClick={() => {
						this.handleOperateLoading(false)
					}} icon={<DownloadOutlined />} type='primary'>点击关闭</Button>
				</Card>
				<Card title='按钮组'>
					<Button.Group>
						<Button icon={<LeftOutlined />} type='primary'>返回</Button>
						<Button icon={<RightOutlined />} type='primary'>确定</Button>
					</Button.Group>
				</Card>
				<Card title='按钮尺寸'>
					<Radio.Group onChange={this.sizeRadioChange} value={this.state.value}>
						<Radio value={1}>小</Radio>
						<Radio value={2}>中</Radio>
						<Radio value={3}>大</Radio>
					</Radio.Group>
					<Button size={this.changeSizeFunc()} type='primary'>主按钮</Button>
					<Button size={this.changeSizeFunc()}>普通按钮</Button>
					<Button size={this.changeSizeFunc()} type='dashed'>虚线边框按钮</Button>
					<Button size={this.changeSizeFunc()} type='danger'>危险按钮</Button>
					<Button size={this.changeSizeFunc()} disabled>禁用按钮</Button>
				</Card>
			</div>
		);
	}
	handleOperateLoading (flag) {
		this.setState({
			loading: flag
		})
	}
	sizeRadioChange (e) {
		this.setState({
			value: e.target.value
		})
	}
	changeSizeFunc () {
		if (this.state.value === 1) {
			return 'small';
		} else if (this.state.value === 2) {
			return 'middle';
		}
		return 'large';
	}
}

export default Buttons;