import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Typography,
	MenuItem,
	Grid,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
		color: theme.white,
	},
	summary: {
		background: theme.workwaveBlue,
		border: `.25px ${theme.darkGray} solid`,
	},
	link: {
		textDecoration: 'none',
		color: theme.workwaveBlue,
	},
}));

export const MobileNavLink = ({ header, links }) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Accordion>
				<AccordionSummary
					className={classes.summary}
					expandIcon={<ExpandMoreIcon style={{ color: 'white' }} />}
					aria-controls='panel1a-content'
					id='panel1a-header'>
					<Typography className={classes.heading}>{header}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Grid container direction='column'>
						{links.map((link, index) => (
							<Link className={classes.link} to={`/${link.slug.current}`}>
								<MenuItem key={index}>{link.title}</MenuItem>
							</Link>
						))}
					</Grid>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};
