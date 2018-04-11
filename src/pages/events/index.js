import React from 'react';
import PageHeader from '../../components/PageHeader';
import Link from 'gatsby-link';

function Events(props) {
  return (
    <div>
      <PageHeader title="GoVoteTusc Events" />
      <section className="section" style={{ paddingTop: '0px' }}>
        <div
          className="container"
          style={{ margin: '0px auto', maxWidth: 900 }}
        >
          <div className="content">
            <p style={{ marginBottom: '2rem' }}>
              Check out a list of our upcoming events below. We hope to see you
              there! If you have any questions feel free to reach out to us via
              our <Link to="/contact">Contact Page</Link> or at our Facebook
              page below.
            </p>

            <div className="columns">
              <div className="column">
                <div className="center-row">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgovotetusc%2F&tabs=events&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=135610003950180"
                    width="500"
                    height="500"
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameborder="0"
                    allowTransparency="true"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
