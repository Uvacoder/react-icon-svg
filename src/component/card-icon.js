import React, { Fragment } from 'react';
import injectSheet from 'react-jss';
import { Modal, Tooltip, Space, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import FileSaver from 'file-saver';
const onClick = ({ name, downloadHandler, src }) => Modal.info({title: name, closable:true,content: (
		<Fragment>
			<div style={{backgroundColor:'#C9FFFF',width:'100%',padding:'16px', borderRadius:'16px',margin: '0 0 24px 0',}}>
			<div
				style={{
				backgroundColor: "#000000",
				width: '100%',
				height: '20vh',
				backgroundSize: '10vh',
				backgroundOrigin: 'padding-box',
				mask: `url(${ src }) no-repeat center`,
				'-webkit-mask': `url(${ src }) no-repeat center`
			}}/>
			</div>
			
			<Tooltip placement="bottom" title="Download SVG">
				<Space>
					<Button
						type="primary"
						onClick={downloadHandler}
						icon={< DownloadOutlined />}
						size='middle'/></Space>
			</Tooltip>
		</Fragment>
	), onOk( ) {}});

function CardIcon( props ) {
	const { cardIconStyle } = props.classes;
	const downloadHandler = ({ src, name }) => FileSaver.saveAs( src, `${ name }.svg` );
	return (
		<div
			className={cardIconStyle}
			onClick={( ) => onClick({
			downloadHandler: ( ) => downloadHandler({ src: props.src, name: props.name }),
			src: props.src,
			name: props.name
		})}>
			<div
				style={{
				backgroundColor: "#3a3a3a",
				flexGrow: 1,
				marginBottom: 4,
				backgroundOrigin: 'padding-box',
				mask: `url(${ props.src }) no-repeat center`,
				'-webkit-mask': `url(${ props.src }) no-repeat center`
			}}></div>
		</div>
	);
}
const speed = '0.65s';
const cardIconStyle = {
	display: 'flex',
	height: 80,
	margin: 8,
	padding: 8,
	borderRadius: 10,
	cursor: 'pointer',
	'-webkit-transition': 'all ' + speed + ' ease',
	transition: 'all ' + speed + ' ease',
	'&:hover': {
		boxShadow: `0px 6px 8px ${ "#aaaaaa" }`,
		backgroundColor: "#fff",
		'-webkit-transform': 'scale(1.06, 1.06)',
		transform: 'scale(1.06, 1.06)'
	}
};
export default injectSheet({ cardIconStyle })( CardIcon );