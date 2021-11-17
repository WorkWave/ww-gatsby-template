import * as React from 'react';

import { Grid, Container, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	text: {
		color: theme.workwaveBlue,
	},
}));

const IndexPage = () => {
	const classes = useStyles();
	return (
		<Container
			fixed
			style={{ paddingTop: '4rem', paddingBottom: '8rem' }}
			className={classes.text}>
			<Typography
				variant='h4'
				style={{ textAlign: 'center', marginBottom: '2rem' }}>
				This is the WorkWave Gatsby Starter
			</Typography>
			<Typography variant='h6' gutterBottom>
				This template includes a theme, most of the necessary plugins for our
				purposes, and some layout and presentational components that we will be
				using across all the redesign sites. Simply rename this project, change
				the name in the gatsby config, package.json, and package-lock, and push
				it to its new appropriate repository.
			</Typography>
			<Typography variant='h6'>
				If you run into issues with graphql queries, make sure that you have a
				.env file at the root of the project with:{' '}
				<pre>MY_SANITY_TOKEN=whateverthetokenis</pre>
			</Typography>
		</Container>
	);
};

export default IndexPage;
