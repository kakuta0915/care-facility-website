import React from "react";
import logo from "@/src/images/site-logo.png";

const Header: React.FC = () => {
  return (
    <header className="text-base-color pt-6 px-9 pb-4">
      <div className="flex justify-between items-center">
        {/* ロゴ */}
        <div className="flex">
          <img src={logo} alt="画像" className="w-24 h-24 mr-2" />
          <div>
            <p className="text-base mb-1">尊厳と自立の尊重</p>
            <h1 className="text-6xl font-bold text-green">健進会</h1>
          </div>
        </div>

        {/* 資料請求・見学予約 */}
        <div className="flex flex-col">
          <div className="mb-3 justify-end">
            <a
              href="/"
              className=" bg-blue text-white text-lg font-semibold px-8 py-2 mb-3 rounded shadow-2xl"
            >
              資料請求
            </a>
            <a
              href="/"
              className="bg-red text-white text-lg font-semibold px-8 py-2 mb-3 ml-3 rounded shadow-2xl"
            >
              見学予約
            </a>
          </div>
          <p className="text-right text-3xl font-bold mb-1">0120-123-456</p>
          <p className="text-right text-xl">営業時間 10:00 ~ 18:00</p>
        </div>
      </div>

      {/* ナビ */}
      <nav>
        <ul className="flex justify-end">
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>
            <a href="/">健進会について</a>
          </li>
          <li>
            <a href="/">施設のご案内</a>
          </li>
          <li>
            <a href="/">採用情報</a>
          </li>
          <li>
            <a href="/">お問い合わせ</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
