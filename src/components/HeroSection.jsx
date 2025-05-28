import React from "react";
import insonImage from "../assets/inson.png";

const HeroSection = () => {
  return (
    <div className="w-full">
      <nav className="flex justify-between items-center px-10 py-4 shadow-md">
        <div className="text-2xl font-bold">nimbus</div>
        <ul className="flex gap-6 items-center text-sm font-medium">
          <li>Портфолио</li>
          <li>Цены</li>

          <li className="relative group cursor-pointer">
            Услуги
            <ul className="absolute hidden group-hover:block top-6 left-0 bg-white shadow-lg rounded-md w-32 text-sm z-10">
              <li className="px-4 py-2 hover:bg-pink-100">Фотографии</li>
              <li className="px-4 py-2 hover:bg-pink-100">Видео</li>
            </ul>
          </li>

          <li>Контакты</li>

          <li className="relative group cursor-pointer">
            О нас
            <ul className="absolute hidden group-hover:block top-6 left-0 bg-white shadow-lg rounded-md w-32 text-sm z-10">
              <li className="px-4 py-2 hover:bg-pink-100">О компании</li>
              <li className="px-4 py-2 hover:bg-pink-100">Команда</li>
            </ul>
          </li>
        </ul>

        
        <div className="text-pink-600 font-medium">8 (965) 016-54-31</div>
      </nav>

      <div className="flex flex-col md:flex-row items-center justify-between px-10 py-14 bg-gray-50 rounded-lg">
        <div className="max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Роспись стен в Санкт-Петербурге
          </h1>
          <p className="text-gray-600">
            Закажите роспись стен в Санкт-Петербурге от художественной студии
            Нимбус. Авторская техника росписи. Оформляем квартиры, детские и
            офисы от 1 дня. Создаем эскизы, сами закупаем материалы и оставляем
            всё в чистоте. Вам нужно только позвонить нам.
          </p>

          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="0 (000) 000-00-00"
              className="px-4 py-2 rounded-md border border-gray-300 w-60"
            />
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition">
              заказать
            </button>
          </div>
        </div>

        <div className="mt-10 md:mt-0 md:w-1/2">
          <img src={insonImage} alt="inson" className="rounded-xl w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
