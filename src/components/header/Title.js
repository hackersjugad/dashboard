import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { Link as RouterLink } from 'react-router-dom';

export default function Title(props) {
    return (
        <Typography
            variant="h6"
            color="inherit"
            component={RouterLink} to="/"
            style={{ textDecoration: "none" }}
            noWrap
            gutterBottom>
            {props.children}
        </Typography>
    );
}

Title.propTypes = {
    children: PropTypes.node,
};