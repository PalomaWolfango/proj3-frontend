import React from "react";
import MenuUser from "../Menu/menu-user";

class ProjectDetails extends React.Component {
    render() {
        return(
            <div>
                <><MenuUser /> 
                <h1 style={{color: 'grey', margin: '15px', marginTop: '100px', textAlign: 'center'}}>Project Details</h1>
                </>

            </div>	
        )
    }
}

export default ProjectDetails;