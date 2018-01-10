import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as Actions from '../actions/index.js'


class Navigation extends React.Component{
    handleSignOut(){
        this.props.signOutUser()
    };

    render(){
        return <nav className='navbar navbar-default'>
                  <div className='container-fluid'>
                    <div className='navbar-header'>
                        <Link to='/home' className='navbar-brand'>Dogether</Link>
                    </div>
                    
                    <ul className='nav navbar-nav navbar-right' id='navig'>
                         <li className='nav-item' key={1}>
                            <Link className='nav-link' to='/gallery'>Gallery</Link>
                        </li>
                         <li className='nav-item' key={2}> 
                            <Link className='nav-link' to='/dogFriendly'> Dog-Friendly</Link>
                        </li>
                        <li className = 'nav-item'key={3}>
                            <Link className = 'nav-link'to = '/vets'>Vet</Link> 
                         </li>
                        <li className = 'nav-item' key={4}>
                            <Link className = 'nav-link' to = '/adoption'>Adoption</Link> 
                        </li>
                        <li className='nav-item' key={5}>
                            <a  id='signout' className='nav-link' onClick={()=>this.handleSignOut()}>Sign Out</a>
                        </li>

                    </ul>
                   
                   </div>
                
                </nav>
    }
    
}
export default connect(null, Actions)(Navigation);