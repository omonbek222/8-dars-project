import birqiz from '../assets/birqiz.png';
import rasomyigit from '../assets/rasomyigit.png';
import kichikqiz from '../assets/kichikqiz.png';
import qizbola from '../assets/qizbola.png';

const services = [
  {
    title: 'Роспись стен в офисе',
    img: birqiz,
    btnColor: 'bg-gray-100 text-black',
  },
  {
    title: 'Граффити',
    img: rasomyigit,
    btnColor: 'bg-pink-500 text-white',
  },
  {
    title: 'Роспись в детской',
    img: kichikqiz,
    btnColor: 'bg-gray-100 text-black',
  },
  {
    title: 'Роспись в квартире',
    img: qizbola,
    btnColor: 'bg-gray-100 text-black',
  },
];

export default function Uslugi() {
  return (
    <section className="py-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-semibold mb-10">Услуги</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
          >
            <img src={service.img} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-4">{service.title}</h3>
              <button
                className={`px-4 py-2 rounded-full text-sm font-semibold ${service.btnColor}`}
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
