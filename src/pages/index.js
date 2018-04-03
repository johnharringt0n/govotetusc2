import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 className="has-text-weight-bold is-size-2">Go Vote Tusc Co</h1>
          </div>
          <div className="content">
            <p>This is some more content!</p>
          </div>
          <a href="" className="button">
            This is a button?
          </a>
        </div>
      </section>
    )
  }
}
