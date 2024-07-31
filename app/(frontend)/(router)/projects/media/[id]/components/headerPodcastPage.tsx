type HeaderPodcastPageProps = {
	text: string;
};

const HeaderPodcastPage: React.FC<HeaderPodcastPageProps> = ({ text }) => {
	return (
		<section className="w-full hidden lg:flex justify-center px-16 items-center">
			{/* Left arrow*/}
			<div className="relative flex items-center invisible lg:visible">
				<div className="bg-ft-primary-yellow-500 h-1 w-full xl:w-96 lg:w-80" />
				<div className="absolute bg-ft-primary-yellow-500 h-4 w-full lg:w-4 rounded-full" />
			</div>
			{/* Title page  */}
			<div className="mx-16">
				<h5 className="uppercase text-ft-primary-yellow-500 font-bold">
					{text}
				</h5>
			</div>
			{/* Right arrow*/}
			<div className="relative flex items-center invisible lg:visible">
				<div className="bg-ft-primary-yellow-500 h-1 w-full xl:w-96 lg:w-80" />
				<div className="bg-ft-primary-yellow-500 h-4 w-full lg:w-4 rounded-full" />
			</div>
		</section>
	);
};

export default HeaderPodcastPage;
