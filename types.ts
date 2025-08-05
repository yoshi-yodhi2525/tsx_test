
export interface Speaker {
  id: string;
  name: string;
  title: string;
  bio: string;
  photoUrl: string;
  socials: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface Session {
  id: string;
  title: string;
  speakerId: string;
  startTime: string;
  endTime: string;
  description: string;
  track: 'A' | 'B';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface DownloadableFile {
  title: string;
  description: string;
  url: string;
  speakerId: string;
}
