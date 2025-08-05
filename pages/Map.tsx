
import React from 'react';

const MapPage = () => {
    return (
        <div className="space-y-12">
            <div className="bg-card dark:bg-dark-card p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">フロアマップ</h2>
                <div className="bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                    <img src="https://picsum.photos/seed/map/1000/600" alt="会場フロアマップ" className="w-full h-auto object-cover" />
                </div>
                <div className="mt-4 grid md:grid-cols-2 gap-4 text-sm">
                    <div><span className="font-bold text-primary dark:text-primary-dark">A:</span> Track A Stage</div>
                    <div><span className="font-bold text-indigo-500">B:</span> Track B Stage</div>
                    <div><span className="font-bold text-green-500">C:</span> スポンサーブース</div>
                    <div><span className="font-bold text-yellow-500">D:</span> 受付</div>
                    <div><span className="font-bold text-red-500">E:</span> 休憩エリア</div>
                </div>
            </div>

            <div className="bg-card dark:bg-dark-card p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">近隣施設情報</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    <li><strong>コンビニ:</strong> 会場1階にファミリーマートがあります。</li>
                    <li><strong>カフェ:</strong> 会場向かいにスターバックスコーヒーがあります。</li>
                    <li><strong>レストラン:</strong> JR有楽町駅周辺に多数の飲食店がございます。</li>
                    <li><strong>駐車場:</strong> 東京国際フォーラムの地下駐車場がご利用いただけます（有料）。</li>
                </ul>
            </div>
        </div>
    );
};

export default MapPage;
