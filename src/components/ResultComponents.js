import React,{Component} from 'react';
class ResultComponents extends Component{
    render(){
        let {result} = this.props;
        return(
          <div className='result'alignContent = 'right'>
              <p alignContent = 'right'>{result}</p>
          </div>
        );
    }
}
export default ResultComponents;
