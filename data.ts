
import type { Speaker, Session, FaqItem, DownloadableFile } from './types';

export const speakers: Speaker[] = [
  {
    id: 'speaker-1',
    name: 'タカハシノリアキ',
    title: '株式会社プランノーツ代表取締役。一般社団法人ノンプログラマー協会代表理事。',
    bio: '電気通信大学大学院電子情報学研究科修了後、サックスプレイヤーとして活動。日本におけるビジネスマンの働き方、生産性、IT活用などに課題を感じ、2015年6月に独立、起業。現在「日本の『働く』の価値を高める」をテーマに、ノンプログラマー向けデジタルリスキリング支援、組織のDX推進・越境学習支援、コミュニティ運営などを行う。',
    photoUrl: 'https://tonari-it.com/wp-content/uploads/profile-300x300.png',
    socials: {
      twitter: 'https://twitter.com/ntakahashi0505',
    },
  },
  {
    id: 'speaker-2',
    name: '鈴木 美咲',
    title: 'UI/UXデザイナー',
    bio: 'ユーザー中心設計を信条とするデザイナー。直感的で美しいインターフェース制作を得意とし、数々のアプリやウェブサイトのデザインを手掛ける。趣味は美術館巡り。',
    photoUrl: 'https://picsum.photos/id/1011/200/200',
    socials: {
      twitter: 'https://twitter.com/misaki_ux',
    },
  },
  {
    id: 'speaker-3',
    name: '高橋 健太',
    title: 'クラウドアーキテクト',
    bio: '大規模インフラの設計と運用を専門とする。サーバーレスアーキテクチャとコスト削減に関する知見が豊富。最近はエッジコンピューティングに注目している。',
    photoUrl: 'https://picsum.photos/id/1025/200/200',
    socials: {
      linkedin: 'https://linkedin.com/in/kenta-takahashi',
    },
  },
];

export const schedule: Session[] = [
  {
    id: 'session-1',
    title: 'オープニングキーノート',
    speakerId: 'speaker-1',
    startTime: '10:00',
    endTime: '10:30',
    description: 'イベントの開幕を告げるキーノートセッション。Reactの未来と今後のウェブ開発のトレンドについて語ります。',
    track: 'A',
  },
  {
    id: 'session-2',
    title: 'モダンReactの状態管理戦略',
    speakerId: 'speaker-1',
    startTime: '11:00',
    endTime: '12:00',
    description: 'useStateからZustandまで、現代のReactアプリケーションに最適な状態管理ライブラリの選び方と実践的な使い方を解説します。',
    track: 'A',
  },
  {
    id: 'session-3',
    title: 'ユーザーを魅了するUIデザインの原則',
    speakerId: 'speaker-2',
    startTime: '11:00',
    endTime: '12:00',
    description: '優れたユーザー体験を生み出すためのUIデザインの基本原則を、具体的な事例を交えながら紹介します。',
    track: 'B',
  },
  {
    id: 'session-4',
    title: 'ランチ休憩',
    speakerId: '',
    startTime: '12:00',
    endTime: '13:00',
    description: 'お昼休憩です。会場近くの飲食店マップもご活用ください。',
    track: 'A',
  },
  {
    id: 'session-5',
    title: 'サーバーレスで実現するスケーラブルなバックエンド',
    speakerId: 'speaker-3',
    startTime: '13:30',
    endTime: '14:30',
    description: 'AWS LambdaやFirebase Functionsを活用し、メンテナンスが容易で拡張性の高いバックエンドを構築する方法を学びます。',
    track: 'A',
  },
  {
    id: 'session-6',
    title: 'インタラクティブなUIプロトタイピング実践',
    speakerId: 'speaker-2',
    startTime: '13:30',
    endTime: '14:30',
    description: 'FigmaやProtoPieを使い、アイデアを素早く形にするインタラクティブなプロトタイプの作成手法をハンズオン形式で体験します。',
    track: 'B',
  },
    {
    id: 'session-7',
    title: 'クロージングセッション & Q&A',
    speakerId: 'speaker-1',
    startTime: '15:00',
    endTime: '15:30',
    description: '本日のセッションを振り返り、登壇者全員でのQ&Aセッションを行います。皆様からのご質問をお待ちしております。',
    track: 'A',
  },
];

export const faqData: FaqItem[] = [
  {
    question: 'Wi-Fiは利用できますか？',
    answer: 'はい、会場内では無料のWi-Fiをご利用いただけます。SSIDとパスワードは受付にてご確認ください。',
  },
  {
    question: '電源はありますか？',
    answer: '一部の座席に電源をご用意しておりますが、数に限りがございます。譲り合ってご利用ください。モバイルバッテリーの持参を推奨します。',
  },
  {
    question: '途中参加・途中退出は可能ですか？',
    answer: 'はい、可能です。他の参加者のご迷惑にならないよう、セッションの合間に静かにご移動ください。',
  },
  {
    question: '資料は後でいただけますか？',
    answer: 'はい、一部のセッションを除き、登壇資料は後日このポータルサイトの「資料ダウンロード」ページで公開予定です。',
  },
];

export const files: DownloadableFile[] = [
    {
        title: 'モダンReactの状態管理戦略',
        description: 'Reactの状態管理ライブラリの選び方と実践的な使い方',
        url: '#',
        speakerId: 'speaker-1',
    },
    {
        title: 'ユーザーを魅了するUIデザインの原則',
        description: '優れたUXを生み出すUIデザインの基本原則',
        url: '#',
        speakerId: 'speaker-2',
    },
    {
        title: 'サーバーレスで実現するスケーラブルなバックエンド',
        description: 'AWS LambdaやFirebase Functionsを活用したバックエンド構築',
        url: '#',
        speakerId: 'speaker-3',
    }
];
