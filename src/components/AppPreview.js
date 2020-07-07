import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CardImage = styled.img`
	display: block;
	width: 100%;
	height: 100%;
	z-index: 1;
`;
const Details = styled.div`
	position: absolute;
	text-align: center;
	padding-left: 1em;
	padding-right: 1em;
	width: 100%;
	top: 80%;
	left: 50%;
	opacity: 0;
	-webkit-transform: translate(-50%, -50%);
	-moz-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
	-webkit-transition: all 0.3s ease-in-out 0s;
	-moz-transition: all 0.3s ease-in-out 0s;
	transition: all 0.3s ease-in-out 0s;
`;

const CardOverlay = styled.div`
	background: rgba(0, 0, 0, 0.7);
	position: absolute;
	height: 100%;
	width: 100%;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	opacity: 0;
	-webkit-transition: all 0.4s ease-in-out 0s;
	-moz-transition: all 0.4s ease-in-out 0s;
	transition: all 0.4s ease-in-out 0s;
`;

const Banner = styled.div`
	background-color: #fff;
	font-size: 0.8em;
	color: black;
	height: 20%;
	width: 100%;
	display: block;
	position: absolute;
	z-index: 2;
	top: 80%;
	-webkit-transition: all 0.4s ease-in-out 0s;
	-moz-transition: all 0.4s ease-in-out 0s;
	transition: all 0.4s ease-in-out 0s;
`;

const CardHolder = styled.div`
	position: relative;
	width: 95%;
	margin: auto;
	overflow: hidden;
	border-color: lightgrey;
	border-style:solid;
	border-radius: 2em;

	&:hover ${CardOverlay} {
		opacity: 1;
	}
	&:hover ${Banner} {
		top:100%
	}
	&:hover ${Details} {
		top: 50%;
		left: 50%;
		opacity: 1;
	}
`;

const Name = styled.h3`
	color: #fff;
	font-weight: 500;
	letter-spacing: 0.15em;
	margin-bottom: 0.5em;
	text-transform: uppercase;
`;

const Description = styled.p`
	color: #fff;
	font-size: 0.8em;
`;



const AppPreview = ({ app: { name, image, description, link } }) => {
	return (
		<CardHolder>
			<a href={link} target="_blank">
				<CardOverlay></CardOverlay>
				<CardImage src={image} />
				<Banner >{name}</Banner>
				<Details>
					<Name>{name}</Name>
					<Description>{description}</Description>
				</Details>
			</a>
		</CardHolder>
	);
};

AppPreview.propTypes = {
	name: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string,
	link: PropTypes.string,
};

export default AppPreview;
