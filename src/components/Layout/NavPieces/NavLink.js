import React from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import { MenuItem, Typography, Container, Fade } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import {
	usePopupState,
	bindHover,
	bindMenu,
} from 'material-ui-popup-state/hooks';

const useStyles = makeStyles((theme) => ({
	options: {
		position: 'relative',
		padding: '.7rem',
		transition: 'all 1s',
	},
	link: {
		color: theme.workwaveBlue,
		textDecoration: 'none',
	},
	icon: {
		paddingTop: '10px',
		marginLeft: '-5px',
		transition: 'all 1s',
	},
	popoverPaper: {
		width: '100%',
		boxShadow: 'none',
	},
}));

export const NavLink = ({ header, links }) => {
	const classes = useStyles();
	const popupState = usePopupState({
		variant: 'popover',
		popupId: 'demoMenu',
	});
	return (
		<div>
			<div
				style={{ padding: '2rem 0', margin: '-2rem 0', marginRight: '.5rem' }}
				{...bindHover(popupState)}>
				<Link className={classes.link} to={`/${header}`}>
					<Typography className={classes.link}>
						{header}

						{popupState.isOpen ? (
							<ExpandLess className={classes.icon} />
						) : (
							<ExpandMore className={classes.icon} />
						)}
					</Typography>
				</Link>
			</div>

			<HoverMenu
				{...bindMenu(popupState)}
				getContentAnchorEl={null}
				PopoverClasses={{
					paper: classes.popoverPaper,
				}}
				TransitionComponent={Fade}
				TransitionProps={{ timeout: 2 }}
				anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
				transformOrigin={{ vertical: 'top', horizontal: 'left' }}>
				<Container fixed>
					{links.map((link, index) => (
						<Link className={classes.link} to={`/${link.slug.current}`}>
							<MenuItem key={index}>{link.title}</MenuItem>
						</Link>
					))}
				</Container>
			</HoverMenu>
		</div>
	);
};
