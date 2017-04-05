import React, {Component} from 'react'
import {connect} from 'react-redux'
import {map} from 'ramda'
import BasicButton from '../components/basic-button'


const getFamily = (id) => fetch('http://localhost:5000/family' + id)

class Family extends Component {


  render() {
    const li = (child) => {
      return (
        <li key={child.id}>
          <BasicButton
            onClick={e => this.props.history.push('/child/' + child.id)}>
            {child.childName}</BasicButton>
        </li>
      )
    }

    const props = this.props
    return(
      <div className='ma2'>
      <h4>Hi {props.family.parentLast} family!</h4>
      <h4>Welcome to your very own Parker home page!</h4>
      <h4>Who wants to go first today?</h4>
      <h4>Go to YOUR very own Parker page and lets have some fun!</h4>
      <hr />
      <ul>
        {map(li, props.children)}
      </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  family: state.family,
  children: state.children
})
const mapActionsToProps = (dispatch) => {
  set: (family) => dispatch({type: 'SET_FAMILY', payload: family})
}
const connector = connect(mapStateToProps)

export default connector(Family)
