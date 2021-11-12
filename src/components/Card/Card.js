import React from "react";
import './Card.css'

export default class Card extends React.Component{

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    {this.props.your_name}
                </div>
                <div className="card-body">
                    {this.props.status}
                </div>
            </div>
        )
    }
}