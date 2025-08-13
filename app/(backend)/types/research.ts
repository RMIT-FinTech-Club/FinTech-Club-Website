export interface Section {
	title: string;
	image: string;
	content: string;
}

export interface Research {
	_id?: string;
	title: string;
	thumbnail: string;
	thumbnailDescription: string;
	sections: Section[];
	author: string;
	publicationDate: Date;
	status?: "draft" | "published";
	createdAt?: Date;
	updatedAt?: Date;
}
