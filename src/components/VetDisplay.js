import React from 'react';
export default class VetDisplay extends React.Component{
    render(){
        console.log ('display vets', this.props.vet)
        const {vet, streetName, streetNumber, www, phone} = this.props.vet
        return <div className='col card ml-3 mr-2 text-center vetItem'>
                    <h3 className='mb-2 mt-4'>{vet}</h3>
                    <p>{streetName} {streetNumber}</p>
                    <a  target='_blank' href={`https://${www}`} className='mt-1'>{www}</a>
                    <p className='mt-1'>{phone}</p>
              </div>
              
              
    }
}