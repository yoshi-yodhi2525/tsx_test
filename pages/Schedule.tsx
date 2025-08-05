
import React from 'react';
import { Link } from 'react-router-dom';
import { schedule, speakers } from '../data';
import type { Session } from '../types';
import { LinkIcon } from '../components/Icons';

const SchedulePage = () => {
    const timeSlots = [...new Set(schedule.map(s => s.startTime))].sort();

    const getSpeakerName = (speakerId: string) => {
        const speaker = speakers.find(s => s.id === speakerId);
        return speaker ? speaker.name : 'N/A';
    };

    return (
        <div className="space-y-8">
            {timeSlots.map(time => (
                <div key={time} className="relative pl-8 sm:pl-12">
                    <div className="absolute left-0 top-1.5 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground dark:bg-primary-dark dark:text-black font-bold">
                       <span className="text-xs">{time}</span>
                    </div>
                    <div className="space-y-6">
                        {schedule.filter(s => s.startTime === time).map(session => (
                            <div key={session.id} id={`session-${session.id}`} className="bg-card dark:bg-dark-card p-4 rounded-lg shadow-md transition-all hover:shadow-lg">
                                <div className="flex justify-between items-start">
                                    <div>
                                        <p className="text-sm font-medium text-primary dark:text-primary-dark">
                                            {session.startTime} - {session.endTime} {session.track && `| Track ${session.track}`}
                                        </p>
                                        <h3 className="text-lg font-bold mt-1">{session.title}</h3>
                                        <p className="mt-2 text-gray-600 dark:text-gray-300">{session.description}</p>
                                    </div>
                                    <Link to={`/notepad#session-${session.id}`} className="ml-4 flex-shrink-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700" title={`'${session.title}'のメモを取る`}>
                                        <LinkIcon className="h-5 w-5 text-gray-500"/>
                                    </Link>
                                </div>
                                {session.speakerId && (
                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <Link to={`/speakers/${session.speakerId}`} className="inline-flex items-center text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary-dark">
                                            <img src={speakers.find(s => s.id === session.speakerId)?.photoUrl} alt={getSpeakerName(session.speakerId)} className="h-6 w-6 rounded-full mr-2" />
                                            {getSpeakerName(session.speakerId)}
                                        </Link>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SchedulePage;
