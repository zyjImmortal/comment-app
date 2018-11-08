import React, { Component } from 'react';
import ReactDom from 'react-dom';
import * as serviceWorker from './serviceWorker';

class Card extends Component{
    render() {
        return (
            <div className="card">
                <div className="card-content">
                    {this.props.content}
                </div>

            </div>
        )
    }
}

ReactDom.render(
    <Card content={
        <div>
            <h2>React.js 小书</h2>
       <div>开源、免费、专业、简单</div>
      订阅：<input />
        </div>
    }/>,
    document.getElementById('root')
)

// serviceWorker.unregister();
