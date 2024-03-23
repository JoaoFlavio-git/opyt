import React from "react";
import Image from "next/image";

interface MainImagesComponentProps {
    textOrange: string;
    text: string;
    firstImage: string;
    secondImage: string;
}

const MainImagesComponent: React.FC<MainImagesComponentProps> = ({
    textOrange,
    text,
    firstImage,
    secondImage,
}) => {
    return (
        <div className="text-with-images text-gray-700 p-2 m-w-[300px] w-full md:w-1/2">
            <h1 className="text-2xl font-semibold text-center mb-4">
                <span className="text-gray-800">Procurando o</span><span className="text-[#FFA500]"> melhor plano de internet?</span>
            </h1>
            <p className="text-lg font-regular text-justify p-1 text-gray-800">
                <span className="text-[#FFA500]">{textOrange}</span>
                {text}
            </p>
            <div className="image-container gap-5 mt-6">
                <div className="rounded-tl-[25px] rounded-br-[25px] max-h[30vh] overflow-hidden">
                    <Image src={secondImage} alt="Second Image" width={200} height={200} layout="responsive" className="mt-2 rounded-tl-[25px] rounded-br-[25px]" />
                </div>

                <div className="rounded-tl-[25px] rounded-br-[25px] h-[auto] overflow-hidden  mt-2">
                    <Image src={firstImage} alt="First Image" width={200} height={200} layout="responsive" className="rounded-tl-[25px] rounded-br-[25px] object-cover" />
                </div>
            </div>
        </div>
    );
};

export default MainImagesComponent;
