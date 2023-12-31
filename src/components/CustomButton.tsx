"use client";

import { Button, Palette, PaletteColor, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CustomButton: React.FC<{
	children: string;
	variant?: "text" | "outlined" | "contained";
	size?: "small" | "medium" | "large";
	href?: string;
	sx?: { [key: string]: string };
	color?: string;
	isExternal?: boolean;
}> = ({
	variant,
	size,
	href,
	sx = {},
	color,
	isExternal = false,
	children,
}) => {
	const router = useRouter();
	const theme = useTheme();

	const [btnColor, setBtnColor] = useState<PaletteColor>(theme.palette.primary);

	function openLinkInNewTab(href: string) {
		const newTab = window.open(href, "_blank");
		if (newTab) {
			newTab.opener = null;
		}
	}

	useEffect(() => {
		if (color && color.includes(".")) {
			const keys = color.split(".");
			let c: PaletteColor;
			keys.forEach((key) => {
				if (!c) {
					// @ts-ignore
					c = theme.palette[key];
				} else {
					// @ts-ignore
					c = c[key];
				}
			});
			setBtnColor(c!);
		}
	}, [color]);

	return (
		<Button
			variant={variant}
			size={size}
			// @ts-ignore
			sx={{
				borderColor: btnColor,
				backgroundColor: variant === "contained" ? btnColor : "transparent",
				color: btnColor,
				fontSize: 16,
				...sx,
			}}
			onClick={() => {
				if (href) {
					if (isExternal) openLinkInNewTab(href);
					else router.push(href);
				}
			}}
		>
			{children}
		</Button>
	);
};

export default CustomButton;
