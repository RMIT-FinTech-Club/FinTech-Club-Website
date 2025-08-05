import { PartnerItem } from "@/app/(frontend)/(router)/(home_page)/components/partners";
import { Image } from "@heroui/react";

interface PartnersDivProps {
  items: PartnerItem[];
}

type PartnerLogo = {
  id: number;
  url: string;
  alt: string;
};

const blockchainPartners: PartnerLogo[] = [
  {
    id: 1,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Monad.png",
    alt: "Monad",
  },
  {
    id: 2,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Inferium.png",
    alt: "Inferium",
  },
  {
    id: 3,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Coin98.png",
    alt: "Coin98",
  },
  {
    id: 4,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/OKX.png",
    alt: "OKX",
  },
  {
    id: 5,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/NamiFoundation.png",
    alt: "Nami Foundation",
  },
  {
    id: 6,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/KyrosVentures.png",
    alt: "Kyros Ventures",
  },
  {
    id: 7,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Kardiachain.png",
    alt: "KardiaChain",
  },
  {
    id: 8,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Binance.png",
    alt: "Binance",
  },
  {
    id: 9,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/GFI.png",
    alt: "GFI",
  },
  {
    id: 10,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Polkadot.png",
    alt: "Polkadot",
  },
  {
    id: 11,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Blockaid.svg",
    alt: "Blockaid",
  },
  {
    id: 12,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/TrustWallet.png",
    alt: "Trust Wallet",
  },
  {
    id: 13,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Chainlink.png",
    alt: "Chainlink",
  },
  {
    id: 14,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/U2UNetwork.png",
    alt: "U2U Network",
  },
  {
    id: 15,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Cardano.png",
    alt: "Cardano",
  },
  {
    id: 16,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/NinetyEight.png",
    alt: "Ninety Eight",
  },
  {
    id: 17,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Uniswap.png",
    alt: "Uniswap",
  },
  {
    id: 18,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/ETHVietnam.png",
    alt: "ETH Vietnam",
  },
  {
    id: 19,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/Ethereum.png",
    alt: "Ethereum",
  },
  {
    id: 20,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/blockchain/ESOLLABS.png",
    alt: "ESO Labs",
  },
];

const fintechPartners: PartnerLogo[] = [
  {
    id: 1,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/SSI.png",
    alt: "SSI",
  },
  {
    id: 2,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/KPMG-New.png",
    alt: "KPMG",
  },
  {
    id: 3,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/PWC.png",
    alt: "PWC",
  },
  {
    id: 4,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/DragonCapital-New.png",
    alt: "Dragon Capital",
  },
  {
    id: 5,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/Infina.png",
    alt: "Infina",
  },
  {
    id: 6,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/Aquila.png",
    alt: "Aquila",
  },
  {
    id: 7,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/Homebase-New.png",
    alt: "Homebase",
  },
  {
    id: 8,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/Tititada-New.png",
    alt: "Tititada",
  },
  {
    id: 9,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/Timo.png",
    alt: "Timo",
  },
  {
    id: 10,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/MooreAISC.png",
    alt: "Moore AISC",
  },
  {
    id: 11,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/Payoo.png",
    alt: "Payoo",
  },
  {
    id: 12,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/FPTSecurities-New.png",
    alt: "FPT Security",
  },
  {
    id: 13,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/fintech/Momo.png",
    alt: "MoMo",
  },
];

const academicPartners: PartnerLogo[] = [
  {
    id: 1,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/academic/RMITTheBusinessSchool.png",
    alt: "RMIT The Business School",
  },
  {
    id: 2,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/academic/RMITFintechCryptoHub.png",
    alt: "RMIT Fintech Crypto Hub",
  },
];

const hospitalityPartners: PartnerLogo[] = [
  {
    id: 1,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/hospitality/Sofitel.png",
    alt: "Sofitel Hotel & Resort",
  },
  {
    id: 2,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/hospitality/FusionOriginal.png",
    alt: "Fusion Original",
  },
];

const charityPartners: PartnerLogo[] = [
  {
    id: 1,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/charity/Assist-New.png",
    alt: "Assist",
  },
  {
    id: 2,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/charity/NhipTimVietNam.png",
    alt: "Nhip Tim Viet Nam",
  },
  {
    id: 3,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/charity/Lotus.png",
    alt: "Quy Tu Thien Bong Sen",
  },
];

const otherPartners: PartnerLogo[] = [
  {
    id: 1,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/others/FipharmcoSkinLab.png",
    alt: "Fipharmco SkinLab",
  },
  {
    id: 2,
    url: "https://d2prwyp3rwi40.cloudfront.net/home/partners/others/Arches.png",
    alt: "Arches",
  },
];

export default function PartnersDiv({ items }: PartnersDivProps) {
  const activeItem = items[3];

  return (
    <div className="mr-[8.5vw] ml-auto">
      <h5 className="ml-[1.5rem] mb-[1.5rem] text-[#0D1742] font-bold">Partners</h5>
      <div className="bg-[linear-gradient(90deg,_#C9D6EA_10px,_#FFEFCA)] w-[70vw] h-[88vh] rounded-[2vw] p-[1vw]">
        <div className="w-full h-full rounded-[1vw] bg-white flex justify-center items-center">
          {/* Display content based on the active item */}
          {activeItem.id === 4 && (
            <div className="w-full h-full flex flex-col items-center justify-start">
              <h6 className="text-[#DCB968] bg-[#2C305F] w-fit text-center p-4 text-[2rem] font-semibold rounded-b-[1rem]">
                Blockchain & Cryptocurrency
              </h6>
              <div className="grid grid-cols-5 gap-4 px-[4rem] py-[1rem] pb-0 place-items-center max-h-[65vh]">
                {blockchainPartners.map((partner) => (
                  <Image
                    key={partner.id}
                    src={partner.url}
                    alt={partner.alt}
                    className="h-[4.75rem] w-auto object-contain"
                  />
                ))}
              </div>
            </div>
          )}

          {activeItem.id === 5 && (
            <div className="w-full h-full flex flex-col items-center justify-start">
              <h6 className="text-[#DCB968] bg-[#2C305F] w-fit text-center p-4 text-[2rem] font-semibold rounded-b-[1rem]">
                Fintech & Innovation
              </h6>

              <div className="grid grid-cols-4 gap-4 px-[4rem] py-[1rem] pb-0 place-items-center max-h-[65vh]">
                {fintechPartners.map((partner, index) => {
                  const isLastItem = index === fintechPartners.length - 1;
                  const remainder = fintechPartners.length % 4;

                  if (remainder === 1 && isLastItem) {
                    return (
                      <div
                        key={partner.id}
                        className="col-span-4 flex justify-center"
                      >
                        <Image
                          src={partner.url}
                          alt={partner.alt}
                          className="h-[4.75rem] w-auto object-contain"
                        />
                      </div>
                    );
                  }

                  return (
                    <Image
                      key={partner.id}
                      src={partner.url}
                      alt={partner.alt}
                      className="h-[4.75rem] w-auto object-contain"
                    />
                  );
                })}
              </div>
            </div>
          )}

          {activeItem.id === 3 && (
            <div className="w-full h-full flex flex-col">
              <h6 className="text-[#DCB968] bg-[#2C305F] w-fit mx-auto text-center p-4 text-[2rem] font-semibold rounded-b-[1rem]">
                Academic
              </h6>

              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-row justify-center items-center gap-12 px-[4rem] max-h-[65vh]">
                  {academicPartners.map((partner) => (
                    <Image
                      key={partner.id}
                      src={partner.url}
                      alt={partner.alt}
                      className="h-[7rem] w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeItem.id === 2 && (
            <div className="w-full h-full flex flex-col">
              <h6 className="text-[#DCB968] bg-[#2C305F] w-fit mx-auto text-center p-4 text-[2rem] font-semibold rounded-b-[1rem]">
                Hospitality
              </h6>

              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-row justify-center items-center gap-12 px-[4rem] max-h-[65vh]">
                  {hospitalityPartners.map((partner) => (
                    <Image
                      key={partner.id}
                      src={partner.url}
                      alt={partner.alt}
                      className="h-[10rem] w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeItem.id === 6 && (
            <div className="w-full h-full flex flex-col">
              <h6 className="text-[#DCB968] bg-[#2C305F] w-fit mx-auto text-center p-4 text-[2rem] font-semibold rounded-b-[1rem]">
                Charity Organizations
              </h6>

              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-row justify-center items-center gap-12 px-[4rem] max-h-[65vh]">
                  {charityPartners.map((partner) => (
                    <Image
                      key={partner.id}
                      src={partner.url}
                      alt={partner.alt}
                      className="h-[10rem] w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          {(activeItem.id === 7 || activeItem.id === 1) && (
            <div className="w-full h-full flex flex-col">
              <h6 className="text-[#DCB968] bg-[#2C305F] w-fit mx-auto text-center p-4 text-[2rem] font-semibold rounded-b-[1rem]">
                Other Partners
              </h6>

              <div className="flex-1 flex items-center justify-center">
                <div className="flex flex-row justify-center items-center gap-12 px-[4rem] max-h-[65vh]">
                  {otherPartners.map((partner) => (
                    <Image
                      key={partner.id}
                      src={partner.url}
                      alt={partner.alt}
                      className="h-[12rem] w-auto object-contain"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
