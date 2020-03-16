import React from 'react'
import IconsGenerate from "./icons/react-icon-svg";
class Icons extends React.Component {
    state = {
        status: null,
        edtSize: '10vh',
        flag:true
    }
    render() {
        const resizeIcon = () => {
                if(this.state.flag){
                        this.setState({
                                edtSize: ((this.props.iconName.length + 1) * 14) + 'px',
                                flag:false
                            })
                } else{
                        this.setState({
                                edtSize: '10vh',
                                flag:true
                            })
                }
            }
        const styles = {
            icon: {
                overflow: 'auto',
                color: 'rgb(50,50,50)',
                margin: 10,
                padding: 20,
                backgroundColor: "#fff",
                flexGrow: 1,
                borderRadius: 10,
                boxShadow: `0px 6px 8px ${ "#aaaaaa"}`,
                wordWrap: 'break-word'
            },
            textFont: {
                width: this.state.edtSize,
                fontFamily: 'monospace',
                fontSize: "3vh",
                fontWeight: 'bold',
                marginTop: 10,
                textAlign: 'center',
                border: 1
            }
        }
        const edtClick = (e) => {
            e
                .target
                .select()
            document.execCommand('copy')
            this.setState({status: 'copied!'})
            setInterval(() => {
                this.setState({status: null})
            }, 3000);
        }
        return (
            <div style={styles.icon} 
            onClick={resizeIcon}
                >
                <IconsGenerate
                    iconName={this.props.iconName}
                    height="10vh"
                    fill="rgba(50,50,50,1)"/>
                <br/><input
                
                    style={styles.textFont}
                    type="text"
                    value={this.props.iconName}
                    onFocus={edtClick}
                    readOnly/><br/>
                <p>{this.state.status}</p>
            </div>
        )
    }

}

export default Icons