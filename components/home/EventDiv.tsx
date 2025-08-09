import styles from "@/styles/upcoming.module.css";

function EventDiv({ classes = "" }) {
    return (
        <div
            className={`${styles.card} ${classes} h-[60vh] w-[25vw] bg-blueSlate border-bluePrimary border-[0.5vh] rounded-[2vw] grid place-items-center p-[2vh]`}
        >
            <p className="text-[4vh] text-yellowSand uppercase text-center font-bold">
                Hackthon 2025
            </p>

            <div className="relative w-full h-[25vh] rounded-[3vh] bg-gradient-to-b from-[#C9D6EA] to-[#DBB968] p-[1.5vh]">
                <div
                    className="w-full h-full rounded-[2.5vh] bg-center bg-cover bg-no-repeat"
                    style={{
                        backgroundImage: `url(https://media.discordapp.net/attachments/1026524398552883274/1402518459731935262/Screen_Shot_2025-07-01_at_21.50.46.png?ex=6897805a&is=68962eda&hm=cf12b9436d3be6c59a22c63742be59422fe8a03c9d38a29165cfd8e5475a1ece&=&format=webp&quality=lossless&width=1914&height=1244)`,
                    }}
                ></div>
            </div>
            <div className="w-full h-[10vh] flex justify-between">
                <div className="h-full aspect-square rounded-[3vh] bg-gradient-to-b from-[#C9D6EA] to-[#DBB968] p-[1.5vh] flex justify-center items-center">
                    <p className="text-[2vh] leading-[2.2vh] font-bold text-center">31th August</p>
                </div>
                <div className="h-full w-full ml-[2vw] rounded-[3vh] bg-gradient-to-b from-[#C9D6EA] to-[#DBB968] p-[1.5vh] flex justify-center items-center">
                    <div className="bg-[white] w-full h-full rounded-[2.5vh] text-[2vh] leading-[2.2vh] font-bold text-center flex justify-center items-center">Label</div>
                </div>
            </div>
            <div className="h-[max-content] w-[max-content] max-w-full rounded-[3vh] bg-gradient-to-b from-[#C9D6EA] to-[#DBB968] py-[1.5vh] px-[3vw] flex justify-center items-center cursor-pointer">
                <p className="text-[3vh] leading-[3.3vh] font-bold text-center">More Details</p>
            </div>
        </div>
    );
}

export default EventDiv;