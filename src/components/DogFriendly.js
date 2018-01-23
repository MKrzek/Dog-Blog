import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from './Navigation.js'
export default class DogFriendly extends React.Component {
    render() {
        return <div> 
              <Navigation/>
              <h2>Dog Friendly Places</h2>
              <Link to='/addDogFriendly' className='btn btn-primary'>Add Dog Friendly Places</Link>
              </div>

    }
}