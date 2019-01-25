import React from 'react';

class NavBar extends React.Component {
    state = {}
    render() {
        return (
            <div>

                <nav class="navbar navbar-light bg-dark" style={{ backgroundColor: `pink` }}>
                    <a class="navbar-brand" href="#">
                        <img src="images/4.jpg" width="75" height="75" alt=""></img>
                        
                        <button class="btn btn-outline-success" type="button">Upload Media</button>
                        <button class="btn btn-outline-success" type="button">My Media</button>
                        <button class="btn btn-outline-success" type="button">Followers</button>
                        
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Account</button>
                    </a>
                </nav>
                

                
                
            </div>
            
        );
    }
}

export default NavBar;