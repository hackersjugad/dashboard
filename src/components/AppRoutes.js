import React from 'react'
import {
	Paper,
	Grid
} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Switch, Route } from 'react-router-dom';
import Chart from '../Chart';
import Home from '../pages/Home';
import NotFound from "../pages/NotFound";



const useStyles = makeStyles((theme) => ({
	paper: {
		padding: theme.spacing(2),
		display: 'flex',
		overflow: 'auto',
		flexDirection: 'column',
	},
	fixedHeight: {
		height: 300,
	},
}));

function AppRoutes() {
	const classes = useStyles();
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
	return (
		<React.Fragment>
			<Grid item xs={12}>
				<Switch>
					<Route exact path="/" >
						<Home />
					</Route>
					<Route exact path="/dashboard">
						<Grid item xs={12}>
							<Paper className={fixedHeightPaper}>
								<Chart />
							</Paper>
						</Grid>
					</Route>
					<Route exact path="/map">
						Map
					</Route>
					<Route exact path="/reports">
						Reports
					</Route>
					<Route exact path="/users">
						Users
					</Route>
					<Route component={NotFound} />
				</Switch>
			</Grid>
		</React.Fragment>
	)
}

export default AppRoutes
