import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUser } from "@/api/user/user.service";

const FormsComponent: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        answer: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        const newValue = id === "answer" ? parseInt(value, 10) : value;
        setFormData({ ...formData, [id]: newValue });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if (formData.answer !== 12) {
            toast.error('Resposta incorreta! A soma de 10 + 2 é 12.');
            return;
        }

        try {
            const newUser = await createUser(formData);
            setFormData({
                name: "",
                email: "",
                phone: "",
                city: "",
                answer: 0,
            });
            console.log(newUser);
            
            toast.success('Usuário criado com sucesso!');
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            toast.error('Erro ao criar usuário');
        }
    };

    return (
        <>
            <form className="w-full p-2.5 m-w-[300px] md:w-1/2" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-semibold text-center mb-4">
                    <span className="text-[#FFA500]">Preencha seus dados</span><span className="text-gray-800"> ou chama no zap</span>
                </h1>

                <div className="mb-5">
                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu nome</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]" placeholder="Seu nome" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu e-mail</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]" placeholder="seu@email.com.br" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu número</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]" placeholder="Seu número (DDD) + 123456789" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Qual a sua cidade?</label>
                    <input type="text" id="city" value={formData.city} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]" placeholder="Insira sua cidade" required />
                </div>

                <div className="mb-5">
                    <label htmlFor="answer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">10 + 2 ?</label>
                    <input type="number" id="answer" value={formData.answer} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[20px] focus:ring-[#FFA500] focus:border-[#FFA500] block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#FFA500] dark:focus:border-[#FFA500]" placeholder="Insira o resultado da soma de 10 + 2" required />
                </div>

                <button type="submit" className="text-white bg-[#FFA500] hover:bg-[#FFA500] focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-[20px] text-sm w-full px-10 py-3 text-center dark:bg-orange-400 dark:hover:bg-[#FFA500] dark:focus:ring-orange-700 ">Me cadastrar</button>
                <button className="mt-2 text-white bg-[#2CD46B] hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-[20px] text-sm w-full px-10 py-3 text-center dark:bg-green-300 dark:hover:bg-green-400 dark:focus:ring-green-500 ">Chama no zap</button>
            </form>
        </>
    );
};

export default FormsComponent;
