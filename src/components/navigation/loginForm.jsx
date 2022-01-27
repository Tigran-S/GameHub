import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { userActions } from '../../_actions';
import "../../App.css";

const LoginForm = props => {
  const [userData, setUserData] = useState({
    userName: '',
    password: ''
  });
  const [submitted, setSubmited] = useState(false);

  const loggingIn = localStorage.getItem('user') !== null;
  const { username, password } = userData;

  useEffect(() => {
    props.dispatch(userActions.logout());
  }, [props]);

  const handleChange = e => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  }

  const handleSubmit = e => {
    e.preventDefault();

    setSubmited(true);
    const { username, password } = userData;
    const { dispatch } = props;
    if (username && password) {
        dispatch(userActions.login(username, password));
    }
  }

  return (
    <div className="login">
        <h2>Login</h2>
        <form name="form" onSubmit={handleSubmit}>
            <div className={'form-group' + (submitted && !username ? ' has-error' : '')}>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" value={userData.username || ''} onChange={handleChange} />
                {submitted && !username &&
                    <div className="help-block">Username is required</div>
                }
            </div>
            <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" value={userData.password || ''} onChange={handleChange} />
                {submitted && !password &&
                    <div className="help-block">Password is required</div>
                }
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggingIn: state.authentication.loggingIn
  };
};

export default connect(mapStateToProps)(LoginForm);
