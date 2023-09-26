import React, { Fragment } from "react";
import escapeHTML from "escape-html";
import { Text } from "slate";
import { AbstractElement, AbstractElementChild, Child } from "@/utils/types";
import { Typography } from "@mui/material";

const RichTextRender: React.FC<{ abstract: AbstractElement[] }> = ({
	abstract,
}) => {
	const serialize = (
		children: AbstractElementChild[] | Child[] | undefined
	) => {
		return children?.map((node, i) => {
			if (!node) return null;

			if (Text.isText(node)) {
				const styleObj = {
					fontWeight: (node as AbstractElementChild).bold ? "bold" : "normal",
					fontStyle: (node as AbstractElementChild).italic
						? "italic"
						: "normal",
					textDecoration: (node as AbstractElementChild).underline
						? "underline"
						: "",
				};
				if ((node as AbstractElementChild).strikethrough)
					styleObj.textDecoration += " line-through";
				let text = (
					<span
						style={styleObj}
						dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
					/>
				);
				if (node.text.trim() === "") text = <br />;
				return <Fragment key={i}>{text}</Fragment>;
			} else if (node.type === "li") {
				return <li key={i}>{serialize(node.children)}</li>;
			}
		});
	};

	return abstract.map((node, i) => {
		if (!node) {
			return null;
		}
		switch (node.type) {
			case "h1":
				return (
					<Typography sx={{ fontSize: 32 }} variant="h1" key={i}>
						{serialize(node.children)}
					</Typography>
				);
			case "h2":
				return (
					<Typography sx={{ fontSize: 28 }} variant="h2" key={i}>
						{serialize(node.children)}
					</Typography>
				);
			case "h3":
				return (
					<Typography sx={{ fontSize: 26 }} variant="h3" key={i}>
						{serialize(node.children)}
					</Typography>
				);
			case "h4":
				return (
					<Typography sx={{ fontSize: 24 }} variant="h4" key={i}>
						{serialize(node.children)}
					</Typography>
				);
			case "h5":
				return (
					<Typography sx={{ fontSize: 22 }} variant="h5" key={i}>
						{serialize(node.children)}
					</Typography>
				);
			case "h6":
				return (
					<Typography sx={{ fontSize: 20 }} variant="h6" key={i}>
						{serialize(node.children)}
					</Typography>
				);
			case "ul":
				return <ul key={i}>{serialize(node.children)}</ul>;
			case "ol":
				return <ol key={i}>{serialize(node.children)}</ol>;
			default:
				return <Typography key={i}>{serialize(node.children)}</Typography>;
		}
	});
};

export default RichTextRender;
