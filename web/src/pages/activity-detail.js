import React, {Component} from 'react'
import {connect} from 'react-redux'
import {filter} from 'ramda'
import Footer from '../components/footer'


class ActivityDetail extends Component  {

  render() {
    const props = this.props
    const action = filter(act => act.id === Number(props.match.params.id),
      props.parks.activity).pop()
      console.log(action)
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
              <span className="f4 db black-70">Yay! Let's go Run!</span>
            </div>
            </li>
            </ul>
            <div>
              <img className='ba b--black-10 db w4 h4 w3-ns h3-ns'
                src='/hampton-park-bandstand.jpg' alt='hampton park bandstand' />
            </div>
            <hr />
            <div>
              <h3>
                {action.story}
              </h3>
            </div>
            <div>
              <Footer />
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  child: state.child,
  parks: state.parks,
  activity: state.activity
})

const connector = connect(mapStateToProps)

export default connector(ActivityDetail)
