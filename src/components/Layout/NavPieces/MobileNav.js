import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Popover, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {
	usePopupState,
	bindTrigger,
	bindPopover,
} from 'material-ui-popup-state/hooks';

import { MobileNavLink } from './MobileNavLink';

const useStyles = makeStyles((theme) => ({
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
	},
	popoverPaper: {
		width: '100%',
		boxShadow: 'none',
		maxHeight: 'unset',
		maxWidth: 'unset',
		left: '0 !important',
		background: theme.workwaveBlue,
		height: 'calc(100vh - 300px)',
		[theme.breakpoints.down('sm')]: {
			height: 'calc(100vh - 370px)',
		},
		[theme.breakpoints.down('xs')]: {
			height: 'calc(100vh - 400px)',
		},
	},
	cta: {
		margin: '0 1rem',
		[theme.breakpoints.down('xs')]: {
			fontSize: '.8rem',
			padding: '8px 8px',
		},
	},
	partners: {
		textDecoration: 'none',
		padding: '1rem',
		color: theme.white,
	},
}));

export const MobileNav = ({ nav, handleModalClick }) => {
	const classes = useStyles();
	const popupState = usePopupState({
		variant: 'popover',
		popupId: 'mobileMenu',
	});
	return (
		<>
			<Button
				variant='contained'
				color='primary'
				size='large'
				onClick={(e) => handleModalClick(e)}
				className={classes.cta}>
				{nav.ctaText}
			</Button>
			<div
				{...bindTrigger(popupState)}
				style={{ padding: '2rem 0', margin: '-2rem 0' }}>
				{popupState.isOpen ? (
					<CloseIcon style={{ color: '#002D5C' }} size='large' />
				) : (
					<MenuIcon style={{ color: '#002D5C' }} size='large' />
				)}
			</div>

			<Popover
				{...bindPopover(popupState)}
				classes={{ paper: classes.popoverPaper }}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}>
				<div>
					<MobileNavLink
						header={nav.industryLinks[0].type}
						links={nav.industryLinks}
					/>
					<MobileNavLink
						header={nav.productLinks[0].type}
						links={nav.productLinks}
					/>
					<MobileNavLink
						header={nav.companyLinks[0].type}
						links={nav.companyLinks}
					/>
					<MobileNavLink
						header={nav.salesLinks[0].type}
						links={nav.salesLinks}
					/>
					<MobileNavLink
						header={nav.supportLinks[0].type}
						links={nav.supportLinks}
					/>
					<Typography
						style={{ padding: '12px 0', borderBottom: '.25px #33383b solid' }}>
						<Link to='/partners' className={classes.partners}>
							{nav.partnerNavLink.title}
						</Link>
					</Typography>
				</div>
			</Popover>
		</>
	);
};
