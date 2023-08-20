import React from 'react';
import '../styles/login.scss'

class Login extends React.Component {
    switchCard(event) {
        event.preventDefault();
        console.log(event.target);
    }

    register(event) {
        event.preventDefault();
        console.log(event.target);
    }

    login(event) {
        event.preventDefault();
        console.log(event.target);
    }

    render() {
        return (
            <>
            <div className="container">
                {/* Login part  */}
                <div className="card">
                    <p>Đăng Nhập</p>
                    <form>
                        <input type="text" id="username" placeholder="Email/Số điện thoại/Tên đăng nhập"/>
                        <input type="password" id="password" placeholder="Mật khẩu"/>
                        <button className="login-btn" type="submit" onClick={(event) => this.login(event)}>Đăng Nhập</button>
                    </form>
                    <div className="additional-choice">
                        <a href='#'>Quên mật khẩu</a>
                        <a href='#'>Đăng nhập với SMS</a>
                    </div>

                    <div className="switch">
                        Bạn mới biết đến Shopee?
                        <a href="#" onClick={(event) => this.switchCard(event)}>Đăng ký</a>
                    </div>
                </div>


                {/* <div className="card" style={{display: 'none'}}>
                    <h2>Register Form</h2>
                    <form>
                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" id="fullname" placeholder="Enter your full name"/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email"/>

                    <label htmlFor="new-password">New Password</label>
                    <input type="password" id="new-password" placeholder="Enter your new password"/>

                    <button type="submit" onClick={(event) => this.register(event)}>Đăng ký</button>
                    </form>
                    <div className="switch">Already have an account? <a href="#" onClick={(event) => this.switchCard(event)}>Login here</a></div>
                </div> */}
            </div>
        </>
        );
    }
}

export default Login; 