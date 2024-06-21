import React, { useState, useEffect } from 'react';
import '../../styles/css/Login.css';
import PABLOSVG from '../../assets/svg/login/pablo.svg';
import UNION from '../../assets/svg/login/union.svg';
import LENDSQR from '../../assets/svg/login/lendsqr.svg';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('adeji@gmail.com');
    const [password, setPassword] = useState<string>('12345678');
    const [error, setError] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { login } = useAuthContext();
    const [imageLoading, setImageLoading] = useState<boolean>(true);

    const emailCheck: string = 'adeji@gmail.com';
    const passwordCheck: string = '12345678';

    const navigate = useNavigate();

    useEffect(() => {
        const image = new Image();
        image.src = PABLOSVG;
        image.onload = () => {
            setImageLoading(false);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === emailCheck && password === passwordCheck) {
            login();
            return navigate('/');
        } else {
            setError('Invalid credentials');
            console.log(error);
        }
    };

    return imageLoading === false ? (
        <div className='log-in-page'>
            <section className="logo-section">
                <span className='logo'>
                    <img className='union' src={UNION} alt="logo-1" />
                    <img className='lendsqr' src={LENDSQR} alt="logo-2" />
                </span>
                <img src={PABLOSVG} alt="background-img" />
            </section>

            <section className="form-section">
                <span className='logo'>
                    <img className='union' src={UNION} alt="" />
                    <img className='lendsqr' src={LENDSQR} alt="" />
                </span>

                <div className="container">
                    <h1>Welcome!</h1>
                    <span className="login-details-note">Enter details to Login</span>

                    <form onSubmit={handleSubmit}>
                        <div>
                            <input
                                placeholder='Email'
                                type="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setError("");
                                }}
                            />
                        </div>
                        <div className="password-input-container">
                            <input
                                placeholder='Password'
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setError("");
                                }}
                            />
                            <span
                                className="toggle-password"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                        <Link to='#' className='forgot-password'>FORGOT PASSWORD?</Link>
                        <button disabled={(!email || !password)}>
                            <span>LOG IN</span>
                        </button>
                    </form>
                    <span className="error">
                        {error && error}
                    </span>
                </div>
            </section>
        </div>
    ) : <></>
}
