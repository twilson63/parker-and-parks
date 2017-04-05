import React from 'react'


const Activity = (props) => {
  return(
    <main className="mw6 center">
      <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
        <div className="dtc w2 w3-ns v-mid">
          <img src="http://mrmrs.io/photos/p/2.jpg" className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns"
            alt='activity-detail.jpg'/>
        </div>
        <div className="dtc v-mid pl3">
          <h1 className="f6 f5-ns fw6 lh-title black mv0">Run Around the Track </h1>
          <h2 className="f6 fw4 mt0 mb0 black-60">20 Parker points!</h2>
        </div>
        <div className="dtc v-mid">
          <form className="w-100 tr">
            <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60" type="submit">+ This One!</button>
          </form>
        </div>
      </article>
    </main>
  )
}

export default Activity
