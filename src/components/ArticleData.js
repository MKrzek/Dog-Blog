import React from "react";
import PreviewPicture from "./PreviewPicture.js";
import {connect} from 'react-redux';
import Navigation from './Navigation.js';

class ArticleData extends React.Component {

  
  render() {
    const params=this.props.match.params.id;
    console.log ('params', params)
    const { title, content, picture } = this.props.article;
    return ( <div>
            <Navigation/>
      <div className="card ml-3">
        <div>
          <h4 className="text-justify mt-2 ml-2 mr-2 articlePreview">{title}</h4>
        </div>
        <div>
          <div className='ml-2 mr-2'>Content: {content}</div>
        </div>
        <div className='mb-2 ml-2 mr-2' >
          <PreviewPicture pictureUrl={picture} />
        </div>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  
  return {
    article: state.sendDataToArticleData
  }
}
export default connect (mapStateToProps, null) (ArticleData)