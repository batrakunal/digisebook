import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Footer: React.FC = () => {
	return (
		<Box
			sx={{
				background: "#203147",
				mt: 13.5,
			}}
		>
			<Container sx={{ py: 7.5, color: "#fff" }}>
				<Typography>
					The Systems Engineering Research Center (SERC) was established in the
					Fall of 2008 as a government-designated University Affiliated Research
					Center (UARC). The SERC has produced 15 years of research, focused on
					an updated systems engineering toolkit (methods, tools, and practices)
					for the complex cyber-physical systems of today and tomorrow.
				</Typography>
				<br />
				<Typography>Follow us on</Typography>
			</Container>
		</Box>
	);
};

export default Footer;
