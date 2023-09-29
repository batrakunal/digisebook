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
	const res = await GET<ChaptersResponse>(`/chapters?sort="chapter"`);
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
									Sed sed risus pretium quam vulputate dignissim. Sed viverra
									ipsum nunc aliquet bibendum enim facilisis gravida.
									Pellentesque habitant morbi tristique senectus et netus. At
									tempor commodo ullamcorper a lacus vestibulum sed. Sagittis
									purus sit amet volutpat consequat mauris. Porta nibh venenatis
									cras sed felis eget velit aliquet sagittis.
									<br />
									<br />
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Egestas dui id ornare arcu odio ut sem nulla. Penatibus et
									magnis dis parturient montes nascetur ridiculus mus mauris.
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
										Sed sed risus pretium quam vulputate dignissim. Sed viverra
										ipsum nunc aliquet bibendum enim facilisis gravida.
										Pellentesque habitant morbi tristique senectus et netus. At
										tempor commodo ullamcorper a lacus vestibulum sed. Sagittis
										purus sit amet volutpat consequat mauris. Porta nibh
										venenatis cras sed felis eget velit aliquet sagittis. Urna
										id volutpat lacus laoreet non curabitur. Mi in nulla posuere
										sollicitudin aliquam. Nullam ac tortor vitae purus faucibus
										ornare suspendisse sed nisi. Fusce ut placerat orci nulla
										pellentesque dignissim. Egestas diam in arcu cursus euismod
										quis viverra nibh cras. Sed risus pretium quam vulputate
										dignissim suspendisse. Dolor sit amet consectetur adipiscing
										elit ut aliquam. Orci eu lobortis elementum nibh tellus
										molestie. Sit amet dictum sit amet justo donec enim diam.
										Neque ornare aenean euismod elementum nisi quis eleifend
										quam adipiscing. Sed id semper risus in hendrerit gravida
										rutrum. At tellus at urna condimentum mattis.
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
