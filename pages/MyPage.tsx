
import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const MyPage = () => {
    const [name, setName] = useLocalStorage('profileName', '');
    const [bio, setBio] = useLocalStorage('profileBio', '');
    const [isEditing, setIsEditing] = useState(false);
    const [tempName, setTempName] = useState(name);
    const [tempBio, setTempBio] = useState(bio);

    const handleSave = () => {
        setName(tempName);
        setBio(tempBio);
        setIsEditing(false);
    };
    
    const handleCancel = () => {
        setTempName(name);
        setTempBio(bio);
        setIsEditing(false);
    }

    return (
        <div className="bg-card dark:bg-dark-card p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">プロフィール</h2>
                {!isEditing && (
                    <button onClick={() => setIsEditing(true)} className="px-4 py-2 text-sm font-medium text-primary dark:text-primary-dark rounded-md hover:bg-primary/10">
                        編集
                    </button>
                )}
            </div>

            {isEditing ? (
                <div className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">名前</label>
                        <input
                            type="text"
                            id="name"
                            value={tempName}
                            onChange={(e) => setTempName(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="あなたの名前"
                        />
                    </div>
                    <div>
                        <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">自己紹介</label>
                        <textarea
                            id="bio"
                            rows={4}
                            value={tempBio}
                            onChange={(e) => setTempBio(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm"
                            placeholder="所属や興味のある分野など"
                        ></textarea>
                    </div>
                    <div className="flex justify-end space-x-2">
                         <button onClick={handleCancel} className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600">
                            キャンセル
                        </button>
                        <button onClick={handleSave} className="px-4 py-2 text-sm font-medium text-white bg-primary dark:bg-primary-dark rounded-md hover:bg-opacity-90">
                            保存
                        </button>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">名前</h3>
                        <p className="text-lg">{name || '未設定'}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-medium text-gray-500">自己紹介</h3>
                        <p className="text-lg whitespace-pre-wrap">{bio || '未設定'}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyPage;
