import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as Actions from '../actions/index.js';
import _ from 'lodash';
import Navigation from './Navigation.js';
import AdoptionData from './AdoptionData.js';

class Adoption extends React.Component {

  componentDidMount(){
      this.props.displayAdoption()
  } 
   
   showData=()=>{
        if (this.props.adoption) {
          for (const key of Object.keys(this.props.adoption)) {
              
            this.props.adoption[key].key = key;
          }
        }

        return _.map(this.props.adoption, dog=>{
            return <AdoptionData dog={dog} key={dog.key}/>
        })

   }
    render() {
        return <div>
               <Navigation/>
               <div>
                   <h2>Adopt a dog</h2>
                   <Link to='/addForAdoption'>Add a dog</Link>   
                </div>
                <div>
                    {this.showData()}
                </div>
              </div>

    }
}

function mapStateToProps(state){
    
    return {
        adoption: state.displayAdoption
    }
}
export default connect (mapStateToProps, Actions) (Adoption);
