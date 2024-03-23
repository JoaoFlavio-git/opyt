import RootLayout from "@/components/layout/rootLayout";
import MainImagesComponent from "@/components/landing_page/main_images";
import FormsComponent from "@/components/landing_page/forms";
import BannerInfoComponent from "@/components/landing_page/banner_info";
import BannerPhoneComponent from "@/components/landing_page/banner_phone";
import BannerReviewComponent from "@/components/landing_page/review_component";

export default function Home() {

  // Text for the first banner
  const textOrangeFirstBanner ="Conecte-se à experiência definitiva em internet com nossa poderosa rede de fibra ótica, ";
  const textFirstBanner ="proporcionando uma velocidade incomparável que redefine os padrões de navegação e entretenimento digital. Com nossa conexão de fibra ótica de última geração.";

  // Feedback for banner reviews
  const feedback1 = "Estou absolutamente maravilhado com a velocidade da minha conexão de internet contratada! Desde que fiz o upgrade para esse plano, minha experiência online tem sido simplesmente incrível. Os downloads são feitos em questão de segundos, os vídeos em streaming carregam instantaneamente e até mesmo os jogos online fluem sem interrupções.";
  const feedback2 = "A estabilidade da minha conexão de internet tem sido impressionante desde que migrei para este provedor. Não apenas a velocidade é consistente, mas também a conexão raramente cai. Isso tem sido fundamental para meu trabalho remoto, garantindo que eu possa realizar minhas tarefas sem contratempos.";
  const feedback3 = "Fiquei surpreso com a eficácia do serviço de instalação da minha nova conexão de internet. O técnico foi pontual, profissional e fez um trabalho impecável. Além disso, ele explicou detalhadamente como otimizar o uso da conexão, o que me deixou ainda mais satisfeito com a escolha deste provedor.";

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center py-10">
        <div className="flex flex-col md:flex-row gap-5 align-top w-full sm:px-[15vw] px-0">
          {/* Main Images Component */}
          <MainImagesComponent textOrange={textOrangeFirstBanner} text={textFirstBanner} firstImage={"/images/banners/OPYT-JOGADOR.jpg"} secondImage={"/images/banners/OPYT-GOIATUBA-COPO.jpg"} />
          {/* Forms Component */}
          <FormsComponent />
        </div>

        {/* Banner info section */}
        <div className="w-full full bg-[#1D1D1C] align-middle mt-5">
          <BannerInfoComponent />
        </div>

        {/* Banner phone section */}
        <div className="w-full full align-middle justify-center mt-5">
          <BannerPhoneComponent />
        </div>

        {/* Banner review section */}
        <div className="w-full md:flex-row flex flex-col gap-5 full align-middle justify-center mt-5">
          <div className="self-center">
            <BannerReviewComponent imageUrl={"/images/banners/41b39df8d257cfffb1ba36dcc424571e.png"} name={"João Flávio"} feedback={feedback1} />
          </div>
          <div className="self-center">
            <BannerReviewComponent imageUrl={"/images/banners/41b39df8d257cfffb1ba36dcc424571e.png"} name={"Mario Silva"} feedback={feedback2} />
          </div>
          <div className="self-center">
            <BannerReviewComponent imageUrl={"/images/banners/41b39df8d257cfffb1ba36dcc424571e.png"} name={"André Rafael"} feedback={feedback3} />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
