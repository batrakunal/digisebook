export interface ChaptersResponse {
	docs: Chapter[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: null;
	nextPage: null;
}

export interface Chapter {
	id: string;
	chapter: number;
	name: string;
	abstract: Abstract[];
	part: string;
	publications: Publication[];
	createdAt: Date;
	updatedAt: Date;
	leads: Lead[];
}

export interface Abstract {
	children: AbstractChild[];
	type?: string;
}

export interface AbstractChild {
	text?: string;
	children?: ChildChild[];
}

export interface ChildChild {
	text: string;
}

export interface Lead {
	id: string;
	name: string;
	affiliation: string;
	email: string;
	createdAt: Date;
	updatedAt: Date;
	avatar?: string;
}

export interface Publication {
	name: string;
	id: string;
	url?: string;
}

export interface AbstractElement {
	children: AbstractElementChild[];
	type?: string;
}

export interface AbstractElementChild {
	text?: string;
	children?: Child[];
	type?: string;
	bold?: boolean;
	italic?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
}

export interface Child {
	text: string;
}

export interface AuthorsResponse {
	docs: Author[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: boolean;
	hasNextPage: boolean;
	prevPage: null;
	nextPage: null;
}

export interface Author {
	id: string;
	name: string;
	affiliation: string;
	createdAt: Date;
	updatedAt: Date;
	avatar?: string;
}
