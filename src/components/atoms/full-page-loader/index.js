// @packages
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const FullPageLoader = ({ classes }) => (
  <div className={classes.fpContainer}>
    <div className={classes.fpLoader}>
      <CircularProgress />
    </div>
  </div>
);

FullPageLoader.propTypes = {
    classes: PropTypes.object.isRequired
};

FullPageLoader.defaultProps = {
};

export default withStyles(styles)(FullPageLoader);
