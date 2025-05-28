export default function PaintPricePage() {
  const cards = [
    {
      title: "Просто",
      price: "от 900 ₽ за м2",
      description: "Геометрия, линии и роспись по скотчу",
    },
    {
      title: "Средне",
      price: "от 2000 ₽ за м2",
      description: "Композиция и простые рисунки",
    },
    {
      title: "Сложно",
      price: "от 2500 ₽ за м2",
      description: "Детальная роспись и художественные работы",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-16 px-6">
      <h2 className="text-3xl font-semibold mb-12 text-center text-gray-900">
        Цена росписи стен
      </h2>

      <div className="flex gap-8 max-w-full overflow-x-auto px-4 snap-x snap-mandatory">
        {cards.map(({ title, price, description }) => (
          <div
            key={title}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center p-8 rounded-3xl flex-shrink-0 w-[400px] h-[400px] snap-start"
          >
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">{title}</h3>

            <h2 className="font-inter font-semibold text-[26px] leading-[100%] tracking-normal text-pink-500 mb-4">
              {price}
            </h2>

            <p className="text-gray-600 mb-8 px-4">{description}</p>

            <button className="mt-auto border border-pink-500 text-pink-500 py-2 px-6 rounded-full hover:bg-pink-50 transition">
              заказать
            </button>
          </div>
        ))}
      </div>

      <p className="max-w-3xl mt-12 text-center text-gray-700 font-inter font-normal text-[13px] leading-[160%] px-4">
        Стоимость художественной росписи стен в Санкт-Петербурге рассчитывается
        индивидуально. На цену влияет размер рисунка, сложность, особенности
        поверхности и вид материалов. При заказе большого объема мы делаем
        скидки. Если у вас ограниченный бюджет, мы подстраиваемся и подбираем
        несложные рисунки. Стоимость материалов всегда оплачивается отдельно.
        Также отдельно оплачивается эскиз. Закажите роспись стен в спб у нас на
        сайте.
      </p>
      <div className="mt-16 w-full flex justify-center px-4">
  <div
    className="bg-white shadow-md rounded-[24px] w-[671px] h-[169px] flex flex-col items-center justify-center p-6"
  >
    <h2 className="text-xl font-semibold text-gray-900 mb-2">
      Заказать роспись стен
    </h2>

    <p className="text-pink-500 text-[13px] mb-4 text-center">
      *согласие на обработку персональных данных
    </p>

    <div className="flex gap-4 w-full justify-center">
      <input
        type="text"
        placeholder="95 020 93 50"
        className="w-[400px] h-[50px] rounded-[12px] border border-gray-300 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
      />

      <button
        className="w-[177px] h-[50px] rounded-[12px] bg-pink-500 text-white text-sm hover:bg-pink-600 transition"
      >
        Отправить
      </button>
    </div>
  </div>
</div>

    </div>
  );
}
