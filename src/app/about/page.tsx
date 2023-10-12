import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { cache } from "react";
import styles from "./page.module.css";
import { GET } from "@/utils/api-calls";
import { Author, AuthorsResponse } from "@/utils/types";

const getAuthors = cache(async () => {
	const authorsResp = await GET<AuthorsResponse>(
		`/authors?sort=name&limit=100`
	);
	const sortByLastName = (a: Author, b: Author) => {
		const lastNameA = a.name.split(" ").pop()!;
		const lastNameB = b.name.split(" ").pop()!;
		return lastNameA.localeCompare(lastNameB);
	};
	let authors = authorsResp.docs.sort(sortByLastName);
	const customOrder: Array<string | Author> = [
		"Mark R. Blackburn",
		"Nicole Hutchison",
		"Tom A. McDermott",
		"Daniel DeLaurentis",
		"Valerie B. Sitterle",
		"Jon Wade",
	];
	authors = authors.filter((a) => {
		const i = customOrder.indexOf(a.name);
		if (i < 0) return true;
		customOrder[i] = a;
		return false;
	});
	return [...(customOrder as Author[]), ...authors];
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
							The Systems Engineering Research Center (SERC) was established in
							the Fall of 2008 as a government-designated University Affiliated
							Research Center (UARC). The SERC has produced 15 years of
							research, focused on an updated systems engineering toolkit
							(methods, tools, and practices) for the complex cyber-physical
							systems of today and tomorrow. The principal sponsor of the SERC
							is the Office of the Under-Secretary of Defense for Research and
							Engineering in the U.S. Department of Defense. A unique governance
							element of the SERC is its establishment as a national network of
							preeminent universities in the United States focused on systems
							research.
							<br />
							<br />
							The impact of the SERC on the state of systems engineering
							practice and education has been profound. Examples include the
							Body of Knowledge for Systems Engineering (SEBoK) – the most
							popular systems engineering website in the world with over 50,000
							unique visitors every month; GRCSE – the first graduate reference
							curriculum for systems engineering; the Mission-Aware Security
							methodology for assessing system architectures for
							cyber-resilience; and a diversity of research projects to support
							the transition of digital engineering from strategy into practice
							including advanced tradespace analysis methods, modeling methods
							for digital project workflows, digital engineering measurement
							methods, and digital engineering competencies. Therein lies the
							focus of this book – translating some of the mature research
							inspired by the SERC into a compendium of chapters, organized into
							topical clusters, for the benefit of practicing engineers in
							industry and government.
							<br />
							<br />
							This book features a total of 41 chapters, organized into eight
							topical clusters. Each of these chapter clusters was organized and
							edited by the following cluster leaders: Mark Blackburn, Nicole
							Hutchison, and Tom McDermott of Stevens Institute of Technology;
							Dan DeLaurentis of Purdue University; Val Sitterle of Georgia Tech
							Research Institute; and Jon Wade of the University of California –
							San Diego.
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
