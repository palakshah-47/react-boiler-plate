// @packages
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core';

// @styles
import styles from './styles';

const ActionButton = ({
    child, className, classes, disableRipple, disabled, endIcon, label, onClick, startIcon, type,
    ...moreprops
}) => {
    const buttonStyle = classNames(
        classes.mainContainer,
        className
    );

    return (
        <Button
            className={buttonStyle}
            disableRipple={disableRipple}
            disabled={disabled}
            onClick={onClick}
            endIcon={endIcon && (
                                <Icon>
                                {' '}
                                {endIcon}
                                {' '}
                                </Icon>
                            )}
            startIcon={startIcon && (
                                    <Icon>
                                    {' '}
                                    {startIcon}
                                    {' '}
                                    </Icon>
                                    )}
            type={type}
            {...moreprops}
        >
            {label}
            {child || <></>}
        </Button>
    );
};

ActionButton.propTypes = {
    child: PropTypes.node,
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
    disableRipple: PropTypes.bool,
    disabled: PropTypes.bool,
    endIcon: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    moreprops: PropTypes.object,
    onClick: PropTypes.func,
    startIcon: PropTypes.string,
    type: PropTypes.string
};

ActionButton.defaultProps = {
    child: <></>,
    className: null,
    disableRipple: false,
    disabled: false,
    endIcon: null,
    label: '',
    moreprops: {},
    onClick: Function.prototype,
    startIcon: null,
    type: 'button'
};

export default withStyles(styles)(ActionButton);
