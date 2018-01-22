import React from 'react';
import Navigation from './Navigation.js';
import {Link} from 'react-router-dom';
export default class Vets extends React.Component {
    render() {
        return <div>
               <Navigation/>
               <div>
                   <Link className='btn btn-primary mt-4 ml-4' to='/addVet'>Add a vet</Link>
                </div>
               </div>

    }
}