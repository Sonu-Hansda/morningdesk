import { IconType } from 'react-icons';

export interface Service {
    title: string;
    description: string;
    icon: IconType;
}

export interface Work {
    title: string;
    description: string;
    category: string;
}