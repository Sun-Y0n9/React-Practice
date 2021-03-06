#### yarn

- yarn add	yarn init	yarn remove

- package.json中的*eject*命令用于修改webpack配置

#### 生命周期函数

- getDefaultProps 获取默认props参数
- getInitialState 初始化当前组件状态
- componentWillMounte 组件即将挂载 已变更为 UNSAFE_componentWillMount 
- render 组件渲染
- componentDidMounted DOM插入完成
- componentWillReceiveProps 即将接收父级参数 已变更为UNSAFE_ componentWillReceiveProps
- shouldComponentUpdate 组件是否更新
- componentWillUpdate  组件即将更新 已变更为UNSAFE_ componentWillUpdate 
- componentDidUpdate 组件更新完成

- componentWillUnmount 组件销毁之前

#### 解决方法内this指向问题的三种方式

- constructor中, 修改this指向

- ```javascript
  constructor (props) {
      super(props);
      this.state = {
          count: 10
      }
      this.handleClickButtonMethod1 = this.handleClickButtonMethod1.bind(this);
  }
  // <button onClick={this.handleClickButtonMethod1}>增加</button>
  ```

- jsx中直接修改this指向

- ```javascript
  // <button onClick={this.handleClickButtonMethod2.bind(this)}>增加</button>
  ```

- 通过定义方法的书写方式, 使用箭头函数

- ```javascript
  handleClickButtonMethod3 = () => {
      let { count } = this.state;
      this.setState({
          count: count + 100
      })
  }
  // <button onClick={this.handleClickButtonMethod3}>增加</button>
  ```

#### 暴露react项目的webpack的配置文件

- antd是基于less开发的
- 执行yarn eject命令, 会生成config文件夹, 此文件夹下是项目的webpack配置

#### 配置less全局变量

- `npm i sass-resources-loader --save-dev`

- 修改webpack.config.js

- ```javascript
  const getStyleLoaders = (cssOptions, preProcessor, less) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        // css is located in `static/css`, use '../../' to locate index.html folder
        // in production `paths.publicUrlOrPath` can be a relative path
        options: paths.publicUrlOrPath.startsWith('.')
          ? { publicPath: '../../' }
          : {},
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009',
              },
              stage: 3,
            }),
            // Adds PostCSS Normalize as the reset css with default options,
            // so that it honors browserslist config in package.json
            // which in turn let's users customize the target behavior as per their needs.
            postcssNormalize(),
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap,
        },
      },
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push(
        {
          loader: require.resolve('resolve-url-loader'),
          options: {
            sourceMap: isEnvProduction && shouldUseSourceMap,
          },
        },
        {
          loader: require.resolve(preProcessor),
          options: {
            sourceMap: true,
          },
        }
      );
    }
    if (less) {
      loaders.push(
        {
            loader: require.resolve('sass-resources-loader'),
            options: {
                resources: './src/static/css/_variable.less'
            }
        }
      );
    }
    return loaders;
  };
  ```


#### 开发配置代理

- 安装http-proxy-middleware

- src下新建setupProxy.js文件

- ```javascript
  // 配置代理中间件，以进行连接、表达、浏览器同步等。
  const { createProxyMiddleware } = require('http-proxy-middleware');
  
  // 配置代理服务
  const apiProxy = createProxyMiddleware('/telematics', {
  	target: 'http://api.map.baidu.com',
  	secure: false,
  	changeOrigin: true,
  	pathRewrite: {
  		'^/telematics': '/telematics'
  	}
  });
  
  const apiProxy2 = createProxyMiddleware('/api2', {
  	target: 'http://localhost:3002',
  	secure: false,
  	changeOrigin: true,
  	pathRewrite: {
  		'^/api2': '/api2'
  	}
  });
  
  module.exports = function(app) {
  	app.use(apiProxy);
  	// app.use(apiProxy2);
  }
  ```

#### 路由

- react-router-dom基于react-router的浏览器端路由插件
- react-router-dom 着重路由组件化 不需要在路由文件中进行配置
- HashRouter/BrowserRouter
- Route: path exact component render

- NavLik Link

- Switch

- Redirect

- HashRouter http://www.sun.com/#home

- BorwserRouter http://www.sun.com/home

- <Route path='/three/:number' /> 取值使用this.props.match.params.number

- Switch 只匹配第一个符合要求的

- <Redirect to='/home' />

- 嵌套路由

- ```html
  <Route path='/main' render={() => 
      <Main>
          <Route path='/main/about' component={About} />
      </Main>
      } />
  ```

- main

- ```javascript
  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';
  class Main extends Component{
  	render () {
  		return (
  			<div>
  				<h2>Main</h2>
  				<hr />
  				<Link to='/main/about'>加载About路由内容</Link>
  				{this.props.children}
  			</div>
  		);
  	}
  }
  
  export default Main;
  ```

- 使用Switch组件, 将404组件放在最后,实现404界面的功能

- 第一渲染路由文件, 在路由文件中, 引入根组件, 在根组件标签中,定义路由

  - ```javascript
    import React, { Component } from 'react';
    import { HashRouter, Route, Switch} from 'react-router-dom';
    import menuList from '../config/menu.js';
    import App from '../App.js';
    import Admin from '../admin';
    import Login from '../pages/login/index.js';
    import Buttons from '../pages/ui/buttons/index.js';
    import F0f from '../pages/404/index.js';
    console.log(menuList);
    class TGLRouter extends Component {
    	render () {
    		return (
    			<HashRouter>
    				<App>
    					<Route path='/login' component={Login} />
    					<Route path='/admin' render={() => 
    						<Admin>
    							<Switch>
    								<Route path='/admin/ui/buttons' component={Buttons} />
    								<Route component={F0f} />
    							</Switch>
    						</Admin>
    					} />
    				</App>
    			</HashRouter>
    		);
    	}
    }
    
    export default TGLRouter;
    ```

- 