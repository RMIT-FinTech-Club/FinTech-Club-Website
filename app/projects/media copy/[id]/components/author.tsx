import { Image } from "@nextui-org/react";
import clsx from "clsx";

interface AuthorListProps {
	authorDetails: AuthorDetails[];
}

const AuthorList = ({ authorDetails }: AuthorListProps) => {
	console.log(`check authorDetail: ${JSON.stringify(authorDetails)}`);
	return (
		<div className="hidden lg:flex lg:flex-col my-2 px-4">
			<h5 className="hidden lg:block text-ft-text-bright py-4">
				Authors
			</h5>
			<div className="flex">
				{authorDetails.map((author, _) => (
					<Author
						key={_}
						authorName={author.authorName}
						authorAvatarURL={author.authorAvatarURL}
					/>
				))}
			</div>
		</div>
	);
};

export interface AuthorDetails {
	authorName: string;
	authorAvatarURL: string;
}

const Author = ({ authorName, authorAvatarURL }: AuthorDetails) => {
	return (
		<div className="mx-2 flex flex-col items-center">
			<Image
				src={authorAvatarURL}
				alt={`${authorName} avatar`}
				className={clsx(
					"rounded-full border-solid border-white bg-gray-400 object-cover",
					"border-1 md:border-2 lg:border-3",
					"size-[50px] md:size-[60px] lg:size-[70px]",
				)}
			/>
			<p className="text-ft-text-bright text-ft-body-2">{authorName}</p>
		</div>
	);
};

export default AuthorList;
