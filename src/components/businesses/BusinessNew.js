import React, { Component } from 'react';
import { connect } from 'react-redux'
import { createBusiness } from '../../actions/userBusiness'
import { Redirect } from 'react-router-dom'

class NewBusiness extends Component {
    constructor(props){
        super(props);

        this.state = { 
            name: "",
            tax_id: "",
         }
    }


    handleChange = (e) => {
        console.log(e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createBusiness(this.state);
        this.props.history.push('/businesses');
            this.setState({
                name: "",
                tax_id: "",
            })
    }

    render() { 
        const { loggedIn } = this.props;
        // console.log("loggedIn", loggedIn)
        if (!loggedIn) return <Redirect to='/' />
        return ( 
            <div className="main">
                <div className="container-form">
                    <div className="middle-container">
                        <h1>Register Business</h1>
                        <p>Please fill in this form to register a buiness.</p>

                        <form onSubmit={this.handleSubmit}>
                        <div className="row"> 
                            <div className="label">    
                                <label htmlFor="name">Business name:  </label>
                            </div>  
                                <input type="text" name="name" id="name" placeholder="Enter Business Name" onChange={this.handleChange} required/>
                        </div>

                        <div className="row"> 
                            <div className="label">  
                                <label htmlFor="tax_id">Tax Id:  </label>
                            </div>  
                                <input type="text" name="tax_id" id="tax_id" placeholder="Tax Id" onChange={this.handleChange} required/>
                        </div>

                        <div className="row">
                            <input type="submit" value="Submit"></input>
                        </div>
                        </form>
                        
                    </div>
                </div>
            </div>

         );
    }
}

const mapStateToProps = ({ currentUser }) => {
    return {
      currentUser,
      loggedIn: !!currentUser
    }
  }

 
export default connect(mapStateToProps, { createBusiness })(NewBusiness);