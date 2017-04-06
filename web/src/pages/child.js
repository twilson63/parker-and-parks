import React, {Component} from 'react'
import {connect} from 'react-redux'


class Child extends Component {
  componentDidMount() {
    fetch('http://localhost:5000/children/' + this.props.match.params.familyId)
      .then(res => res.json())
      .then(child => this.props.dispatch({type: 'SET_CHILD',
      payload: child}))
  }

  render() {
    const props = this.props

    return(
      <div className='ma2'>
        <ul className="list pl0 mt0 measure center">
          <li className="flex items-center lh-copy pa1 ph0-l bb b--black-10">
      <img  className='ba b--black-10 db br-100 w3 w3-ns h3 h3-ns'
          src='/parker-bear-orginal-painting.jpg' alt='Parker Bear on swing'></img>
          <div className="pl3 flex-auto">
          <span className="f4 db black-70">Hi {props.child.childName}!</span>
        </div>
        </li>
        </ul>
        <div className="dtc v-mid pl3">
      <h4>Welcome to your very own Parker home page!</h4>
      </div>


      <hr />
        <h3>{props.child.childName}s Hampton Park activities:</h3>
        <div className='pl2'>
        <h4>Activities:</h4>
        <h4>Badges:</h4>
        <h4>Parker points:</h4>
        <h4>Family Rank:</h4>
        <h4>Park Rank:</h4>
        <h4>CPC Rank:</h4>
        <hr />
      </div>
      <div className='' >
        <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green"
          onClick={e => this.props.history.push('/hampton-park')}  href="#0">Hampton Park</a>
        <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green"
          onClick={e => this.props.history.push('/colonial-lake')} href="#0">Colonial Lake</a>
        <a className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-green"
          onClick={e => this.props.history.push('/child')} href="#0">Lilly's Page</a>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  children: state.children
  child: state.child
}
const mapActionsToProps = (dispatch) => {
  set: (child) => dispatch({type: 'SET_CHILD', payload: child})
}
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(Child)
