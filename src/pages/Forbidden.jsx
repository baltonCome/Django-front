import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import useAuth from '../services/useAuth'

const Forbidden = () => {

    const { setAuth } = useAuth();

    setAuth({});

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    return (
        <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <h1 class="display-1 fw-bold">403</h1>
                <p class="fs-3"> <span class="text-danger">Unauthorized!</span> It looks like you're not allowed to access this request.</p>
                <p class="lead">
                    Check your credentials and try again, or contact Admin
                </p>
                <Link onClick={navigate(from, {replace: true})} class="btn btn-primary">Back</Link>
            </div>
        </div>
    )
}

export default Forbidden