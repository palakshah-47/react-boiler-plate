// @packages
import LoginForm from '../../components/organisms/login-form';
import PropTypes from 'prop-types';
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// @scripts
import Login from '../../components/templates/login';

const LoginPage = ({
    id
}) => (
    <Login
        id={id}
        backgroundComponent={(
            <div style={{
                backgroundClip: '#ff0',
                opacity: 0.5,
                width: '100%',
                height: '100%'
            }}
            />
        )}
    >
        <LoginForm />
    </Login>
);


LoginPage.propTypes = {
    id: PropTypes.string
};

LoginPage.defaultProps = {
    id: ''
}

export default LoginPage;
