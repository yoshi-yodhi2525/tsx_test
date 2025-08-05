
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { speakers, schedule } from '../data';
import { TwitterIcon, LinkedinIcon, CalendarIcon } from '../components/Icons';

const SpeakerDetailPage = () => {
    const { id } = useParams<{ id: string }>();
    const speaker = speakers.find(s => s.id === id);
    const speakerSessions = schedule.filter(s => s.speakerId === id);

    useEffect(() => {
        if (speaker) {
            document.title = `${speaker.name} | Event Portal`;
        }
    }, [speaker]);

    if (!speaker) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
                <h1 className="text-2xl font-bold">登壇者が見つかりません</h1>
                <Link to="/speakers" className="mt-4 inline-block text-primary dark:text-primary-dark hover:underline">登壇者一覧に戻る</Link>
            </div>
        );
    }

    return (
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-card dark:bg-dark-card p-6 sm:p-8 rounded-lg shadow-lg">
                <div className="md:flex md:space-x-8">
                    <div className="md:w-1/3 text-center md:text-left">
                        <img className="h-40 w-40 rounded-full object-cover mx-auto md:mx-0" src={speaker.photoUrl} alt={speaker.name} />
                        <h1 className="text-3xl font-bold mt-4">{speaker.name}</h1>
                        <p className="text-primary dark:text-primary-dark text-lg">{speaker.title}</p>
                        <div className="flex justify-center md:justify-start space-x-4 mt-4">
                            {speaker.socials.twitter && (
                                <a href={speaker.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-primary-dark">
                                    <TwitterIcon className="h-6 w-6" />
                                </a>
                            )}
                            {speaker.socials.linkedin && (
                                <a href={speaker.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary dark:hover:text-primary-dark">
                                    <LinkedinIcon className="h-6 w-6" />
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="md:w-2/3 mt-6 md:mt-0">
                        <h2 className="text-2xl font-semibold border-b pb-2 mb-4">プロフィール</h2>
                        <p className="text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">{speaker.bio}</p>

                        <h2 className="text-2xl font-semibold border-b pb-2 mb-4 mt-8">担当セッション</h2>
                        <div className="space-y-4">
                            {speakerSessions.length > 0 ? (
                                speakerSessions.map(session => (
                                    <Link key={session.id} to={`/schedule#session-${session.id}`} className="block p-4 rounded-md bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <CalendarIcon className="h-4 w-4 mr-2" />
                                            {session.startTime} - {session.endTime} (Track {session.track})
                                        </div>
                                        <h3 className="text-lg font-bold text-primary dark:text-primary-dark mt-1">{session.title}</h3>
                                    </Link>
                                ))
                            ) : (
                                <p className="text-gray-500">担当セッションはありません。</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SpeakerDetailPage;
