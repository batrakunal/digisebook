import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
	return (
		<Box
			sx={{
				background: "#203147",
				mt: 13.5,
			}}
		>
			<Container sx={{ py: 7.5, color: "#fff" }}>
				<Stack direction="row" gap={5}>
					<img
						src="/SERC-Primary-logo_4C-WHT.png"
						alt="SERC Logo"
						style={{
							width: "150px",
							objectFit: "contain",
							alignSelf: "flex-start",
						}}
					/>
					<Box>
						<Typography>
							The Systems Engineering Research Center (SERC) was established in
							the Fall of 2008 as a government-designated University Affiliated
							Research Center (UARC). The SERC has produced 15 years of
							research, focused on an updated systems engineering toolkit
							(methods, tools, and practices) for the complex cyber-physical
							systems of today and tomorrow.
						</Typography>
						<br />
						<Stack direction="row" gap={1}>
							<Typography>Follow us on </Typography>
							<Link href="/">
								<img
									src="/LinkedIn.svg"
									alt="LinkedIn"
									style={{
										width: 24,
										height: 24,
									}}
								/>
							</Link>
						</Stack>
					</Box>
				</Stack>
			</Container>
		</Box>
	);
};

export default Footer;
