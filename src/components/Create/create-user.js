import React from "react";
import MenuAdmin from "../Menu/menu-admin";

class CreateUser extends React.Component {
    render(){
        return(
            <>
            <MenuAdmin />
            <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Create User</h1>
            <div className="container" style={{ border: '3px solid #00867d', padding: '50px 35px', marginTop: '90px', maxWidth: '500px' }}>
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control"  placeholder="Name"/>
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Contact" />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder="Username" />
                    </div>
                    <div class="mb-3">
                        <input type="password" class="form-control" placeholder="Password" />
                    </div>
                    <div>
                        <div style={{float: 'left', marginBottom: '20px'}} >
                        <select name="user-type" id="userType">
                            <option value="tipo0">User Type</option>
                            <option value="Administrator">Administrator</option>
                            <option value="User">User</option>
                            <option value="Project Manager">Project Manager</option>
                        </select>
                    </div>
                    </div>
                    <div style={{textAlign: 'center', marginTop: '120px'}}>
                    <button type="submit" class="btn btn-info" href="#" style={{backgroundColor: '#00867d', border: '#00867d', color: 'white', padding: '5px 60px'}}>Create</button>
                    </div>
                </form> 
            </div></>
        )
    }
} 

export default CreateUser;