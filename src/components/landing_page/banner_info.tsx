import React from "react";
import { FaRegLightbulb, FaBuilding, FaUser } from "react-icons/fa"; // Importe o ícone desejado

const BannerInfoComponent: React.FC = () => {
    return (<>
        <h1 className="text-2xl font-semibold text-center mt-6">
            <span className="text-white">A Opyt não para de crescer e já somos mais de:</span>
        </h1>

        <div className="flex flex-col align-top justify-evenly sm:flex-row text-[#1D1D1C] gap-10 w-full">
            <a className="text-center block max-w-sm p-3 bg-[#1D1D1C] border border-[#1D1D1C] rounded-lg dark:border-gray-700 dark:hover:bg-gray-700">
                <FaUser className="text-5xl mx-auto mt-4 text-yellow-500 mb-4" /> {/* Ícone centralizado */}
                <h5 className=" text-2xl font-bold tracking-tight text-white">18.000 clientes ativos</h5> {/* Título alterado */}
                <p className="font-normal text-gray-400 dark:text-gray-200">Já somos mais de 18 mil pessoas fazendo utilizando nosso produto.</p> {/* Descrição alterada */}
            </a>

            <a className="text-center block max-w-sm p-3 bg-[#1D1D1C] border border-[#1D1D1C] rounded-lg dark:border-gray-700 dark:hover:bg-gray-700">
                <FaRegLightbulb className="text-5xl mx-auto mt-4 text-yellow-500 mb-4" />
                <h5 className=" text-2xl font-bold tracking-tight text-white">4.000 km de Fibra ótica</h5>
                <p className="font-normal text-gray-400 dark:text-gray-200">Já cobrimos mais de 4 mil quilometros de distância.</p>
            </a>

            <a className="text-center block max-w-sm mt-2 p-3 bg-[#1D1D1C] border border-[#1D1D1C] rounded-lg dark:border-gray-700 dark:hover:bg-gray-700">
                <FaBuilding className="text-5xl mx-auto text-yellow-500 mb-4" /> {/* Ícone centralizado */}

                <h5 className="text-2xl font-bold tracking-tight text-white">7 cidades atendidas</h5>
                <p className="font-normal text-gray-400 dark:text-gray-200">Atendemos sete cidades no estado de Goiás.</p>
            </a>
        </div>

        <div className="flex flex-row justify-evenly p-4 text-gray-700 gap-10 w-full">
            <button className=" text-white bg-[#2CD46B] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-[20px] text-sm w-full sm:w-[500px] px-10 py-3 mb-2 text-center dark:bg-green-300 dark:hover:bg-green-400 dark:focus:ring-green-500 ">Chama no zap</button>
        </div>
    </>
    );
};

export default BannerInfoComponent;
