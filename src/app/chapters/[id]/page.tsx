import CustomButton from "@/components/CustomButton";
import RichTextRender from "@/components/RichTextRender";
import { GET } from "@/utils/api-calls";
import { Chapter, ChaptersResponse } from "@/utils/types";
import {
	Avatar,
	Box,
	Button,
	Container,
	Divider,
	Stack,
	Typography,
} from "@mui/material";
import React, { cache } from "react";
import ChaptersSelect from "@/components/ChaptersSelect";
import ChaptersNavigation from "@/components/ChaptersNavigaton";

export async function generateStaticParams() {
	const chapters = await GET<ChaptersResponse>(`/chapters?limit=100`);

	return chapters.docs.map((chapter) => ({
		id: chapter.id,
	}));
}

const getChapter = cache(async (id: string) => {
	const chapter = await GET<Chapter>(`/chapters/${id}`);
	return chapter;
});

const getChaptersMetadata = cache(async () => {
	const res = await GET<ChaptersResponse>(`/chapters?sort="chapter"&limit=100`);
	const chapters = res.docs;
	return chapters
		.map((chapter) => ({
			id: chapter.id,
			name: chapter.name,
			chapter: chapter.chapter,
		}))
		.sort((a, b) => a.chapter - b.chapter);
});

const Chapter: React.FC<{ params: { id: string } }> = async ({ params }) => {
	const chapterData = await getChapter(params.id);
	const chaptersMetadata = await getChaptersMetadata();
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
						<ChaptersSelect
							id={params.id}
							chaptersMetadata={chaptersMetadata}
						/>
						<Typography
							variant="h1"
							fontSize={32}
							lineHeight="24px"
							color="white"
							fontWeight="medium"
						>
							{chapterData.name}
						</Typography>
					</Container>
				</Box>
			</section>
			<Container>
				<Stack direction="row" sx={{ mt: 12.5 }} gap={{ xs: 0, sm: 15 }}>
					<aside>
						<Stack
							alignItems="flex-start"
							sx={{
								display: { xs: "none", sm: "block" },
								color: "#283237",
								position: "sticky",
								top: "6.25rem",
								borderLeft: "4px solid #D0D8DB",
							}}
						>
							{chapterData.abstract && (
								<Button
									sx={{
										color: "#283237",
										fontSize: 20,
										textTransform: "capitalize",
										borderRadius: 0,
									}}
									className="chapters__section--active"
									id="abstract-btn"
								>
									Abstract
								</Button>
							)}
							{chapterData.leads?.length > 0 && (
								<Button
									sx={{
										color: "#283237",
										fontSize: 20,
										textTransform: "capitalize",
										borderRadius: 0,
									}}
									id="leads-btn"
								>
									Leads
								</Button>
							)}
							{chapterData.publications?.length > 0 && (
								<Button
									sx={{
										color: "#283237",
										fontSize: 20,
										textTransform: "capitalize",
										borderRadius: 0,
									}}
									id="publications-btn"
								>
									Publications
								</Button>
							)}
						</Stack>
					</aside>
					<Box>
						{chapterData.abstract && (
							<section id="abstract">
								<Box sx={{ mb: 10 }}>
									<Typography
										variant="h2"
										fontSize={24}
										lineHeight="36px"
										fontWeight="medium"
										sx={{ mb: 2 }}
									>
										Abstract
									</Typography>
									{/* {chapterData?.abstract[0]?.children?.map((node, i) => {
									return (
										<Box key={i}>
											{node.children ? (
												<Typography>{node.children[0].text}</Typography>
											) : (
												<Typography>{node.text}</Typography>
											)}
											<br />
										</Box>
									);
								})} */}
									<RichTextRender abstract={chapterData?.abstract} />
									<CustomButton
										size="large"
										variant="contained"
										color="secondary.dark"
										sx={{
											color: "#fff",
											marginTop: "1.5rem",
											fontSize: "14px",
										}}
									>
										Learn More About this Book
									</CustomButton>
								</Box>
							</section>
						)}
						{chapterData.leads && chapterData.leads.length > 0 && (
							<section id="leads">
								<Divider sx={{ my: 10 }} />
								<Box>
									<Typography
										variant="h2"
										fontSize={24}
										lineHeight="36px"
										fontWeight="medium"
										sx={{ mb: 3 }}
									>
										Leads
									</Typography>
									{chapterData?.leads?.map((lead) => {
										return (
											<Stack
												direction="row"
												gap={2}
												sx={{ mt: 2 }}
												key={lead.id}
											>
												{lead.avatar ? (
													<Avatar
														sx={{ height: 46, width: 46 }}
														src={lead.avatar}
													/>
												) : (
													<Avatar sx={{ height: 46, width: 46 }} />
												)}
												<Stack>
													<Typography fontWeight="medium">
														{lead.name}
													</Typography>
													<Typography variant="subtitle2">
														{lead.affiliation}
													</Typography>
												</Stack>
											</Stack>
										);
									})}
								</Box>
							</section>
						)}
						{chapterData.publications &&
							chapterData.publications.length > 0 && (
								<section id="publications">
									<Divider sx={{ my: 10 }} />
									<Box>
										<Typography
											variant="h2"
											fontSize={24}
											lineHeight="36px"
											fontWeight="medium"
											sx={{ mb: 2 }}
										>
											Publications
										</Typography>
										<ol
											style={{
												paddingInlineStart: 20,
											}}
										>
											{chapterData?.publications?.map((publication) => {
												return (
													<li
														style={{
															marginBottom: "1.25rem",
														}}
													>
														<Typography>
															{publication.url ? (
																<a href={publication.url} target="_blank">
																	{publication.name}
																</a>
															) : (
																publication.name
															)}
														</Typography>
													</li>
												);
											})}
										</ol>
									</Box>
								</section>
							)}
					</Box>
				</Stack>
			</Container>
			<ChaptersNavigation />
		</main>
	);
};

export default Chapter;
