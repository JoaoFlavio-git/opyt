import React from "react";
import Image from "next/image";

interface BannerReviewProps {
    imageUrl: string;
    name: string;
    feedback: string;
}

const BannerReviewComponent: React.FC<BannerReviewProps> = ({ imageUrl, name, feedback }) => {
    return (
        <div className="w-full flex flex-col align-middle max-w-[360px] h-[500px] review">
            <div className="flex flex-row justify-center mt-5">
                <div className="px-5 pb-5">
                    <div className="flex flex-col mt-2.5 mb-5" style={{ background: "linear-gradient(90deg,#F8971F,#FC6889);", padding: "10px", borderRadius: "15px" }}>
                        <div className="flex items-center w-[120px] h-[120px]">
                            <Image className="review-image-container" src={imageUrl} width={40} height={40} alt="Imagem do balão" layout="responsive" objectFit="cover" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-2.5 mb-5 items-start align-start justify-center">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                        {[...Array(4)].map((_, index) => (
                            <svg key={index} className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                            </svg>
                        ))}
                        <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    </div>

                    <a href="#">
                        <h5 className="text-xl font-semibold text-[25px] tracking-tight text-gray-900 dark:text-white" style={{ color: '#F8971F' }}>{name}</h5>
                    </a>
                </div>
            </div>
            <div className="text-justify text-black">
                <span>{feedback}</span>
            </div>
        </div>
    );
};

export default BannerReviewComponent;













