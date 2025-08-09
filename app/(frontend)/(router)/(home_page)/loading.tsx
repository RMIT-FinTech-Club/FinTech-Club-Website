import { Card } from "@nextui-org/react";
import { Skeleton } from "@nextui-org/skeleton";
import clsx from "clsx";

export default function Loading() {
	return (
		<section className="flex flex-col px-side-margin-mobile md:px-side-margin gap-5 w-screen py-2 lg:py-12">
			<h1 className="text-3xl font-bold mx-auto text-ft-primary-blue">
				PROJECTS
			</h1>
			<section className="relative mx-auto overflow-hidden">
				<section className="flex flex-row justify-between items-center w-full mb-5 gap-4">
					<hr className="w-1/3  border-b-2 border-solid border-ft-primary-yellow md:hidden" />
					<div className="text-ft-primary-yellow text-2xl font-semibold">
						2024
					</div>
					<hr className="w-1/3 border-b-2 border-solid border-ft-primary-yellow md:w-full" />
				</section>
				<div className="flex flex-row justify-between items-center">
					<Card
						className={clsx(
							"flex min-h-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] flex-col mr-5 mb-6",
						)}
					>
						<Skeleton className="p-0 overflow-visible">
							<Skeleton className="w-full object-cover h-[150px] lg:h-[200px]" />
						</Skeleton>
						<Skeleton className="w-full text-white gap-2 md:text-ft-primary-blue" />
						{/* For mobile */}
						<Skeleton className="flex text-ft-primary-blue flex-col gap-1 md:hidden" />
					</Card>

					<Card
						className={clsx(
							"flex min-h-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] flex-col mr-5 mb-6",
						)}
					>
						<Skeleton className="p-0 overflow-visible">
							<Skeleton className="w-full object-cover h-[150px] lg:h-[200px]" />
						</Skeleton>
						<Skeleton className="w-full text-white gap-2 md:text-ft-primary-blue" />
						{/* For mobile */}
						<Skeleton className="flex text-ft-primary-blue flex-col gap-1 md:hidden" />
					</Card>

					<Card
						className={clsx(
							"flex min-h-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] flex-col mr-5 mb-6",
						)}
					>
						<Skeleton className="p-0 overflow-visible">
							<Skeleton className="w-full object-cover h-[150px] lg:h-[200px]" />
						</Skeleton>
						<Skeleton className="w-full text-white gap-2 md:text-ft-primary-blue" />
						{/* For mobile */}
						<Skeleton className="flex text-ft-primary-blue flex-col gap-1 md:hidden" />
					</Card>

					<Card
						className={clsx(
							"flex min-h-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] flex-col mr-5 mb-6",
						)}
					>
						<Skeleton className="p-0 overflow-visible">
							<Skeleton className="w-full object-cover h-[150px] lg:h-[200px]" />
						</Skeleton>
						<Skeleton className="w-full text-white gap-2 md:text-ft-primary-blue" />
						{/* For mobile */}
						<Skeleton className="flex text-ft-primary-blue flex-col gap-1 md:hidden" />
					</Card>

					<Card
						className={clsx(
							"flex min-h-full w-[250px] sm:w-[300px] md:w-[350px] lg:w-[500px] flex-col mr-5 mb-6",
						)}
					>
						<Skeleton className="p-0 overflow-visible">
							<Skeleton className="w-full object-cover h-[150px] lg:h-[200px]" />
						</Skeleton>
						<Skeleton className="w-full text-white gap-2 md:text-ft-primary-blue" />
						{/* For mobile */}
						<Skeleton className="flex text-ft-primary-blue flex-col gap-1 md:hidden" />
					</Card>
				</div>
			</section>
		</section>
	);
}
