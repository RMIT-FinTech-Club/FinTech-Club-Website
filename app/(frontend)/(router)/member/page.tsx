"use client";
import { Button, Pagination } from "@heroui/react";
import Image from "next/image";
import { useEffect, useState } from "react";
const MemberView = () => {
	const [filteredDepartment, setFilteredDepartment] =
		useState<string>("technology");
	const [currentPage, setCurrentPage] = useState<number>(1);
	const [displayedData, setDisplayedData] = useState(Array<any>);

	useEffect(() => {
		console.log(displayedData);
		setDisplayedData(
			data.filter((item) => {
				return item.department === filteredDepartment;
			}),
		);
	}, [filteredDepartment]);

	function handleFilterDepartment(department: string) {
		setFilteredDepartment(department);
	}
	function handleOnChangePagination(page: number) {
		setCurrentPage(page);
	}
	return (
		<section className="w-[95vw] flex flex-col items-center gap-[50px] py-[50px]">
			{/*----------------------headline-------------------------*/}
			<div className="flex items-center gap-[25px]">
				<div className="w-[150px] h-[2px] bg-[#77878B]" />
				<h6 className="text-[#2B305E] font-medium">MEMBER PROFILE</h6>
				<div className="w-[150px] h-[2px] bg-[#77878B]" />
			</div>
			{/*----------------------department filter-------------------------*/}
			<div className="flex items-center gap-[25px]">
				<Button
					onClick={() => {
						handleFilterDepartment("technology");
					}}
					className="bg-[#2B305E] text-white font-medium text-large w-[150px]"
					radius="full"
				>
					TECHNOLOGY
				</Button>
				<Button
					onClick={() => {
						handleFilterDepartment("business");
					}}
					className="bg-[#DBB968] text-white font-medium text-large w-[150px]"
					radius="full"
				>
					BUSINESS
				</Button>
				<Button
					onClick={() => {
						handleFilterDepartment("marketing");
					}}
					className="bg-[#C9D6EA] text-white font-medium text-large w-[150px]"
					radius="full"
				>
					MARKETING
				</Button>
				<Button
					onClick={() => {
						handleFilterDepartment("hr");
					}}
					className="bg-[#77878B] text-white font-medium text-large w-[150px]"
					radius="full"
				>
					HR
				</Button>
			</div>
			{/*---------------------------- member display ---------------------------*/}
			<section className="w-full flex flex-wrap gap-y-[20px] h-[600px]">
				{displayedData.map((member, index) => {
					if (
						member.department == filteredDepartment &&
						index >= (currentPage - 1) * 8 &&
						index < currentPage * 8
					) {
						return (
							<MemberCard
								key={index}
								firstName={member.first_name}
								lastName={member.last_name}
								position={member.position}
								avatarSrc={member.avatarSrc}
							/>
						);
					}
					return <></>;
				})}
			</section>
			<Pagination
				onChange={handleOnChangePagination}
				total={Math.floor(displayedData.length / 8) + 1}
				showControls
				initialPage={1}
				size="lg"
				color="primary"
			/>
		</section>
	);
};
export default MemberView;

const MemberCard: React.FC<{
	firstName: string;
	lastName: string;
	position: Array<string>;
	avatarSrc: string;
}> = ({ firstName, lastName, position, avatarSrc }) => {
	return (
		<div className="flex flex-col items-center w-1/4">
			<div
				className="w-[200px] h-[200px] flex justify-center items-center overflow-hidden mb-[10px]"
				style={{ borderRadius: "70%" }}
			>
				<Image
					alt="member image"
					src={avatarSrc}
					width={200}
					height={200}
				/>
			</div>
			<p className="p-0 text-2xl font-semibold">
				{lastName} {firstName}
			</p>
			{position.map((item) => (
				<p className="p-0 text-medium">{item}</p>
			))}
		</div>
	);
};

const data = [
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["Project leader"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["Head Of Tech"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["Assistant's Head Of Tech", "Project Leader"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["member"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["member"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["member"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["member"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["member"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "DiCaprio",
		last_name: "Leonardo",
		position: ["member"],
		department: "technology",
		avatarSrc:
			"https://wl-brightside.cf.tsp.li/resize/728x/jpg/9b6/b68/6c70db5f149b4ec6952c412c16.jpg",
	},
	{
		first_name: "Evan",
		last_name: "Chris",
		position: ["Project Leader"],
		department: "hr",
		avatarSrc:
			"https://cdn.britannica.com/28/215028-050-94E9EA1E/American-actor-Chris-Evans-2019.jpg",
	},
	{
		first_name: "Evan",
		last_name: "Chris",
		position: ["member"],
		department: "hr",
		avatarSrc:
			"https://cdn.britannica.com/28/215028-050-94E9EA1E/American-actor-Chris-Evans-2019.jpg",
	},
	{
		first_name: "Evan",
		last_name: "Chris",
		position: ["Head Of HR"],
		department: "hr",
		avatarSrc:
			"https://cdn.britannica.com/28/215028-050-94E9EA1E/American-actor-Chris-Evans-2019.jpg",
	},
];
