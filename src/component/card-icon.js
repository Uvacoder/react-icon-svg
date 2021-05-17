import React from 'react';
import injectSheet from 'react-jss';
function CardIcon( props ) {
	const { cardIconStyle } = props.classes;
	return (

		<div className={cardIconStyle} onClick={props.onClick} style={{
            backgroundImage: `url(${props.src})`}}>
              
            </div>

	);
}
const speed = '0.65s';
const cardIconStyle = {
    display:'flex',
	overflow: 'auto',
	color: 'rgb(50,50,50)',
    backgroundSize: '6vh',
    backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
    backgroundOrigin:'padding-box',
	height: '10vh',
	margin: 12,
	padding: 24,
	backgroundColor: "#fff",
	flexGrow: 1,
	borderRadius: 10,
	boxShadow: `0px 6px 8px ${ "#aaaaaa" }`,
	wordWrap: 'break-word',
	
	// backgroundSize: '6vh',
	cursor: 'pointer',
    '-webkit-transition': 'all ' + speed + ' ease',
	transition: 'all ' + speed + ' ease',
	'&:hover': {
		boxShadow: '0 24px 32px -10px rgb(17, 17, 17,0.55)',
        '-webkit-transform': 'scale(1.06, 1.06)',
		transform: 'scale(1.06, 1.06)',
	}
};
export default injectSheet({ cardIconStyle })( CardIcon );