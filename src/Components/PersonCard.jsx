import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default class PersonCard extends Component{
    constructor(props){
        super(props);
        this.state = {
            wins : this.props.person.wins,
            losses : this.props.person.losses
        }
    }
    
    render(){
        return (
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"> {this.props.person.lastname}, {this.props.person.firstname}</h4>
                    <p className="card-text">Age: {this.props.person.age}</p>
                    <p className="card-text">Wins: {this.state.wins}</p>
                    <p className="card-text">Losses: {this.state.losses}</p>
                    {/* button.btn.btn-success */}
                    {/* button.btn.btn-danger */}
                    <button 
                        className="btn btn-success"
                        // setState is a built in function that allows updating 
                        onClick={() => this.setState({wins: this.state.wins +1})}
                        >add win
                    </button>
                    <button 
                        className="btn btn-danger"
                        onClick={() => this.setState({losses: this.state.losses +1})}
                        >add loss
                    </button>
                </div>
            </div>
        )
    }
}