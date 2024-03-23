import React from "react";
import Image from "next/image"; // Importing Image component from next/image

const BannerPhoneComponent: React.FC = () => {
    return (<>
        <div className="flex sm:flex-row flex-col justify-center mt-5 banner-phone w-full">
            <div className="flex sm:flex-row flex-col">
                <div className="flex relative">
                    <div className="message-box-container">
                        <Image src={"/images/banners/ballonImg.webp"} width={270} height={270} alt="Imagem do balão" layout="fixed" />
                    </div>
                    <div className="flex flex-col md:flex-row">
                        <div className="mobile-image-container justify-center p-5 md:mr-[-50px]">
                            <Image src={"/images/banners/mobileHome.webp"} width={400} height={300} alt="Imagem do telefone" layout="fixed" />
                        </div>
                        <div className="md:max-w-[300px] md:text-start text-center p-5">

                        <h1 className="text-xl text-black mt-5">Procurando <span className="font-bold text-2xl">o melhor plano de internet</span>, com maior velocidade e estabilidade de conexão?</h1>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="flex flex-row justify-evenly p-4 text-gray-700 gap-10 w-full">
            <button className=" text-white bg-[#2CD46B] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-[20px] text-sm w-full sm:w-[500px] px-10 py-3 mb-2 text-center dark:bg-green-300 dark:hover:bg-green-400 dark:focus:ring-green-500 ">Chama no zap</button>
        </div>
    </>
    );
};

export default BannerPhoneComponent;
