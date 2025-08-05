
import React from 'react';
import { MapPinIcon, CalendarIcon } from '../components/Icons';

const InfoCard = ({ icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => {
    const IconComponent = icon;
    return (
        <div className="bg-card dark:bg-dark-card p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-3">
                <IconComponent className="h-6 w-6 text-primary dark:text-primary-dark mr-3" />
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <div className="text-gray-600 dark:text-gray-300 space-y-2">
                {children}
            </div>
        </div>
    );
};

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="relative rounded-lg overflow-hidden h-64 shadow-lg">
        <img src="https://picsum.photos/1200/400?random=1" alt="Event banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-4xl font-bold text-white text-center">ノンプログラマーズ・テックキャンプ2025</h2>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        <InfoCard icon={CalendarIcon} title="日時・場所" children={
            <>
                <p><strong>日時:</strong> 2025年9月6日 (土) 10:00 - 16:00</p>
                <p><strong>場所:</strong> サイボウズ　東京都中央区日本橋２丁目７−１ 東京日本橋タワー２７階</p>
                <p><strong>アクセス:</strong> 東京メトロ銀座線・東西線、都営地下鉄浅草線：「日本橋駅」B6出口直通
東京メトロ半蔵門線・銀座線：「三越前駅」B6出口より徒歩3分
JR：「東京駅」八重洲北口より徒歩10分</p>
            </>
        } />

        <InfoCard icon={MapPinIcon} title="目的" children={
          <p>最新のウェブ技術とデザインのトレンドを共有し、参加者同士のネットワーキングを促進することを目的としています。明日の開発に活かせる知見を持ち帰りましょう。</p>
        } />
      </div>

       <InfoCard icon={UsersIcon} title="主催者情報" children={
            <>
                <p><strong>主催:</strong> 株式会社Tech Forward</p>
                <p><strong>連絡先:</strong> contact@techforward.example.com</p>
                <p><strong>ウェブサイト:</strong> <a href="#" className="text-primary dark:text-primary-dark hover:underline">https://techforward.example.com</a></p>
            </>
       } />
    </div>
  );
};

const UsersIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );

export default Home;
