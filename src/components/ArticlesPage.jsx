import bananaImg from "../assets/banana.png";

export default function ArticlesPage() {
  const articles = [
    {
      img: bananaImg,
      author: "Артём Кукшинский",
      title: "Простые рисунки на стену своими руками",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
      img: bananaImg,
      author: "Артём Кукшинский",
      title: "Простые рисунки на стену своими руками",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
      img: bananaImg,
      author: "Артём Кукшинский",
      title: "Простые рисунки на стену своими руками",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-semibold mb-2 text-center text-gray-900">
        Статьи
      </h2>

      <p className="mb-12 text-center text-gray-600">
        Наша деятельность / Советы / Лайфхаки / Идеи
      </p>

      <div className="flex flex-wrap gap-8 justify-center">
        {articles.map((article, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-[24px] p-6 w-[380px] h-[633px] flex flex-col"
          >
            <img
              src={article.img}
              alt={article.title}
              className="w-full h-[200px] object-cover rounded-[16px] mb-4"
            />

            <p className="text-sm text-gray-600 mb-1">{article.author}</p>

            <h3 className="text-xl font-semibold mb-2">{article.title}</h3>

            <p className="text-gray-600 text-sm flex-grow">{article.desc}</p>

            <button
              className="mt-6 w-[340px] h-[50px] border border-pink-500 text-pink-500 rounded-[12px] hover:bg-pink-50 transition self-center"
              type="button"
            >
              Подробнее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
