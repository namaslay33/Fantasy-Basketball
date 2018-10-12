import React from 'react';
import {reduxForm, Field} from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        
    }

    onSubmit = (formProps) => {

        console.log(formProps)
        
        this.props.signin(formProps, () => {
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

                <button>Signin</button>

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
    reduxForm({ form: 'signin' }) 
)(Signin);