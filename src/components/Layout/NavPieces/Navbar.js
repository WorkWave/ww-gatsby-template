import React, { useState, useContext } from 'react';
import { Link } from 'gatsby';

import { makeStyles } from '@material-ui/core/styles';
import {
	AppBar,
	Grid,
	ListItemText,
	Container,
	Toolbar,
	Paper,
	Menu,
	Popper,
	Button,
	List,
	Typography,
	MenuItem,
} from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { NavLink } from './NavLink';
import FormModalContext from '../../../context/FormModalContext';
import { MobileNav } from './MobileNav';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	appBar: {
		background: theme.white,
		color: theme.workwaveBlue,
		padding: '1rem 0',
		borderTop: `1.3px ${theme.lightGray} solid`,
	},
	navLogo: {
		display: 'block',
		marginTop: '18px',
		[theme.breakpoints.down('lg')]: {
			marginTop: '0',
		},
		[theme.breakpoints.down('sm')]: {
			marginBottom: '.75rem',
		},
		[theme.breakpoints.down('xs')]: {
			maxWidth: '200px',
			width: '200px',
			height: 'auto',
			marginBottom: '0',
		},
	},
	options: {
		color: theme.workwaveBlue,
		cursor: 'pointer',
		// padding: '.7rem',
		marginRight: '3px',
		marginTop: '12px',
		textDecoration: 'none',
		position: 'relative',
	},
	cta: {
		fontSize: '22px',
		marginLeft: '10px',
		[theme.breakpoints.down('md')]: {
			fontSize: '14px',
		},
	},
	popoverPaper: {
		width: '100%',
		height: '100%',
		maxHeight: 'unset',
		maxWidth: 'unset',
	},
	img: {
		height: '3rem',
		marginTop: '.5rem',
		[theme.breakpoints.down('xs')]: {
			height: '2rem',
		},
	},
}));

export const Navbar = ({ nav }) => {
	const classes = useStyles();
	const { formModalOpen, handleModalClick, setFormModalOpen } =
		useContext(FormModalContext);
	const [selected, setSelected] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);

	const handleHover = (e, selectedDropdown) => {
		setSelected(selectedDropdown);

		setAnchorEl(e.currentTarget);
	};

	const handleMouseLeave = (e) => {
		setAnchorEl(null);
	};

	const med = useMediaQuery('(max-width: 960px)');
	const sm = useMediaQuery('(max-width: 600px)');
	const xs = useMediaQuery('(max-width: 480px)');
	return (
		<>
			<AppBar position='sticky' className={classes.appBar} elevation={0}>
				<Toolbar>
					<Container className={classes.root} fixed>
						<Grid container direction='row' alignItems='center'>
							<Grid item xs={6} md={2}>
								<Link to='/'>
									<img
										src={nav.wwNavLogo.asset.url}
										className={classes.img}
										alt='logo'
									/>
								</Link>
							</Grid>
							<Grid
								item
								xs={6}
								md={10}
								container
								direction='row'
								alignItems='center'
								justifyContent='flex-end'>
								{med ? (
									<MobileNav nav={nav} handleModalClick={handleModalClick} />
								) : (
									<>
										<NavLink
											header={nav.industryLinks[0].type}
											handleHover={handleHover}
											setSelected={setSelected}
											selected={selected}
											links={nav.industryLinks}
											anchorEl={anchorEl}
											open={open}
											handleMouseLeave={handleMouseLeave}
										/>
										<NavLink
											header={nav.productLinks[0].type}
											handleHover={handleHover}
											setSelected={setSelected}
											selected={selected}
											links={nav.productLinks}
											anchorEl={anchorEl}
											open={open}
											handleMouseLeave={handleMouseLeave}
										/>
										<NavLink
											header={nav.companyLinks[0].type}
											handleHover={handleHover}
											setSelected={setSelected}
											selected={selected}
											links={nav.companyLinks}
											anchorEl={anchorEl}
											open={open}
											handleMouseLeave={handleMouseLeave}
										/>
										<NavLink
											header={nav.salesLinks[0].type}
											handleHover={handleHover}
											setSelected={setSelected}
											selected={selected}
											links={nav.salesLinks}
											anchorEl={anchorEl}
											open={open}
											handleMouseLeave={handleMouseLeave}
										/>
										<NavLink
											header={nav.supportLinks[0].type}
											handleHover={handleHover}
											setSelected={setSelected}
											selected={selected}
											links={nav.supportLinks}
											anchorEl={anchorEl}
											open={open}
											handleMouseLeave={handleMouseLeave}
										/>
										<Typography style={{ marginTop: '6px' }}>
											<Link to='/partners' className={classes.options}>
												{nav.partnerNavLink.title}
											</Link>
										</Typography>
										<Button
											variant='contained'
											color='primary'
											size='large'
											onClick={(e) => handleModalClick(e)}
											className={classes.cta}>
											{nav.ctaText}
										</Button>
									</>
								)}
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		</>
	);
};
