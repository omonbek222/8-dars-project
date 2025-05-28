export default function TeamStats() {
  return (
    <section className="py-20 bg-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Мы - команда</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        О нас написали в Деловом Петербурге, Невских Новостях, Авито Подкасте, Подкасте Либо-Либо, vc.ru и многие другие.
        Также мы открыли свою школу росписи стен, запустили франшизу и зарегистрировали товарный знак.
      </p>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        <div className="px-6 py-4 bg-black text-white rounded-xl font-medium">Наши успехи</div>
        <div className="px-6 py-4 border rounded-xl font-medium">За <span className="text-pink-500 font-bold">2021</span> год в Санкт-Петербурге</div>
        <div className="px-6 py-4 border rounded-xl font-medium"><span className="text-pink-500 font-bold">10</span> детских</div>
        <div className="px-6 py-4 border rounded-xl font-medium"><span className="text-pink-500 font-bold">14</span> офисов</div>
        <div className="px-6 py-4 border rounded-xl font-medium"><span className="text-pink-500 font-bold">52</span> пекарни</div>
        <div className="px-6 py-4 border rounded-xl font-medium"><span className="text-pink-500 font-bold">12</span> квартир</div>
        <div className="px-6 py-4 border rounded-xl font-medium"><span className="text-pink-500 font-bold">7</span> салонов красоты</div>
        <div className="px-6 py-4 border rounded-xl font-medium"><span className="text-pink-500 font-bold">3</span> школы</div>
        <div className="px-6 py-4 border rounded-xl font-medium"><span className="text-pink-500 font-bold">2</span> кофейни</div>
        <div className="px-6 py-4 border rounded-xl font-medium"><span className="text-pink-500 font-bold">1</span> отель</div>
      </div>
    </section>
  );
}
