import React, { Component } from 'react';
class Body extends Component {
	state = {
		dataContent: [],
		iconName: [],
		iCode: "g",
		fileTotal: 434,
		fileIndex: 0,
		forDoc: false,
		svgjs: false
	};
	striptoPascalCase = ( data ) => {
		return data.replace( /\w+/g, function ( w ) {
			return w[0].toUpperCase( ) + w
				.slice( 1 )
				.toLowerCase( )
		})
	}
	setName = ( name, svgjs ) => {
		let tmp = [ ];
		let removed_file_ext =name
		.slice( 0, name.length - (svgjs?3:4) )
		let str = removed_file_ext
			.split( "-" );
		str.forEach(data => {
			tmp.push(this.striptoPascalCase( data ))
		});
		const name_res = svgjs?"Ic" + this.state.iCode +removed_file_ext : "Ic" + this.state.iCode + tmp.join( "" )
		const {  iconName } = this.state
		let tmp2 = iconName;
		tmp2.push(name_res)
		this.setState({iconName:tmp2})
		console.log(name_res)
		return name_res;
	}
	processEx = ( e ) => {
		const { dataContent } = this.state;
		let tmp = dataContent;
		const { forDoc, svgjs } = this.state;
		const files = e.target.files;
		console.log( Object.keys( files ).length );
	
			Object
				.keys( files )
				.forEach(i => {
					const file = files[i];
					const reader = new FileReader( );
					reader.onload = ( e ) => {
						let content;
						if ( svgjs ) {
							if ( forDoc ) {
								let fileName = file
									.name
									.slice( 0, file.name.length - 3 );
								content = "case  '" + this.setName( file.name, svgjs ) + "':\nicon = (<svg " + reader
									.result
									.slice(0, reader.result.length - ( 29 + fileName.length ))
									.slice( 75 + fileName.length ) + ");\nbreak"
							} else {
								let fileName = file
									.name
									.slice( 0, file.name.length - 3 );
								console.log( fileName );
								content = "export const " + this.setName( file.name, svgjs ) +  "  = props => (<svg " + reader
									.result
									.slice(0, reader.result.length - ( 29 + fileName.length ))
									.slice( 75 + fileName.length ) + ")"
							}
						} else {
							if ( forDoc ) {
								content = "case  '" + this.setName( file.name, svgjs ) + "':\nicon = (<svg {...this.props}" + reader
									.result
									.slice( 39 ) + ");\nbreak"
							} else {
								content = "export const  " + this.setName( file.name, svgjs ) + "  = props => (<svg {...props} " + reader
									.result
									.slice( 39 ) + ")"
							}
						}
						tmp.push( content );
					}
					reader.readAsBinaryString( file )
				});
			this.setState({ dataContent: tmp })
	}
	setCode = ( e ) => {
		if ( e.target.value === null ) {
			this.setState({ iCode: "g" })
		} else {
			this.setState({ iCode: e.target.value })
		}
	}
	clearWindow = ( ) => {
		this.setState({dataContent: [ ]})
	}
	downloadTxtFile = ( ) => {
		const { dataContent, forDoc, iconName } = this.state;
		let content;
		if ( forDoc ) {
			content = [
				"[\n'" + iconName.join( "',\n'" ) + "',\n]",
				"import React, { Component } from 'react';\nclass Icons extends Component {\nrender( ) {\nlet icon;\nswitch ( this.props.iconName ) {",
				dataContent.join( ";\n" ),
				"default:\nicon = 'null';\nbreak;\n}\nreturn ( icon );\n}\n}\nexport default Icons;"
			].join( "\n" )
		} else {
			content = [
				"import React from 'react';", dataContent.join( ";\n" )
			].join( "\n" )
		}
		const element = document.createElement( "a" );
		const file = new Blob([content], { type: 'text/plain' });
		element.href = URL.createObjectURL( file );
		element.download = "myFile.js";
		document
			.body
			.appendChild( element );
		element.click( )
	}
	handleChangeChk = ( e ) => {
		this.setState(( state, props ) => ({
			forDoc: !state.forDoc
		}))
	}
	handleChangeSVGJS = ( e ) => {
		this.setState(( state, props ) => ({
			svgjs: !state.svgjs
		}))
	}
	render( ) {
		const { fileTotal, fileIndex, forDoc, iCode, svgjs } = this.state;
		return (
			<div>
				<div style={{
					width: "100%"
				}}>
					{/* <Progress percent={( ( fileIndex / fileTotal ) * 500 )}/> */}
					using switch case?
					<input type="checkbox" defaultChecked={forDoc} onChange={this.handleChangeChk}/>
					<br/>
					svgjs?
					<input type="checkbox" defaultChecked={svgjs} onChange={this.handleChangeSVGJS}/>
					<br/>
					<input type="text" value={iCode} onChange={this.setCode} placeholder="Icon Code"/>
					<input type="file" id="file" className="input-file" accept={svgjs
						? ".js"
						: ".svg"} onChange={this.processEx} multiple/><br/>
					<button onClick={this.clearWindow}>Clear</button><br/>
					<button onClick={this.downloadTxtFile}>Download</button>
				</div>
			</div>
		)
	}
}
export default Body;