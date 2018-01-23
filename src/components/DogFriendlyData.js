import React from 'react';
export default class DogFriendlyData extends React.Component{
    render(){
        const{place, www, description}=this.props.data
        return <div className='col card ml-3 mr-2 text-center'>
                <h3 className='mb-2 mt-4'>{place}</h3>
                <p>{description}</p>
                <a target='_blank' href={`https://${www}`}>{www}</a>
             </div>
    }
}