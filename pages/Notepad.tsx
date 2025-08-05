
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { schedule } from '../data';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Notes = {
    [sessionId: string]: string;
};

const NotepadPage = () => {
    const [notes, setNotes] = useLocalStorage<Notes>('sessionNotes', {});
    const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
    const [notification, setNotification] = useState('');
    const location = useLocation();
    const sessionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            const element = document.getElementById(hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setActiveSessionId(hash.replace('session-', ''));
            }
        }
    }, [location.hash]);

    const handleNoteChange = (sessionId: string, text: string) => {
        setNotes({ ...notes, [sessionId]: text });
    };

    const handleSave = () => {
        // useLocalStorage hook already saves on change, this provides user feedback
        setNotification('メモが保存されました！');
        setTimeout(() => setNotification(''), 2000);
    };

    return (
        <div>
            {notification && (
                <div className="fixed top-20 right-5 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50">
                    {notification}
                </div>
            )}
            <div className="space-y-6">
                {schedule
                    .filter(session => session.speakerId) // Filter out items like 'Lunch'
                    .map(session => (
                    <div
                        key={session.id}
                        id={`session-${session.id}`}
                        ref={el => { sessionRefs.current[session.id] = el; }}
                        className={`bg-card dark:bg-dark-card p-4 sm:p-6 rounded-lg shadow-md transition-all ${activeSessionId === session.id ? 'ring-2 ring-primary dark:ring-primary-dark' : ''}`}
                    >
                        <h3 className="text-lg font-bold">{session.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{session.startTime} - {session.endTime}</p>
                        <textarea
                            className="w-full h-32 p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md focus:ring-primary focus:border-primary"
                            placeholder="このセッションに関するメモを入力..."
                            value={notes[session.id] || ''}
                            onChange={e => handleNoteChange(session.id, e.target.value)}
                            onFocus={() => setActiveSessionId(session.id)}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                 <button onClick={handleSave} className="px-6 py-3 text-base font-medium text-white bg-primary dark:bg-primary-dark rounded-md hover:bg-opacity-90">
                    すべてのメモを保存
                </button>
            </div>
        </div>
    );
};

export default NotepadPage;