import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@nextui-org/react";
import { delay } from "framer-motion";
import { set } from "mongoose";
import { useMemo, useState } from "react";
import { CaretDown } from "tabler-icons-react";

type SpeedSelectorProps = {
	onSpeedChange: (speed: number) => void;
};

const SpeedSelector: React.FC<SpeedSelectorProps> = ({ onSpeedChange }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
	const [selectedSpeed, setSelectedSpeed] = useState(new Set(["1"]));

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const selectedValue = useMemo(
		() => Array.from(selectedSpeed).join(", ").replaceAll("_", " "),
		[selectedSpeed],
	);

	return (
		<div className="relative flex">
			<div className="flex items-center justify-center bg-ft-primary-blue rounded-full pl-2 h-fit">
				<p className="text-ft-text-bright text-sm font-bold bg-ft-primary-blue pl-2 pr-3 rounded-full">
					Speed
				</p>
				<Dropdown>
					<DropdownTrigger>
						<Button
							size="sm"
							className="flex items-center justify-around lg:px-2 lg:py-2 bg-ft-primary-yellow-500 rounded-full"
							onClick={toggleDropdown}
						>
							<span className="text-ft-text-bright font-bold">
								{selectedValue}x
							</span>
							<CaretDown
								color="white"
								className={`flex items-center transition-transform fill-white ${
									isDropdownOpen ? "transform rotate-180" : ""
								}`}
								onClick={toggleDropdown}
							/>
						</Button>
					</DropdownTrigger>
					<DropdownMenu
						aria-label="Speed selector"
						variant="flat"
						disallowEmptySelection
						selectionMode="single"
						selectedKeys={selectedSpeed}
						onSelectionChange={(keys) => {
							setSelectedSpeed(keys as Set<string>);
							// onSpeedChange(parseFloat(Array.from(selectedValue)[0]))
						}}
						onAction={(key) => {
							const speed = parseFloat(key.toString());
							// console.log(speed)
							onSpeedChange(speed);
						}}
					>
						{[0.5, 1, 1.5, 2].map((speed) => (
							<DropdownItem
								textValue={speed.toString()}
								key={speed}
							>
								{speed}x
							</DropdownItem>
						))}
					</DropdownMenu>
				</Dropdown>
			</div>
		</div>
	);
};

export default SpeedSelector;
