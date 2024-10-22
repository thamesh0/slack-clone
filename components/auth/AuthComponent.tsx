"use client";
import React, {useState} from 'react';
import {AuthFlow} from "@/components/auth/authTypes";
import SignupCard from "@/components/auth/SignupCard";
import LoginCard from "@/components/auth/LoginCard";

const AuthComponent = () => {
    const [authType, setAuthType] = useState<AuthFlow>("signUp")
    return (
        <div className={'h-full flex items-center justify-center'}>
            {authType === 'signUp' ? <SignupCard/> : <LoginCard/>}
        </div>
    );
};

export default AuthComponent;
