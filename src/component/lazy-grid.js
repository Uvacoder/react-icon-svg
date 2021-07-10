import React from 'react';
import { CellMeasurer, CellMeasurerCache, Grid } from 'react-virtualized';
import { withRouter, useParams } from "react-router-dom";
import qs from 'qs';
import metaData from "../data/metadata.json";
import CardIcon from "./card-icon";

const svgUrl = ( name, styles ) => `https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/font_awesome/${ styles }/${ name }.svg`;
const transformIndex = ( row, col,colCount ) => {
	return row * colCount + col;
}
const cache = new CellMeasurerCache({ defaultWidth: 160, fixedWidth: true });
function cellRenderer({
	columnIndex,
	key,
	rowIndex,
	parent,
	style,
	list,
	colCount
}) {
	const getIconIndex = transformIndex( rowIndex, columnIndex,colCount );
	const datum = list[getIconIndex];

	return ( getIconIndex < list.length ? <CellMeasurer
		cache={cache}
		key={key}
		columnIndex={columnIndex}
		parent={parent}
		rowIndex={rowIndex}>
		<div style={style}>
			<div
				style={{
				textAlign: 'center',
				margin: 8,
				border: '2px solid #aaa',
				borderRadius: '12px'
			}}>
				<CardIcon src={datum?.source} name={datum?.caption}/>
				<p
					style={{
					margin: '8px',
					letterSpacing: '1.24px',
					fontSize: '.8em'
				}}>{datum?.caption}</p>
			</div>
		</div>
	</CellMeasurer> : undefined);
}

const LazyGrid = ( props ) => {
	let list = [ ];
	const { paramOne } = useParams( );
	if ( paramOne === 'search' ) {
		const prefixed = qs.parse(props.location.search, { ignoreQueryPrefix: true });
		const { tag } = prefixed;
		const icon = Object
			.keys( metaData )
			.filter(iconName => metaData[iconName].search.terms.includes( tag ));
		icon.forEach(name => {
			if ( metaData[name].styles.length > 1 ) {
				const tmp = metaData[name]
					.styles
					.map(iconStyle => ({
						source: svgUrl( name, iconStyle ),
						imageWidth: '100',
						caption: name
					}));
				list
					.push
					.apply( list, tmp );
			} else {
				list.push({
					source: svgUrl(name, metaData[name].styles[0]),
					imageWidth: '100',
					caption: name
				});
			}
		});
	} else if ( !!paramOne ) {
		const [,
			IconStyle] = paramOne.split( "-" );
		const icon = Object
			.keys( metaData )
			.filter(iconName => metaData[iconName].styles.includes( IconStyle ))
			.map(data => ({ name: data, styles: IconStyle }));
		list = icon.map(ic => ({
			source: svgUrl( ic.name, ic.styles ),
			imageWidth: '100',
			caption: ic.name
		}));
	}
const metering = Math.floor((props.width-10)/160)
const colCount = metering<1?1:metering
	return ( <Grid
		cellRenderer={({ columnIndex, key, rowIndex, parent, style }) => cellRenderer({
		columnIndex,
		key,
		rowIndex,
		parent,
		style,
		list,
		colCount
	})}
		columnCount={colCount}
		overscanRowCount={5}
		columnWidth={( props.width - 10 ) / colCount}
		height={props.height}
		rowCount={Math.ceil( list.length / colCount )}
		rowHeight={cache.rowHeight}
		width={props.width + 12}/> );
}
export default withRouter( LazyGrid );