import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

// import { Search } from './Search';
import { PromotionBar } from './NavPieces/PromotionBar';
import { ResourceBar } from './NavPieces/ResourceBar';
import { Navbar } from './NavPieces/Navbar';

export const Nav = () => {
	const { nav } = useStaticQuery(graphql`
		query {
			nav: sanityNav {
				title
				promotionBar {
					_type
					_rawContent
				}
				resourceBar {
					mktplcLink
					salesNumber
					serviceNumber
				}
				wwNavLogo {
					asset {
						gatsbyImageData
						url
					}
				}
				industryLinks {
					title
					type
					slug {
						current
					}
				}
				productLinks {
					title
					type
					slug {
						current
					}
				}
				companyLinks {
					title
					type
					slug {
						current
					}
				}
				salesLinks {
					title
					type
					slug {
						current
					}
				}
				supportLinks {
					title
					type
					slug {
						current
					}
				}
				partnerNavLink {
					title
					slug {
						current
					}
				}
				ctaText
			}
		}
	`);

	return (
		<>
			<PromotionBar promotion={nav.promotionBar} />
			<ResourceBar
				link={nav.resourceBar.mktplcLink}
				sales={nav.resourceBar.salesNumber}
				service={nav.resourceBar.serviceNumber}
			/>
			<Navbar nav={nav} />
		</>
	);
};
