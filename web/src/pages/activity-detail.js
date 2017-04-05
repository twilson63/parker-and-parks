import React from 'react'
import {connect} from 'react-redux'


const ActivityDetail = (props) => {
  return(
    <div>
      <h3 className='tc'>Hampton Park Scavenger Hunt</h3>
      <hr />
        <div className='ma2'>
          <ul className="list pl0 mt0 measure center">
            <li className="flex items-center lh-copy pa1 ph0-l bb b--black-10">
            <img  className='ba b--black-10 db w3 w3-ns h3 h3-ns'
            src='/parker-bear-orginal-painting.jpg' alt='Parker Bear on swing'></img>
            <div className="pl3 flex-auto">
            <span className="f4 db black-70">Yay!  Let's go Run!</span>
          </div>
          </li>
          </ul>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  children: state.children
})
const mapActionsToProps = (dispatch) => ({

})
const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ActivityDetail)
