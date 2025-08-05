
import React from 'react';
import { Link } from 'react-router-dom';
import { files, speakers } from '../data';
import { DownloadIcon, FileTextIcon, ExternalLinkIcon } from '../components/Icons';

const DownloadsPage = () => {
    const getSpeaker = (speakerId: string) => speakers.find(s => s.id === speakerId);

    return (
        <div className="space-y-8">
            <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-6 rounded-lg shadow-md text-center">
                <h2 className="text-2xl font-bold mb-2 text-blue-800 dark:text-blue-200">イベントアンケートにご協力ください</h2>
                <p className="text-blue-600 dark:text-blue-300 mb-4">今後のイベント品質向上のため、皆様のご意見をお聞かせください。</p>
                <a
                    href="https://forms.gle/example"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 dark:bg-primary-dark dark:hover:bg-opacity-90"
                >
                    アンケートフォームへ
                    <ExternalLinkIcon className="ml-2 -mr-1 h-5 w-5" />
                </a>
            </div>

            <div className="bg-card dark:bg-dark-card p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">資料一覧</h2>
                <div className="space-y-4">
                    {files.map((file, index) => {
                        const speaker = getSpeaker(file.speakerId);
                        return (
                            <div key={index} className="flex items-start space-x-4 p-4 rounded-md bg-gray-50 dark:bg-gray-800">
                                <FileTextIcon className="h-8 w-8 text-primary dark:text-primary-dark flex-shrink-0 mt-1" />
                                <div className="flex-grow">
                                    <h3 className="font-bold">{file.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{file.description}</p>
                                    {speaker && (
                                        <Link to={`/speakers/${speaker.id}`} className="text-xs text-gray-500 hover:underline">
                                            by {speaker.name}
                                        </Link>
                                    )}
                                </div>
                                <a href={file.url} download className="ml-4 flex-shrink-0 p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700" title={`Download ${file.title}`}>
                                    <DownloadIcon className="h-6 w-6" />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default DownloadsPage;
