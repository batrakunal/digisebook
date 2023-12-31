import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Button, Stack } from "@mui/material";
import CustomButton from "./CustomButton";
import Link from "next/link";

const Navbar: React.FC = () => {
	return (
		<AppBar
			sx={{
				// backdropFilter: "blur(20px)",
				background: "#345980",
				boxShadow: "none",
			}}
			position="sticky"
		>
			<Container>
				<Toolbar disableGutters>
					<Stack
						justifyContent="space-between"
						direction="row"
						alignItems="center"
						sx={{
							width: "100%",
						}}
					>
						{/* Desktop Icon */}
						<Box
							sx={{
								display: "flex",
								justifyContent: "center",
								flex: "0 0 auto",
								width: 100,
							}}
						>
							<Link href="/">
								<img
									width={100}
									src="/Logo-DigitalSE.png"
									alt="DigitalSE Logo"
								/>
							</Link>
						</Box>
						{/* User Menu */}
						<Stack direction="row" gap={{ xs: 2, md: 5 }} sx={{ flexGrow: 0 }}>
							<CustomButton
								sx={{ color: "#fff", fontSize: "14px" }}
								href="/about"
							>
								About the Book
							</CustomButton>
							<CustomButton
								variant="contained"
								sx={{
									background: "#203147",
									color: "#fff",
									fontSize: "14px",
								}}
								href="https://wolbookstore.wiley.com/CGI-BIN/lansaweb?procfun+bookseller+bksfn07+funcparms+WOLBKS(A0010):Y"
								isExternal
							>
								Buy the Book
							</CustomButton>
						</Stack>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
