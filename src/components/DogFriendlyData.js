import React from "react";
export default class DogFriendlyData extends React.Component {
  render() {
    const { place, www, description } = this.props.data;
    return (
      <div className="col-md-3 card ml-1 mr-1 mb-4 text-center friendlyItem">
        <h3 className="mb-2 mt-4">{place}</h3>
        <p>{description}</p>
        <a target="_blank" href={`https://${www}`}>
          {www}
        </a>
      </div>
    );
  }
}
