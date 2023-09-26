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
				backdropFilter: "blur(20px)",
				background: "#345980",
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
								display: { xs: "none", md: "flex" },
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
						<Stack direction="row" gap={5} sx={{ flexGrow: 0 }}>
							<CustomButton sx={{ color: "#fff" }} href="/about">
								About the Book
							</CustomButton>
							<Button
								variant="contained"
								sx={{ background: "#203147", color: "#fff" }}
							>
								Buy Book
							</Button>
						</Stack>
					</Stack>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
