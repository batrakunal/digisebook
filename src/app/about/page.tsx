import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { cache } from "react";
import styles from "./page.module.css";
import { GET } from "@/utils/api-calls";
import { AuthorsResponse } from "@/utils/types";

const getAuthors = cache(async () => {
	const authorsResp = await GET<AuthorsResponse>("/authors?limit=100");
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
							lineHeight="47px"
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
							The impact of the Systems Engineering Research Center (SERC) on
							the state of systems engineering practice and education has been
							profound. Examples include the Body of Knowledge for Systems
							Engineering (SEBoK) – the most popular systems engineering website
							in the world with over 50,000 unique visitors every month; GRCSE –
							the first graduate reference curriculum for systems engineering;
							the Mission-Aware Security methodology for assessing system
							architectures for cyber-resilience; and a diversity of research
							projects to support the transition of digital engineering from
							strategy into practice including advanced tradespace analysis
							methods, modeling methods for digital project workflows, digital
							engineering measurement methods, and digital engineering
							competencies. Therein lies the focus of this book – translating
							some of the mature research inspired by the SERC into a compendium
							of chapters, organized into topical clusters, for the benefit of
							practicing engineers in industry and government. While the
							chapters in this book are succinct and focused on the relevant
							topic, the editor and the authors would like to provide you
							additional resources to complement the information in the book on
							topics of particular interest to you. That is the motivation
							behind this web-based resource.
						</Typography>
					</Box>
				</Container>
			</section>
			<section>
				<Container>
					<Grid spacing={4} container>
						{authors.map((author) => (
							<Grid item xs={12} sm={6} md={4} lg={4} key={author.id}>
								<Box>
									<Stack direction="row" alignItems="center" gap={4}>
										<Box
											sx={{
												width: 108,
												height: 108,
												overflow: "hidden",
											}}
											className={styles.authorProfile}
										>
											<img
												src={author.avatar || "/Bio-placeholder.png"}
												alt={author.name}
												className={styles.authorAvatar}
											/>
										</Box>
										<Box>
											<Typography
												variant="h5"
												fontSize={16}
												lineHeight="24px"
												fontWeight="medium"
											>
												{author.name}
											</Typography>
											<Typography variant="h5" lineHeight="24px" fontSize={16}>
												{author.affiliation}
											</Typography>
										</Box>
									</Stack>
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
