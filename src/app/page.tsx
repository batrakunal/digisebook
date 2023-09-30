import React, { cache } from "react";
import {
	Box,
	Button,
	Container,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import Image from "next/image";
import styles from "./page.module.css";
import { Chapter, ChaptersResponse } from "@/utils/types";
import { GET } from "@/utils/api-calls";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CustomButton from "@/components/CustomButton";

interface Parts {
	[key: Chapter["part"]]: Chapter[];
}

const getParts = cache(async () => {
	const res = await GET<ChaptersResponse>(`/chapters?sort="chapter"&limit=100`);
	const parts: Parts = {};
	res.docs.forEach((doc) => {
		if (!parts[doc.part]) parts[doc.part] = [doc];
		else parts[doc.part].push(doc);
	});
	return parts;
});

const partsTitles: {
	[key: Chapter["part"]]: string;
} = {
	1: "Transforming Engineering Through Digital and Model-Based Methods",
	2: "Executing Digital Engineering",
	3: "Tradespace Analysis in a Digital Engineering Ecosystem – Context and Implications",
	4: "Evaluating and Improving System Risk",
	5: "Model-Based Design of Safety, Security, and Resilience Systems",
	6: "Analytic Methods for Design and Analysis of Missions and Systems-of-Systems",
	7: "Applying Systems Engineering to Enterprise Systems and Portfolio Management",
	8: "Systems Education and Competencies in the Age of Digital Engineering, Convergence, and AI",
};

const Home: React.FC = async () => {
	const parts = await getParts();
	return (
		<main>
			<section>
				<Box className="se__bg-home">
					<Container>
						<Stack
							direction={{ xs: "column", md: "row" }}
							gap={12}
							sx={{ py: "4.5rem" }}
						>
							<Box sx={{ width: "100%", color: "#fff" }}>
								<Typography
									variant="h1"
									fontSize={40}
									fontWeight="bold"
									sx={{ mb: 5 }}
								>
									Systems Engineering for the Digital Age – Practitioner
									Perspectives
								</Typography>
								<Typography>
									The impact of the Systems Engineering Research Center (SERC)
									on the state of systems engineering practice and education has
									been profound. Examples include the Body of Knowledge for
									Systems Engineering (SEBoK) – the most popular systems
									engineering website in the world with over 50,000 unique
									visitors every month; GRCSE – the first graduate reference
									curriculum for systems engineering; the Mission-Aware Security
									methodology for assessing system architectures for
									cyber-resilience; and a diversity of research projects to
									support the transition of digital engineering from strategy
									into practice including advanced tradespace analysis methods,
									modeling methods for digital project workflows, digital
									engineering measurement methods, and digital engineering
									competencies. Therein lies the focus of this book –
									translating some of the mature research inspired by the SERC
									into a compendium of chapters, organized into topical
									clusters, for the benefit of practicing engineers in industry
									and government. While the chapters in this book are succinct
									and focused on the relevant topic, the editor and the authors
									would like to provide you additional resources to complement
									the information in the book on topics of particular interest
									to you. That is the motivation behind this web-based resource.
									Hope you find it useful.
								</Typography>
								<Stack direction="row" gap={2} sx={{ mt: 5 }}>
									<CustomButton
										size="large"
										variant="contained"
										color="secondary.dark"
										sx={{
											color: "white",
										}}
									>
										Learn More the Book
									</CustomButton>
									<CustomButton
										size="large"
										variant="contained"
										color="secondary.dark"
										sx={{
											color: "white",
										}}
									>
										Buy Now
									</CustomButton>
								</Stack>
							</Box>
							<Stack justifyContent="center" alignItems="center">
								<Box
									sx={{
										position: "relative",
										width: { xs: 300, lg: 600 },
										height: { xs: 300, lg: 600 },
									}}
								>
									<Image
										src="/DigitalSE-cover-mockup.png"
										alt="DigitalSE Book Cover Mockup"
										fill
									/>
								</Box>
							</Stack>
						</Stack>
					</Container>
				</Box>
			</section>
			<section>
				<Box
					sx={{
						height: "max-content",
						py: "7rem",
					}}
					className={styles["whats-inside-container"]}
				>
					<Container>
						<Stack direction={{ xs: "column", md: "row" }}>
							<Box
								sx={{
									pr: { xs: "0", md: "10.5rem" },
									width: "100%",
								}}
							>
								<Box
									sx={{
										position: "sticky",
										top: "5rem",
									}}
								>
									<Typography
										variant="h1"
										fontSize={32}
										fontWeight="bold"
										sx={{
											mb: 3,
										}}
									>
										What's Inside
									</Typography>
									<Typography>
										This book features a total of 41 chapters, organized into
										eight topical clusters. Each of these chapter clusters was
										organized and edited by the following cluster leaders. Every
										one of the cluster leaders has been a principal investigator
										on multiple research projects within the SERC. The chapter
										cluster leaders engaged with over 60 authors and coauthors
										to bring this initiative to completion and all of us were
										managed by Dr. Payuna Uday, a chapter coauthor and the
										book’s overall project manager.
										<br />
										<br />
										The resources included in this web resource include relevant
										technical reports from completed research projects within
										the Systems Engineering Research Center (SERC), and other
										resources that the chapter authors decided to share with
										you. This information may be updated occasionally by the
										chapter authors.
									</Typography>
								</Box>
							</Box>
							<Box
								sx={{
									width: "100%",
								}}
							>
								<Box sx={{ pt: 8 }}>
									{Object.entries(parts).map(([part, c]) => (
										<Box key={part} sx={{ mb: 10 }}>
											<Typography
												variant="h2"
												fontSize={20}
												fontWeight="bold"
												sx={{ mb: 3.125 }}
											>
												<Typography
													component="span"
													color="secondary"
													fontSize={20}
													fontWeight="bold"
													fontFamily="inherit"
												>
													PART {part}
												</Typography>
												<br />
												{partsTitles[part]}
											</Typography>
											<Stack gap={2.5}>
												{c.map((chapter) => (
													<Box key={chapter.chapter}>
														<Typography variant="h3" fontSize={14}>
															CHAPTER {chapter.chapter}
														</Typography>
														<Stack
															direction="row"
															justifyContent="space-between"
															alignItems="flex-end"
														>
															<Typography variant="h3" fontSize={16}>
																{chapter.name}
															</Typography>
															<Link
																href={`/chapters/${chapter.id}`}
																style={{
																	height: 24,
																}}
															>
																<ArrowForwardIcon />
																{/* <IconButton
																onClick={() => {
																	navigate(`/chapters/${chapter.id}`);
																}}
															>
															</IconButton> */}
															</Link>
														</Stack>
														<Divider sx={{ mt: 1.25 }} />
													</Box>
												))}
											</Stack>
										</Box>
									))}
								</Box>
							</Box>
						</Stack>
					</Container>
				</Box>
			</section>
		</main>
	);
};
export default Home;
