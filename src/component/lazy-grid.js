import React from 'react';
import { CellMeasurer, CellMeasurerCache, Grid } from 'react-virtualized';
import metaData from "../data/metadata.json";
import CardIcon from "./card-icon"
const colCount = 9;
const svgUrl = ( name, styles ) => `https://raw.githubusercontent.com/adhemukhlis/react-icon-svg/master/src/svgs/font_awesome/${ styles }/${ name }.svg`;
const transformIndex = ( row, col ) => {
	return row * colCount + col;
}

const icon = Object
	.keys( metaData ).filter(iconName=>metaData[iconName].styles.includes('brands'))
	.map(data => ({name: data, styles: metaData[data].styles[0]}));
	console.log(icon)
const list = icon.map(ic => ({
	source: svgUrl( ic.name, ic.styles ),
	imageWidth: '100',
	caption: ic.name
}));

const cache = new CellMeasurerCache({ defaultWidth: 110, fixedWidth: true });

function cellRenderer({ columnIndex, key, rowIndex, parent, style }) {
	const getIconIndex = transformIndex( rowIndex, columnIndex )
	const datum = list[getIconIndex];
	if (datum===undefined){
		console.log(getIconIndex)
		console.log(datum)
	}
	
	return (getIconIndex<list.length?
		<CellMeasurer
			cache={cache}
			key={key}
			columnIndex={columnIndex}
			parent={parent}
			rowIndex={rowIndex}>
			<div style={style}>
				{/* {console.log(datum)} */}
                <div style={{textAlign:'center',padding :8}}>
                <CardIcon
							// onClick={showModal}
							src={datum?.source} name={datum?.caption}/>
                            <small>{datum?.caption}</small>
                </div>
            
				{/* <img src={datum.source} style={{
					height: "8vh"
				}}/> */}
				
			</div>
		</CellMeasurer>:undefined
	);
}

const LazyGrid = (props ) => {
	return ( <Grid
		cellRenderer={cellRenderer}
		columnCount={colCount}
		overscanRowCount={5}
		columnWidth={(props.width-24)/9}
		height={props.height-80}
		rowCount={Math.ceil(list.length/colCount)}
		rowHeight={cache.rowHeight}
		width={props.width}
        /> );
}
export default LazyGrid;