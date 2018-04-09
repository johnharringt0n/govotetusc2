import React from 'react';
import PropTypes from 'prop-types';
import { BallotMeasuresTemplate } from '../../templates/ballot-measures';

const BallotMeasuresPagePreview = ({ entry, widgetFor }) => (
  <BallotMeasuresTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

BallotMeasuresPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BallotMeasuresPagePreview;
