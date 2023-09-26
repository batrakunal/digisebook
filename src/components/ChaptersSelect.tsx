"use client";

import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
	FormControl,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useRouter } from "next/navigation";

const ChaptersSelect: React.FC<{
	id: string;
	chaptersMetadata: {
		id: string;
		name: string;
		chapter: number;
	}[];
}> = ({ id, chaptersMetadata }) => {
	const router = useRouter();
	const handleChange = (event: SelectChangeEvent) => {
		router.push(`/chapters/${event.target.value}`);
	};
	return (
		<FormControl variant="standard" sx={{ mb: "10px", minWidth: 120 }}>
			<Select
				labelId="demo-simple-select-standard-label"
				id="demo-simple-select-standard"
				value={id}
				onChange={handleChange}
				IconComponent={KeyboardArrowDownIcon}
				sx={{
					"&:before, &:after": {
						content: "unset",
						display: "unset",
						border: "none",
					},
					color: "white",
					textTransform: "uppercase",
					fontSize: 20,
				}}
				MenuProps={{
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "left",
					},
					transformOrigin: {
						vertical: "top",
						horizontal: "left",
					},
				}}
				renderValue={(val) => {
					const chapter = chaptersMetadata.find((c) => c.id === val);
					return `Chapter ${chapter?.chapter}`;
				}}
			>
				{chaptersMetadata?.map((chapter) => (
					<MenuItem key={chapter.id} value={chapter.id} sx={{ fontSize: 20 }}>
						Chapter {chapter.chapter} {chapter.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};

export default ChaptersSelect;
