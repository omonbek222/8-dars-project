import hilolImg from "../assets/hilol.png";

export default function TeamSection() {
  const team = [
    {
      name: "Анна",
      img: hilolImg,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
      name: "Иван",
      img: hilolImg,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
    {
      name: "Мария",
      img: hilolImg,
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown",
    },
  ];

  return (
    <div className="py-20 bg-gray-50 flex flex-col items-center px-4">
      <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
        Мы - команда
      </h2>

      <div className="flex flex-wrap gap-8 justify-center">
        {team.map((member, idx) => (
          <div
            key={idx}
            className="bg-[#FF56811A] shadow-lg w-[380px] h-[496px] rounded-[24px] p-6 flex flex-col items-center"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-[120px] h-[120px] object-cover rounded-full mb-6"
            />

            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {member.name}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed text-center px-4">
              {member.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
