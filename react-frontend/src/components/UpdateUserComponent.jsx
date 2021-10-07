import React, { Component } from 'react'
import UserService from '../services/UserService';

class UpdateUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            dateOfBirth: '',
			city: '',
			mobileNo: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
		this.changeDateOfBirthHandler=this.changeDateOfBirthHandler.bind(this);
		this.changeCityHandler=this.changeCityHandler.bind(this);
		this.changeMobileNoHandler=this.changeMobileNoHandler.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( (res) =>{
            let user = res.data;
            this.setState({firstName: user.firstName,
                lastName: user.lastName,
                dateOfBirth : user.dateOfBirth,
				city : user.city,
				mobileNo : user.mobileNo
            });
        });
    }

    updateUser = (e) => {
        e.preventDefault();
        let user = {firstName: this.state.firstName, lastName: this.state.lastName, dateOfBirth: this.state.dateOfBirth, city: this.state.city, mobileNo: this.state.mobileNo};
        console.log('user => ' + JSON.stringify(user));
        console.log('id => ' + JSON.stringify(this.state.id));
        UserService.updateUser(user, this.state.id).then( res => {
            this.props.history.push('/users');
        });
    }
    
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeDateOfBirthHandler= (event) => {
        this.setState({dateOfBirth: event.target.value});
    }
	
	changeCityHandler=(event) => {
	    this.setState({city: event.target.value});
	}
	
	changeMobileNoHandler=(event) => {
	    this.setState({mobileNo: event.target.value});
	}


    cancel(){
        this.props.history.push('/users');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update User</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                         <div className = "form-group">
                                            <label> Date Of Birth: </label>
                                            <input placeholder="Date Of Birth" name="dateOfBirth" className="form-control" 
                                                value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                        </div>
										 <div className = "form-group">
                                            <label> City: </label>
                                            <input placeholder="City" name="city" className="form-control" 
                                                value={this.state.city} onChange={this.changeCityHandler}/>
                                        </div>
										 <div className = "form-group">
                                            <label> Mobile No: </label>
                                            <input placeholder="Mobile No" name="mobileNo" className="form-control" 
                                                value={this.state.mobileNo} onChange={this.changeMobileNoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateUser}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateUserComponent