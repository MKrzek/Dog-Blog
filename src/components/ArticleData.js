import React from 'react'
export default class ArticleData extends React.Component{
    render(){
        const{title, content}=this.props.article
        return(
            <div>
            <div>
                <h4>Title: {title}</h4>
            </div>
            <div>
                <div>Content: {content}</div>
            </div>
            </div>

        )
    }
}