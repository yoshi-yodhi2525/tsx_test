
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';

import Home from './pages/Home';
import SchedulePage from './pages/Schedule';
import SpeakersPage from './pages/Speakers';
import SpeakerDetailPage from './pages/SpeakerDetail';
import MapPage from './pages/Map';
import FaqPage from './pages/Faq';
import DownloadsPage from './pages/Downloads';
import MyPage from './pages/MyPage';
import NotepadPage from './pages/Notepad';

import { 
    HomeIcon, CalendarIcon, UsersIcon, MapPinIcon, HelpCircleIcon, 
    DownloadIcon, EditIcon, UserCircleIcon, SunIcon, MoonIcon 
} from './components/Icons';
import { useLocalStorage } from './hooks/useLocalStorage';

const navItems = [
  { path: '/', label: '概要', icon: HomeIcon },
  { path: '/schedule', label: 'タイムテーブル', icon: CalendarIcon },
  { path: '/speakers', label: '登壇者', icon: UsersIcon },
  { path: '/map', label: '会場マップ', icon: MapPinIcon },
  { path: '/faq', label: 'Q&A', icon: HelpCircleIcon },
  { path: '/downloads', label: '資料', icon: DownloadIcon },
  { path: '/notepad', label: 'メモ帳', icon: EditIcon },
  { path: '/mypage', label: 'マイページ', icon: UserCircleIcon },
];

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="bg-card dark:bg-dark-card/80 backdrop-blur-sm sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0 text-primary dark:text-primary-dark font-bold text-xl">
              Event Portal
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-primary/10 text-primary dark:text-primary-dark'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`
                  }
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
                aria-label="Toggle dark mode"
              >
                {theme === 'light' ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
              </button>
            <div className="md:hidden ml-2">
              <button onClick={() => setMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none">
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary dark:text-primary-dark'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`
                }
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer className="bg-card dark:bg-dark-card border-t border-gray-200 dark:border-gray-800 mt-12">
    <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
      <p>&copy; 2025 ノンプログラマーのためのスキルアップ研究会. All rights reserved.</p>
    </div>
  </footer>
);

const PageWrapper = ({ children, title }: { children: ReactNode; title: string }) => {
  useEffect(() => {
    document.title = `${title} | Event Portal`;
  }, [title]);

  return (
    <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold tracking-tight text-card-foreground dark:text-dark-card-foreground mb-6">{title}</h1>
      {children}
    </main>
  );
};

const App = () => {
  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<PageWrapper title="イベント概要" children={<Home />} />} />
            <Route path="/schedule" element={<PageWrapper title="タイムテーブル" children={<SchedulePage />} />} />
            <Route path="/speakers" element={<PageWrapper title="登壇者一覧" children={<SpeakersPage />} />} />
            <Route path="/speakers/:id" element={<SpeakerDetailPage />} />
            <Route path="/map" element={<PageWrapper title="会場マップ・アクセス" children={<MapPage />} />} />
            <Route path="/faq" element={<PageWrapper title="よくある質問" children={<FaqPage />} />} />
            <Route path="/downloads" element={<PageWrapper title="資料ダウンロード" children={<DownloadsPage />} />} />
            <Route path="/mypage" element={<PageWrapper title="マイページ" children={<MyPage />} />} />
            <Route path="/notepad" element={<PageWrapper title="セッションメモ" children={<NotepadPage />} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
