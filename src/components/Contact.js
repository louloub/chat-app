import React from 'react';
import './myCSS.css'

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online,
        }
    }

    render() {
      return (
        <div className="Contact">
            <img className="avatar" alt="" src={this.props.avatar} />
            <div>
                <h3 className="name">{this.props.name}</h3>
                <div className="status" 
                    onClick={ event => {
                        this.state.online 
                            ? this.setState({ online : false}) 
                            : this.setState({ online : true})
                            console.log("click ok")
                        }
                    }>

                    <div 
                        className={this.state.online 
                            ? "status-online" 
                            : "status-offline"} 
                    />
                    <p className="status-text">{this.state.online 
                        ? "online" 
                        : "offline"}</p>  
                </div>
            </div>
        </div>
      );
    }
  }

export default Contact;