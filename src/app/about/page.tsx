import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./page.module.css";

const About: React.FC = () => {
	return (
		<main>
			<section>
				<Box
					className="se__bg-home"
					sx={{
						height: 400,
						display: "flex",
						alignItems: "center",
					}}
				>
					<Container>
						<Typography
							variant="h1"
							fontSize={32}
							color="white"
							fontWeight="medium"
						>
							About the Book
						</Typography>
					</Container>
				</Box>
			</section>
			<section>
				<Container>
					<Box sx={{ my: "6.25rem" }}>
						<Typography>
							Sed sed risus pretium quam vulputate dignissim. Sed viverra ipsum
							nunc aliquet bibendum enim facilisis gravida. Pellentesque
							habitant morbi tristique senectus et netus. At tempor commodo
							ullamcorper a lacus vestibulum sed. Sagittis purus sit amet
							volutpat consequat mauris. Porta nibh venenatis cras sed felis
							eget velit aliquet sagittis.
						</Typography>
						<br />
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Egestas dui id ornare arcu odio ut sem nulla. Penatibus et magnis
							dis parturient montes nascetur ridiculus mus mauris.
						</Typography>
					</Box>
				</Container>
			</section>
			<section>
				<Container>
					<Grid spacing={4} container>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
							<Grid item xs={3} key={item}>
								<Box>
									<Box
										sx={{
											height: 370,
											width: "100%",
											mb: 2.5,
											background: "#b3bec4",
										}}
										className={styles.authorProfile}
									/>
									<Typography variant="h5" fontSize={16} fontWeight="medium">
										Name
									</Typography>
									<Typography variant="h5" fontSize={16}>
										Affiliation
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</section>
		</main>
	);
};

export default About;
