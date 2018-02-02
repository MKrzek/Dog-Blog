import React from 'react';

export default class Footer extends React.Component{
    render(){
        return <div>
            <ul className="nav navbar d-flex justify-content-around">
              <li className="nav-item mb-3 mt-2">
                <a target="_blank" rel="noopener noreferrer" className="media text-secondary" href="https://www.facebook.com/malgorzata.krzek">
                  <i className="fa fa-facebook-square fa-2x text-secondary" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item mb-3 mt-2">
                <a target="_top" rel="noopener noreferrer" className="media text-secondary" href="mailto: mkrzek@googlemail.com?Subject=Wow%20Wow">
                  <i className="fa fa-envelope fa-2x  text-secondary" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item mb-3 mt-2">
                <a target="_blank" rel="noopener noreferrer" className="media text-secondary" href="https://plus.google.com/communities/116921730043933493017">
                  <i className="fa fa-google-plus fa-2x  text-secondary" aria-hidden="true" />
                </a>
              </li>
              <li className="nav-item mb-3 mt-2">
                <a target="_blank" rel="noopener noreferrer" className="media text-secondary" href="https://github.com/MKrzek">
                  <i className="fa fa-github fa-2x  text-secondary" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>;
    }
}
