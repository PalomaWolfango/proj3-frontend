import React from "react";

class LoginProjectManager extends React.Component {
    render(){
        return(
            <><div> <MenuLogin /> </div>
            <div className="container" style={{ border: '3px solid #00867d', padding: '50px 35px', marginTop: '120px', maxWidth: '500px' }}>
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
                    <div style={{textAlign: 'center', marginTop: '60px'}}>
                    <button type="submit" class="btn btn-info" href="#" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Submit</button>
                    </div>
                    
                </form>
            </div></>
        )
    }
} 

export default LoginProjectManager;