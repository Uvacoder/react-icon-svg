import React from 'react'
import Icon from "./icon";
class Icons extends React.Component {
    render() {
        return (
            <div style={styles.iconContainer}>
                {this
                    .props
                    .icons
                    .map((icon, i) => {
                        return (<Icon iconName={icon} key={i}/>)
                    })}
            </div>
        )
    }

}
const styles = {
    iconContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        flexFlow: 'wrap'
    }
}
export default Icons