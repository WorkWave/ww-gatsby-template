import React, { useContext } from 'react';
import PortableText from 'react-portable-text';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Collapse } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import PromotionContext from '../../../context/PromotionContext';

const useStyles = makeStyles((theme) => ({
	bar: {
		background: theme.workwaveBlue,
	},
	text: {
		textAlign: 'center',
		color: 'white',
		fontSize: '1.4rem',
		fontWeight: 425,
		marginLeft: '4rem',
		[theme.breakpoints.down('md')]: {
			marginLeft: '0',
		},
		[theme.breakpoints.down('sm')]: {
			marginLeft: '4rem',
		},
		[theme.breakpoints.down('xs')]: {
			marginLeft: '0',
		},
	},
}));

export const PromotionBar = ({ promotion }) => {
	const { open, setOpen } = useContext(PromotionContext);
	const classes = useStyles();
	return (

			<Collapse in={open}>
				<Grid
					container
					direction='row'
					justifyContent='center'
					alignItems='center'
					className={classes.bar}>
					<Container fixed>
						<Typography variant='body1' className={classes.text}>
							{promotion._rawContent.map((content) => (
								<PortableText
									content={content}
									serializers={{
										link: ({ blank, children, href }) => {
											return (
												<a
													href={href}
													target='_blank'
													rel='noopener noreferrer'
													style={{
														fontWeight: 700,
														marginLeft: '.5rem',
														color: 'white',
														textDecoration: 'none',
													}}>
													{children}
												</a>
											);
										},
									}}
								/>
							))}
						</Typography>{' '}
					</Container>
					<CloseIcon
						style={{
							cursor: 'pointer',
							color: 'white',
							position: 'relative',
							marginRight: '1rem',
						}}
						onClick={(e) => setOpen(false)}
						fontSize='large'
					/>
				</Grid>
			</Collapse>
	);
};
