import { Box, Container, Grid, Typography } from "@mui/material";
import React, { cache } from "react";
import styles from "./page.module.css";
import { GET } from "@/utils/api-calls";
import { AuthorsResponse } from "@/utils/types";

const getAuthors = cache(async () => {
	const authorsResp = await GET<AuthorsResponse>("/authors");
	return authorsResp.docs;
});

const About: React.FC = async () => {
	const authors = await getAuthors();
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
						{authors.map((author) => (
							<Grid item xs={12} sm={6} md={4} lg={3} key={author.id}>
								<Box>
									<Box
										sx={{
											height: 370,
											width: "100%",
											mb: 2.5,
											background: "#b3bec4",
											overflow: "hidden",
										}}
										className={styles.authorProfile}
									>
										{author.avatar && (
											<img
												src={author.avatar}
												alt={author.name}
												className={styles.authorAvatar}
											/>
										)}
									</Box>
									<Typography variant="h5" fontSize={16} fontWeight="medium">
										{author.name}
									</Typography>
									<Typography variant="h5" fontSize={16}>
										{author.affiliation}
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
