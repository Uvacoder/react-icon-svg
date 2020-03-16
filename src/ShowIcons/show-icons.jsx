import React, { Component } from 'react';
import './style.css';
import SampleUsage from "./media/carbon.svg";
import IconItem from "./icon-item";
import IconLib from "./icons/react-icon-svg";
import { BrandNames, LightNames, RegularNames, SolidNames, DuotoneNames } from "./icon-name";
class Icons extends Component {
	constructor( props ) {
		super( props );
		this.state = {
			flag: true,
			docs: null,
			dataIcons: BrandNames,
			selectedCat: 'Brand'
		}
	}
	All = ( ) => {
		let tmp = [ ];
		this.setState({
			selectedCat: 'All',
			dataIcons: tmp.concat( BrandNames, LightNames, RegularNames, SolidNames, DuotoneNames )
		})
	}
	Brands = ( ) => {
		let tmp = [ ];
		this.setState({
			selectedCat: 'Brand',
			dataIcons: tmp.concat( BrandNames )
		})
	}
	Light = ( ) => {
		let tmp = [ ];
		this.setState({
			selectedCat: 'Light',
			dataIcons: tmp.concat( LightNames )
		})
	}
	Regular = ( ) => {
		let tmp = [ ];
		this.setState({
			selectedCat: 'Regular',
			dataIcons: tmp.concat( RegularNames )
		})
	}
	Solid = ( ) => {
		let tmp = [ ];
		this.setState({
			selectedCat: 'Solid',
			dataIcons: tmp.concat( SolidNames )
		})
	}
	Duo = ( ) => {
		let tmp = [ ];
		this.setState({
			selectedCat: 'Duo',
			dataIcons: tmp.concat( DuotoneNames )
		})
	}
	render( ) {
		const docs = (
			<div style={{display:'flex', alignItems:'center', justifyContent:'center', flex:1, marginBottom:64}}>
				<div className="docContainer">
					<h3>
						<ol>
							<li>Install</li>{"Download "}
							<a target="blank" href="https://github.com/adhemukhlis/react-icon-svg/releases/download/v2.1/react-icon-svg.js">
								<b>react-icon-svg.js</b>
							</a>{" then place the file on your ReactJS Project"}
							<li>Implement</li>
							<div style={{
								display: 'flex',
								flex: 1,
								alignItems: 'center',
								justifyContent: 'center'
							}}>
								<img width="50%" src={SampleUsage} alt=""/>
							</div>
						</ol>
					</h3>
				</div>
			</div>
		);
		const opendoc = ( ) => {
			if ( this.state.flag ) {
				this.setState({ docs: docs, flag: false })
			} else {
				this.setState({ docs: null, flag: true })
			}
		}
		return (
			<div style={{
				backgroundColor: "#eee",
				fontFamily: 'Arial, Helvetica, sans-serif'
			}}>
				<div style={styles.banner}>
					<h1 style={styles.title}>React Icon SVG</h1>
				</div>
				<div style={styles.textContainer}>
					<button onClick={opendoc} style={styles.docButton}>
						<div style={styles.docButtonInner}><IconLib iconName='IcRegularFileAlt' height="50" fill="#fff"/>
							<div style={{
								marginLeft: 10
							}}>
								<div style={styles.textFont}>Doc</div>
							</div>
						</div>
					</button>{this.state.docs}
					<div style={styles.buttonContainer}>
						<button className='catButton' onClick={this.All}>
							<IconLib iconName="IcSolidCheckCircle" height="50" fill="#555"/><br/>
							<div style={styles.textFont}>All</div>
						</button>
						<button className='catButton' onClick={this.Brands}><IconLib iconName="IcBrandFacebookSquare" height="50" fill="#555"/><br/>
							<div style={styles.textFont}>Brand</div>
						</button>
						<button className='catButton' onClick={this.Light}><IconLib iconName="IcLightLaughSquint" height="50" fill="#555"/><br/>
							<div style={styles.textFont}>Light</div>
						</button>
						<button className='catButton' onClick={this.Regular}><IconLib iconName="IcRegularLaughSquint" height="50" fill="#555"/><br/>
							<div style={styles.textFont}>Regular</div>
						</button>
						<button className='catButton' onClick={this.Solid}><IconLib iconName="IcSolidLaughSquint" height="50" fill="#555"/><br/>
							<div style={styles.textFont}>Solid</div>
						</button>
						<button className='catButton' onClick={this.Duo}>
							<IconLib iconName="IcDuotoneLaughSquint" height="50" fill="#555"/><br/>
							<div style={styles.textFont}>Duotone</div>
						</button>
					</div>
					<h1 style={styles.text}>{this.state.dataIcons.length + " " + this.state.selectedCat + " Icons"}
						<hr style={{
							width: 150
						}}/>
					</h1>
				</div>
				<IconItem icons={this.state.dataIcons}/>
			</div>
		)
	}
}
const styles = {
	banner: {
		width: "100%",
		height: "100vh",
		backgroundColor: "#1a1a1a",
		boxShadow: `0px 6px 8px ${ "#aaaaaa" }`,
		display: 'flex',
		justifiyContent: 'center',
		alignItems: 'center',
		marginBottom: 50
	},
	title: {
		color: "#fff",
		margin: "0 auto",
		display: 'block',
		marginBottom: 50,
		fontSize: "7vw"
	},
	text: {
		fontFamily: 'Arial, Helvetica, sans-serif',
		color: '#333'
	},
	buttonContainer: {
		display: 'flex',
		flexFlow: 'wrap'
	},
	textContainer: {
		textAlign: 'center'
	},
	docButton: {
		border: 'none',
		color: '#fff',
		backgroundColor: '#3399ff',
		padding: 10,
		margin: 10,
		borderRadius: '10px',
		marginBottom: 50
	},
	docButtonInner: {
		display: 'flex',
		alignItems: 'center'
	},
	textFont: {
		fontFamily: 'inherit',
		fontSize: "4vh",
		fontWeight: 'bold'
	}
};
export default Icons;