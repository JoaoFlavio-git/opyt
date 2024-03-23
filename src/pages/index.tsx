import RootLayout from "@/components/layout/rootLayout"; 
import MainImagesComponent from "@/components/landing_page/main_images"; 
import FormsComponent from "@/components/landing_page/forms"; 
import BannerInfoComponent from "@/components/landing_page/banner_info"; 
import BannerPhoneComponent from "@/components/landing_page/banner_phone"; 

export default function Home() {
  const textOrangeFirstBanner =
    "Conecte-se à experiência definitiva em internet com nossa poderosa rede de fibra ótica, ";
  const textFirstBanner =
    "proporcionando uma velocidade incomparável que redefine os padrões de navegação e entretenimento digital. Com nossa conexão de fibra ótica de última geração.";
  
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="flex flex-col md:flex-row gap-5 align-top w-full sm:px-[15vw] px-0">
          <MainImagesComponent textOrange={textOrangeFirstBanner} text={textFirstBanner} firstImage={"/images/banners/OPYT-JOGADOR.jpg"} secondImage={"/images/banners/OPYT-GOIATUBA-COPO.jpg"}/>
          
          <FormsComponent />
        </div>

        <div className="w-full full bg-[#1D1D1C] align-middle mt-5">
          <BannerInfoComponent />
        </div>
        
        <div className="w-full full align-middle justify-center mt-5">
          <BannerPhoneComponent />
        </div>
      </div>
    </RootLayout>
  );
}
