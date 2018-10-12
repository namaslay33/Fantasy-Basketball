import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        
    }

    onSubmit = (formProps) => {

        console.log(formProps)
        
        this.props.signup(formProps, () => {
            //Navigating user to a page after authentication
            this.props.history.push('/feature');
        });
    }

    render() {
        const {handleSubmit} = this.props;

        return (
          <div>
              <form onSubmit={handleSubmit(this.onSubmit)}>
                <fieldset>
                    <label>Email</label>
                    <Field 
                    name="email"
                    type="text"
                    component="input"
                    autoComplete="none"
                    
                    /> 
                </fieldset>
                <fieldset>
                    <label>Password</label>
                    <Field 
                    name="password"
                    type="password"
                    component="input"
                    autoComplete="none"
                    
                    />    
                </fieldset>

                <button>Signup</button>

                <div style={{color: 'red'}}>{this.props.errorMessage}</div>
              </form>
          </div>  
        );
    }
}

function mapStateToProps(state) {
    return { errorMessage: state.auth.errorMessage };
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({ form: 'signup' }) 
)(Signup);

