import React from 'react';
import {Link} from 'react-router-dom';
import * as Actions from '../actions/index.js';
import {connect} from 'react-redux';
import _  from 'lodash';

import DogFriendlyData from './DogFriendlyData.js';
import Navigation from './Navigation.js';
class DogFriendly extends React.Component {

componentDidMount=()=>{
    this.props.displayDogFriendly()
}
showDogFriendly=()=>{
    if (this.props.dogFriendly) {
       for (const key of Object.keys(this.props.dogFriendly)) {
         this.props.dogFriendly[key].key = key;
       }
     }

    console.log ('friendly props', this.props.dogFriendly)
    return _.map(this.props.dogFriendly, data=>{
           console.log ('data frendly', data)
        return <DogFriendlyData key={data.key} data={data}/>
    })
}
    render() {
        return<div> 
              <Navigation/>
              <div className='container'>
              <div className='row'>
              <h2>Dog Friendly Places</h2>
              <Link to='/addDogFriendly' className='btn btn-primary'>Add Dog Friendly Places</Link>
              </div>
              <div className='mt-5'>
                  {this.showDogFriendly()}
              </div>
              </div>
              </div>

    }
}
function mapStateToProps(state){
    console.log ('state dogFriendly', state.displayDogFriendly)
    return{
        dogFriendly: state.displayDogFriendly
        
    }
}
export default connect (mapStateToProps, Actions) (DogFriendly);