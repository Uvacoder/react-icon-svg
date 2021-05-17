import React, { useState } from 'react';
import {
	Layout,
	Menu,
	Breadcrumb,
	Modal,
	Button,
	Tooltip,
	Input,
	Space
} from 'antd';
import { SmileOutlined, DownloadOutlined } from '@ant-design/icons';
import './home.css';
import FileSaver from 'file-saver';
import CardIcon from "../component/card-icon";
// import metaData from '../data/icons.json'
// const {TextArea}=Input
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
// const getObjectFilter = ({ obj, include, exclude }) => {
// 	Object.filter = ( obj, predicate ) => Object
// 		.keys( obj )
// 		.filter(key => predicate( key ))
// 		.reduce(( res, key ) => Object.assign(res, {[ key ]: obj[key]}), { });
// 	return !!include ? Object.filter(obj, attr => include.includes( attr )) : !!exclude ? Object.filter(obj, attr => !exclude.includes( attr )) : {};
// }
const Home = ( ) => {
	const [result,
		setResult] = useState( "" );
	const [collapsed,
		setCollapsed] = useState( false );
	const [isModalVisible,
		setIsModalVisible] = useState( false );

	const [color,
		setColor] = useState( "#000000" );

	// const metadata = Object.keys(metaData)
	// console.log(metadata.length)
	// let tmp = []
	// metadata.forEach(name => {
	// 	const tmp2 = `"${name}":${JSON.stringify(getObjectFilter({obj:metaData[name],include:["search","styles","unicode","label"]}))}`
	// 	tmp.push(tmp2)
	// });
	// const stringRes = "{"+tmp+"}"
	// setTimeout(()=>setResult(stringRes),10000)



	const onCollapse = collapsed => {
		console.log( collapsed );
		setCollapsed( collapsed );
	};

	const showModal = ( ) => {
		setIsModalVisible( true );
	};

	const handleOk = ( ) => {
		setIsModalVisible( false );
	};

	const handleCancel = ( ) => {
		setIsModalVisible( false );
	};
	const downloadHandler = ( ) => FileSaver.saveAs( `https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg`, "500px.svg" );

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
						<Menu.Item key="1">Brands</Menu.Item>
						<Menu.Item key="2">Duotone</Menu.Item>
						<Menu.Item key="3">Light</Menu.Item>
						<Menu.Item key="4">Regular</Menu.Item>
						<Menu.Item key="5">Solid</Menu.Item>
						<Menu.Item key="6">Thin</Menu.Item>
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
						<Breadcrumb.Item>Font Awesome</Breadcrumb.Item>
						<Breadcrumb.Item>Brands</Breadcrumb.Item>
					</Breadcrumb>
					<Modal
						title="Basic Modal"
						visible={isModalVisible}
						onOk={handleOk}
						onCancel={handleCancel}>
						<div
							style={{
							backgroundColor: color || "#000000",
                            margin:'0 0 24px 0',
							width: '100%',
							height: '20vh',
							backgroundSize: '10vh',
							backgroundOrigin: 'padding-box',
							mask: 'url("https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg") no-repeat center',
							'-webkit-mask': 'url("https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg") no-repeat center'
						}}/>
						<Tooltip placement="bottom" title="Download SVG">
							<Space><Input
								placeholder="color hex/rgb/rgba"
								onChange={e => setColor( e.target.value )}/>
								<Button
									type="primary"
									onClick={downloadHandler}
									icon={< DownloadOutlined />}
									size='middle'/></Space>
						</Tooltip>

					</Modal>
					<div
						style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'column',
						textAlign: 'center',
						flexFlow: 'wrap'
					}}>
						<CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/>
						<CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/><CardIcon
							onClick={showModal}
							src="https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/brands/500px.svg"/>

					</div>
					{/* <TextArea rows={4} value={result}/> */}
				</Content>
				<Footer style={{
					textAlign: 'center'
				}}>2021</Footer>
			</Layout>
		</Layout>
	);
}

export default Home;
