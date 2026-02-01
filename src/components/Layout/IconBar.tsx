'use client';

import { useState } from 'react';
import IconButton from './IconButton';
import Modal from './Modal';

type ModalType = 'home' | 'contacts' | 'analytics' | 'notifications' | 'settings' | null;

export default function IconBar() {
    const [activeIcon, setActiveIcon] = useState<string>('contacts');
    const [openModal, setOpenModal] = useState<ModalType>(null);

    const handleIconClick = (iconName: string, modalType: ModalType) => {
        setActiveIcon(iconName);
        setOpenModal(modalType);
    };

    const renderModalContent = () => {
        switch (openModal) {
            case 'home':
                return <p>Navigate to home page and view your dashboard.</p>;
            case 'contacts':
                return <p>View and manage your contacts and connections.</p>;
            case 'analytics':
                return <p>Check your statistics and analytics here.</p>;
            case 'notifications':
                return <p>You have no new notifications.</p>;
            case 'settings':
                return <p>Adjust your preferences and account settings.</p>;
            default:
                return null;
        }
    };

    const getModalTitle = () => {
        switch (openModal) {
            case 'home': return 'Home';
            case 'contacts': return 'Contacts';
            case 'analytics': return 'Analytics';
            case 'notifications': return 'Notifications';
            case 'settings': return 'Settings';
            default: return '';
        }
    };

    return (
        <>
            <div className="flex flex-col items-center w-17 h-screen py-8 space-y-8 bg-secondaryBg/80 border-r border-secondaryBg">
                <IconButton
                    active={activeIcon === 'settings'}
                    onClick={() => handleIconClick('settings', 'settings')}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    }
                />
                <IconButton
                    active={activeIcon === 'notifications'}
                    onClick={() => handleIconClick('notifications', 'notifications')}
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15"/>
                            <path  strokeLinecap="round" strokeLinejoin="round" d="M12 9l3 3m0 0l-3 3m3-3H3" />
                        </svg>
                    }
                />
            </div>

            <Modal
                isOpen={openModal !== null}
                onClose={() => setOpenModal(null)}
                title={getModalTitle()}
            >
                {renderModalContent()}
            </Modal>
        </>
    );
}
