import EventDiv from "@/components/home/EventDiv";
import styles from "@/styles/upcoming.module.css";

function Test() {
    return (
        <div className="h-[100dvh] w-[100vw] relative flex flex-col items-center">
            <div className="h-[max-content] w-[max-content] relative mx-auto mt-[4vh] mb-[8vh]">
                <p className="text-[4vw] text-bluePrimary uppercase font-extrabold text-center">UPCOMING EVENTS</p>
                <div
                    className="absolute bottom-[calc(100%+2vh)] left-[0.2vw] h-[4vh] aspect-square bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(/home/star.svg)` }}
                ></div>
                <div
                    className="absolute top-[-3vh] left-[-9vh] h-[8vh] aspect-square bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(/home/star.svg)` }}
                ></div>
                <div
                    className="absolute top-[-2vh] right-[-9vh] h-[8vh] aspect-square bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(/home/star.svg)` }}
                ></div>
                <div
                    className="absolute top-[calc(100%+2vh)] right-[0.2vw] h-[4vh] aspect-square bg-center bg-no-repeat bg-contain"
                    style={{ backgroundImage: `url(/home/star.svg)` }}
                ></div>
            </div>
            <div className="h-[70vh] w-full relative">
                <EventDiv classes = {`${styles.card_1}`} />
                <EventDiv classes = {`${styles.card_2}`} />
                <EventDiv classes = {`${styles.card_3}`} />
                <EventDiv classes = {`${styles.card_4}`} />
                <EventDiv classes = {`${styles.card_5}`} />
            </div>
            <div className="w-full flex justify-center items-center gap-[2vw]">
                <div className="h-[4vh] cursor-pointer aspect-square rounded-[50%] bg-[#D9D9D9]"></div>
                <div className="h-[4vh] cursor-pointer aspect-square rounded-[50%] bg-[#D9D9D9]"></div>
                <div className="h-[4vh] cursor-pointer aspect-square rounded-[50%] bg-yellowPrimary"></div>
                <div className="h-[4vh] cursor-pointer aspect-square rounded-[50%] bg-[#D9D9D9]"></div>
                <div className="h-[4vh] cursor-pointer aspect-square rounded-[50%] bg-[#D9D9D9]"></div>
            </div>
        </div>
    );
}

export default Test;