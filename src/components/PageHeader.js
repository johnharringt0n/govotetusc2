import React from 'react';

function PageHeader({ title, subtitle }) {
  return (
    <section className="section" style={{ paddingBottom: '25px' }}>
      <h1 className="title is-2 has-text-primary has-text-weight-semi-bold has-text-centered">
        {title}
      </h1>
      <h3
        style={{ margin: '-18px 0px 12px 0px' }}
        className="subtitle is-4 has-text-centered has-text-weight-light is-capitalized has-text-link"
      >
        {subtitle}
      </h3>
      <div className="center-row">
        <div className="home-divider-line" />
      </div>
    </section>
  );
}

export default PageHeader;
