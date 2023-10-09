"use client";

import React, { useEffect } from "react";

const ChaptersNavigation: React.FC = () => {
	useEffect(() => {
		let currentlyActive = document.getElementsByClassName(
			"chapters__section--active"
		)[0];
		const leadsBtn = document.getElementById("leads-btn");
		const leadsSection = document.getElementById("leads");

		const publicationsBtn = document.getElementById("publications-btn");
		const publicationsSection = document.getElementById("publications");

		const abstractBtn = document.getElementById("abstract-btn");
		const abstractSection = document.getElementById("abstract");

		const onClickListener = (
			btn: HTMLElement | null,
			section: HTMLElement | null
		) => {
			section?.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest",
			});
			btn?.classList.add("chapters__section--active");
			currentlyActive?.classList.remove("chapters__section--active");
			currentlyActive = btn!;
		};

		leadsBtn?.addEventListener("click", () => {
			onClickListener(leadsBtn, leadsSection);
		});
		publicationsBtn?.addEventListener("click", () => {
			onClickListener(publicationsBtn, publicationsSection);
		});
		abstractBtn?.addEventListener("click", () => {
			onClickListener(abstractBtn, abstractSection);
		});

		return () => {
			leadsBtn?.removeEventListener("click", () => {
				onClickListener(leadsBtn, leadsSection);
			});
			publicationsBtn?.removeEventListener("click", () => {
				onClickListener(publicationsBtn, publicationsSection);
			});
			abstractBtn?.removeEventListener("click", () => {
				onClickListener(abstractBtn, abstractSection);
			});
		};
	}, []);
	return null;
};

export default ChaptersNavigation;
