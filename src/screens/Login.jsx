import React from 'react';
import FormWithMotionAndHook from '../components/Forms/FormWithMotionAndHook';
// import FormLogin from '../components/Forms/FormLogin';
// import FormLoginWithHook from '../components/Forms/FormLoginWithHook';

const Login = () => {
    return (
        <>
            {/* <FormLogin titleForm="Login"/>    */}
            {/* <FormLoginWithHook titleForm="Login"/>    */}
            <FormWithMotionAndHook titleForm="Login"/>
        </>
    );
}

export default Login;
