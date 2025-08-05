
import React from 'react';
import { Link } from 'react-router-dom';
import { speakers } from '../data';
import type { Speaker } from '../types';

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => (
    <Link to={`/speakers/${speaker.id}`} className="block bg-card dark:bg-dark-card p-4 rounded-lg shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="flex items-center space-x-4">
            <img className="h-20 w-20 rounded-full object-cover" src={speaker.photoUrl} alt={speaker.name} />
            <div>
                <h3 className="text-lg font-bold text-card-foreground dark:text-dark-card-foreground">{speaker.name}</h3>
                <p className="text-primary dark:text-primary-dark">{speaker.title}</p>
            </div>
        </div>
    </Link>
);

const SpeakersPage = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakers.map(speaker => (
                <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
        </div>
    );
};

export default SpeakersPage;
