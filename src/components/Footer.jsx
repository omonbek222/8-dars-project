export default function Footer() {
  return (
    <footer className="border-t border-pink-400 py-10 px-6 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 text-gray-900">
      <div className="max-w-md">
        <h2 className="text-xl font-semibold mb-3">Спасибо за визит!</h2>
        <p className="text-sm font-normal leading-relaxed mb-2">
          Мы рады, что вы посетили наш сайт. Здесь вы найдете лучшие идеи для художественной росписи стен, полезные советы и вдохновение для своих проектов.
        </p>
        <p className="text-sm font-normal leading-relaxed">
          Подписывайтесь на наши новости и акции, чтобы не пропустить важные обновления и специальные предложения.
        </p>
      </div>

      <div className="flex space-x-6 text-pink-500 mt-2 md:mt-0">
        <a href="#" aria-label="Facebook" className="hover:text-pink-700 transition">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
          </svg>
        </a>
        <a href="#" aria-label="Twitter" className="hover:text-pink-700 transition">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 00-8.38 4.482A13.939 13.939 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.9 4.9 0 01-2.228-.616v.061a4.918 4.918 0 003.946 4.817 4.93 4.93 0 01-2.224.085 4.923 4.923 0 004.59 3.417A9.867 9.867 0 010 21.54a13.933 13.933 0 007.548 2.212c9.057 0 14.01-7.514 14.01-14.034 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
          </svg>
        </a>
        <a href="#" aria-label="Instagram" className="hover:text-pink-700 transition">
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.72 1.78a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
          </svg>
        </a>
      </div>

      <div className="text-sm opacity-70 mt-6 md:mt-0 text-center md:text-right max-w-xs">
        &copy; 2025 Все права защищены. <br />
        Разработка сайта и дизайн © YourCompanyName
      </div>
    </footer>
  );
}
