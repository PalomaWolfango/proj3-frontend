import React from "react";
import MenuLogin from "../Menu/menu-login";

class LoginAdmin extends React.Component {
    render(){
        return(
            <><div> <MenuLogin /> </div>
            <div className="container" style={{ border: '3px solid #00867d', padding: '100px 35px', marginTop: '120px' }}>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary" href="#">Submit</button>
                </form>
            </div></>
        )
    }
} 

export default LoginAdmin;