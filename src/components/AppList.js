import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AppPreview from "./AppPreview";

const AppHolder = styled.div`
	display: grid;
	grid-row-gap: 24px;
	grid-template-columns: repeat(3, 1fr);
`;

const AppList = ({ list, ...props }) => {
	return (
		<AppHolder>
			{list.length > 0 &&
				list.map((app, index) => (
					<AppPreview key={index} app={app}></AppPreview>
				))}
		</AppHolder>
	);
};
AppList.propTypes = {
	list: PropTypes.array.isRequired,
};

export default AppList;
