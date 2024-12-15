import React from "react";

interface EventSponsorsProps {
    sectionValue: {
        images: string[];
    };
}

const EventSponsors: React.FC<EventSponsorsProps> = ({ sectionValue }) => {
    const { images } = sectionValue;

    return (
        <div className="flex flex-col justify-center items-center bg-[#EBEBEB] py-[5vw] px-[10vw]">
            <div className="text-gold text-[1vw]">Our Sponsors</div>
            <div className="mb-[4vh] text-deepBlue text-[3vw] font-bold uppercase tracking-[0.1vw]">Event <span className="text-gold">Sponsors</span></div>
            <div className="my-[4vh] flex justify-center items-center">
                <div className="bg-deepBlue px-[0.75vw] py-[0.3vw] rounded-[8px] flex justify-center items-center w-[10vw] mx-[1vw]">
                    <div className="bg-contain bg-no-repeat aspect-square h-[1.5vw] bg-center mr-[0.75vw]" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/a245/9ec2/2cc0020687e338c7fce555f0a2397d41?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dp~aPBj-7dhWOttHuclHy1VuPRQZ2dwnjrMw--EoAtdU1rNjwKjzsej3O9VIu0TFSY3ZyLm-58agdzd0~DFDhgQonep4BLKInGUt3Hrmv~DwPsBcRnDh-93ehbzVzeaiRcxoDhHV4k1LTeKnwILmGqFa8Aeht7WTypkGx4o8g~FOiSYEZcCYepcPwENxQlmJ~w7AIqb3P9LK2kcLmKQ2EPuqEBNANXXAuETRWrekt~hJmkqwCpXkg72BQ1KyXNW9eEjruSP2aQFWf5XS1MI4KYs0~rdG-uueb16SyOdRXCm5vqlF0mw9PcPkoGaKvpdcEvcAOC5Q5XZ4-kmm70Rfxw__)' }}></div>
                    <div className="text-white text-[1.5vw] font-normal">Diamond</div>
                </div>
                <div className="bg-white px-[0.75vw] py-[0.3vw] rounded-[8px] flex justify-center items-center w-[10vw] mx-[1vw]">
                    <div className="bg-contain bg-no-repeat aspect-square h-[2vw] bg-center mr-[0.75vw]" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/fae3/edcc/1caf2a0225d21163c6a18714edf8d028?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y-34PJG2tM8oU56zTJKF1K8SY-04kwbkqICxEPh57mF96UURGFx06f4nujQ2HuTkAf~555a8lXun79VnSbrUlbtm75aqYzLgw2f9aZhQnR-cmIEkZNQfZ7cC6TQwOtcBHM5lUn81q-nwBeRSAcgWC15nBmmvpcWBDR~kf39-wt-H~2yoxULTBPeZAoEOPokNakPHjoMIa5r7QtBS45ZbbVbl-ywZScI8d3ZUzjfnmq53USr~RdmRrskjgiaVMIipvRS7D15FmJixvHCxQxJHn9~lVBToM4Lz5DH8GBG~~blMpECwcdHjRF15FCsu9DKBMG18sN2zlzoYrsbtsYBhfw__)' }}></div>
                    <div className="text-deepBlue text-[1.5vw] font-normal">Gold</div>
                </div>
                <div className="bg-white px-[0.75vw] py-[0.3vw] rounded-[8px] flex justify-center items-center w-[10vw] mx-[1vw]">
                    <div className="bg-contain bg-no-repeat aspect-square h-[1.6vw] bg-center mr-[0.75vw]" style={{ backgroundImage: 'url(https://s3-alpha-sig.figma.com/img/4494/b910/b184a5bf432b2d7889889a173d32cdd5?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L7uX53OnRBt8wMTfEuFjd52h5rKT5qstQPH-0UY7LjhYhc-IZKqzN8wCExsGUfTWN8I-C8NgJzJcYs4LziOiVxjfOSuXSQGbFzXpyEi6vHLDaLb65EHjQmSynB94ABJGsi3HRoOgUxO0wkUjIh7w1DSEzxTtLVAOWYGcMtUckTBAf9F-FclEp9MKxqdlpS~vg9lq~CzoGafHZJDSN9AKx6QZQpek5jAETLRuw~AGG~igaJb4M1yllXlyryfxEL40JTcDCW4JuCWgrTqMCdPuBd1qSNRZG1cu5gHKUHURB~CtEEq3-P36gbo6szQg5BdJxZbWaLEXM7Al3rWGVed7EA__)' }}></div>
                    <div className="text-deepBlue text-[1.5vw] font-normal">Silver</div>
                </div>
            </div>
            <div className="my-[4vh] flex justify-between items-center w-full">
                {images.map((image, index) => (
                    <div key={index} className="bg-center bg-no-repeat bg-contain w-[10vw] aspect-[5/1]" style={{ backgroundImage: `url(${image})` }}></div>
                ))}
            </div>
        </div>
    );
};

export default EventSponsors;