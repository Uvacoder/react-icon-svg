import React, { useState, useEffect, memo } from 'react';
import { Layout, Menu, Breadcrumb, Input } from 'antd';
import { withRouter, useParams, Link } from 'react-router-dom';
import { SmileOutlined } from '@ant-design/icons';
import './home.css';
import ContainerDimensions from 'react-container-dimensions';
import qs from 'qs';
import LazyGrid from '../component/lazy-grid';
import IconI from '../svgs/font_awesome/duotone/info.svg'
import IconS from '../svgs/font_awesome/duotone/circle-s.svg'
import IconR from '../svgs/font_awesome/duotone/circle-r.svg'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;
const publisherList = {
	"fa": "Font Awesome"
};
// const getObjectFilter = ({ obj, include, exclude }) => { 	Object.filter = (
// obj, predicate ) => Object 		.keys( obj ) 		.filter(key => predicate( key ))
// 		.reduce(( res, key ) => Object.assign(res, {[ key ]: obj[key]}), { });
// 	return !!include ? Object.filter(obj, attr => include.includes( attr )) :
// !!exclude ? Object.filter(obj, attr => !exclude.includes( attr )) : {}; }
const Home = memo(( props ) => {
	const [collapsed,
		setCollapsed] = useState( false );
	const [iconSelect,
		setIconSelect] = useState( 'fa-brands' );
	const onCollapse = collapsed => {
		setCollapsed( collapsed );
	};
	const onMenuClick = ({ key }) => {
		setIconSelect( key );
		props
			.history
			.push( `/${ key }` );
	}
	const [searchQuery,
		setSearchQuery] = useState( "" );
	const [publisher,
		selectedIconStyle] = iconSelect.split( "-" );

	const onSearch = value => {
		props
			.history
			.push( `/search?tag=${ value }` );
		setSearchQuery( value );
	};
	const { paramOne } = useParams( );

	useEffect(( ) => {
		const prefixed = qs.parse(props.location.search, { ignoreQueryPrefix: true });
		const { tag } = prefixed;
		setIconSelect( paramOne );

		setSearchQuery( tag );
	});
	return (
		<Layout style={{
			minHeight: '100vh'
		}}>
			<Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
				<div
					style={{
					height: '32px',
					margin: '16px',
					display:'flex',
					justifyContent:'space-evenly',
					alignItems:'center',
					padding:'4px',
					background: 'rgba(255, 255, 255, 0.3)'
				}}><img src={IconR} style={{height:"100%"}}/><img src={IconI} style={{height:"100%"}}/><img src={IconS} style={{height:"100%"}}/></div>
				<Menu theme="dark" defaultSelectedKeys={[ '1' ]} mode="inline">
					<SubMenu key="sub1" icon={< SmileOutlined />} title="Font Awesome">
						<Menu.Item key="fa-brands" onClick={onMenuClick}>
							<Link to={{
								pathname: "/fa-brands"
							}}>Brands</Link>
						</Menu.Item>
						<Menu.Item key="fa-duotone" onClick={onMenuClick}>Duotone</Menu.Item>
						<Menu.Item key="fa-thin" onClick={onMenuClick}>Thin</Menu.Item>
						<Menu.Item key="fa-light" onClick={onMenuClick}>Light</Menu.Item>
						<Menu.Item key="fa-regular" onClick={onMenuClick}>Regular</Menu.Item>
						<Menu.Item key="fa-solid" onClick={onMenuClick}>Solid</Menu.Item>
					</SubMenu>
				</Menu>
			</Sider>
			<Layout className="site-layout">
				<Header
					className="site-layout-background"
					style={{
					paddingLeft: 12,
					display: 'flex',
					alignItems: 'center'
				}}>
					<Search
						size='large'
						placeholder="Search icons"
						allowClear
						onSearch={onSearch}
						style={{
						width: 360
					}}/></Header>
				<Content
					style={{
					margin: '0 16px',
					display: 'flex',
					flexDirection: 'column'
				}}>
					<Breadcrumb style={{
						margin: '16px 0'
					}}>
						<Breadcrumb.Item>{publisherList[publisher] || "search"}</Breadcrumb.Item>
						<Breadcrumb.Item>{selectedIconStyle || searchQuery}</Breadcrumb.Item>
					</Breadcrumb>
					<div style={{
						flex: 1
					}}>
						<ContainerDimensions>{({ height, width }) => ( <LazyGrid
								width={width}
								height={height}
								iconSelect={iconSelect}
								search={searchQuery}/> )}</ContainerDimensions>
					</div>
				</Content>
			</Layout>
		</Layout>
	);
});

export default withRouter( Home );
