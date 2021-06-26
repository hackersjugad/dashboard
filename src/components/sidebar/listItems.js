import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import RoomIcon from '@material-ui/icons/Room';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link as RouterLink } from 'react-router-dom'

export const mainListItems = (
    <>
        <ListItem button to='/dashboard' component={RouterLink}>
            <ListItemIcon>
                <DashboardIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button to='/map' component={RouterLink}>
            <ListItemIcon>
                <RoomIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary="Map" />
        </ListItem>
        <ListItem button to='/reports' component={RouterLink}>
            <ListItemIcon>
                <BarChartIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button to='/users' component={RouterLink}>
            <ListItemIcon>
                <PeopleIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary="Users" />
        </ListItem>
        <ListItem button to='/intigrations' component={RouterLink}>
            <ListItemIcon>
                <LayersIcon color='secondary' />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </>
);

export const secondaryListItems = (
    <div>
        {/*<ListSubheader inset>Saved reports</ListSubheader>*/}
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);