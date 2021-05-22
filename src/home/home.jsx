import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './home.css';
import ContainerDimensions from 'react-container-dimensions';
import LazyGrid from '../component/lazy-grid';
// const {TextArea}=Input
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const publisherList = {
"fa":"Font Awesome"
}
// const getObjectFilter = ({ obj, include, exclude }) => { 	Object.filter = (
// obj, predicate ) => Object 		.keys( obj ) 		.filter(key => predicate( key ))
// 		.reduce(( res, key ) => Object.assign(res, {[ key ]: obj[key]}), { });
// 	return !!include ? Object.filter(obj, attr => include.includes( attr )) :
// !!exclude ? Object.filter(obj, attr => !exclude.includes( attr )) : {}; }
const Home = ( ) => {

	const [collapsed,
		setCollapsed] = useState( false );
		const [tab,
			setTab] = useState( 'fa-brands' );
	const onCollapse = collapsed => {
		console.log( collapsed );
		setCollapsed( collapsed );
	};
	const onMenuClick=({key})=>{
		setTab(key)
	}
	const [publisher,iconStyle]=tab.split("-")
	return (
		<Layout style={{
			minHeight: '100vh'
		}}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				<div
					style={{
					height: '32px',
					margin: '16px',
					background: 'rgba(255, 255, 255, 0.3)'
				}}>RIS</div>
				<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
					<SubMenu key="sub1" icon={< SmileOutlined />} title="Font Awesome">
						<Menu.Item key="fa-brands" onClick={onMenuClick}>Brands</Menu.Item>
						<Menu.Item key="fa-duotone" onClick={onMenuClick}>Duotone</Menu.Item>
						<Menu.Item key="fa-light" onClick={onMenuClick}>Light</Menu.Item>
						<Menu.Item key="fa-regular" onClick={onMenuClick}>Regular</Menu.Item>
						<Menu.Item key="fa-solid" onClick={onMenuClick}>Solid</Menu.Item>
						<Menu.Item key="fa-thin" onClick={onMenuClick}>Thin</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header className="site-layout-background" style={{
					padding: 0
				}}/>
				<Content style={{
					margin: '0 16px'
				}}>
					<Breadcrumb style={{
						margin: '16px 0'
					}}>
						<Breadcrumb.Item>{publisherList[publisher]}</Breadcrumb.Item>
						<Breadcrumb.Item>{iconStyle}</Breadcrumb.Item>
					</Breadcrumb>
					<div
						style={{
						display: 'flex',
						width: '100%',
						height: '100%'
					}}>
						<div style={{
							flex: 1,
							width: '100%'
						}}>
							<ContainerDimensions>{({ height, width }) => ( <LazyGrid width={width} height={height} tabSelect="brands"/> )}</ContainerDimensions>
						</div>
					</div>
				</Content>
				<Footer style={{
					textAlign: 'center'
				}}>2021</Footer>
			</Layout>
		</Layout>
	);
}

export default Home;
