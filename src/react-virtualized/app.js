import React from 'react';
import ReactDOM from 'react-dom';
import { CellMeasurer, CellMeasurerCache, Grid } from 'react-virtualized';
import metaData from "../data/metadata.json";
const colCount = 9;
const svgUrl = ( name, styles ) => `https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/font_awesome/${ styles }/${ name }.svg`;
const transformIndex = ( row, col ) => {
	return row * colCount + col;
}

const icon = Object
	.keys( metaData )
	.map(data => ({name: data, styles: metaData[data].styles[0]}));
const list = icon.map(ic => ({
	source: svgUrl( ic.name, ic.styles ),
	imageWidth: '100',
	caption: ic.name
}));

const cache = new CellMeasurerCache({ defaultWidth: 200, fixedWidth: true });

function cellRenderer({ columnIndex, key, rowIndex, parent, style }) {
	const datum = list[transformIndex( rowIndex, columnIndex )];
	return (
		<CellMeasurer
			cache={cache}
			key={key}
			columnIndex={columnIndex}
			parent={parent}
			rowIndex={rowIndex}>
			<div style={style}>
				<img src={datum.source} style={{
					height: "8vh"
				}}/>
				<h4>{datum.caption}</h4>
			</div>
		</CellMeasurer>
	);
}

const App = ( ) => {
	return ( <Grid
		cellRenderer={cellRenderer}
		columnCount={colCount}
		overscanRowCount={5}
		columnWidth={128}
		height={600}
		rowCount={list.length}
		rowHeight={cache.rowHeight}
		width={1200}/> );
}
export default App;