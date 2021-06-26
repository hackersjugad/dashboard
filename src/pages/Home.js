import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
	main: {
		height: "100%",
		backgroundImage: 'url("/background_world.svg")',
		backgroundRepeat: "no-repeat",
		backgroundSize: "cover",
		backgroundPosition: "50% 0",
		display: "flex",
		flexDirection: "column",
		justifyContent: "flex-end",
		// alignItems: "flex-end",
		[theme.breakpoints.down('xs')]: {
			alignItems: "flex-start",
			justifyContent: "flex-start",
		},
	},
	h1: {
		color: theme.palette.grey[800],
		fontWeight: 'bold',
		textShadow: `1px 1px 10px ${theme.palette.background.default}`,
		[theme.breakpoints.down('sm')]: {
			fontSize: theme.spacing(8.5)
		},
		[theme.breakpoints.down('xs')]: {
			textAlign: "left",
			fontSize: theme.spacing(5)
		},
	},
	text: {
		textShadow: `1px 1px 10px ${theme.palette.background.paper}`,
		fontWeight: 500,
		[theme.breakpoints.down('xs')]: {
			textAlign: "left",
		}
	}
}));

function Home() {
	const classes = useStyles();
	return (
		<div className={classes.main}>
			<Typography variant="h1" color="initial" className={classes.h1} align="right">Crime</Typography>
			<Typography variant="h1" color="initial" className={classes.h1} align="right">Rate Prediction</Typography>
			<Typography variant="body1" color="initial" className={classes.text} align="right">Predict and Classify criminal activities in an area that will help in preventing and reducing the crime. </Typography>
		</div>
	)
}

export default Home
