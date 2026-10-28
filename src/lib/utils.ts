import type { SectionConfig } from '../types';

export const cn = (...classes: Array<string | false | null | undefined>) => classes.filter(Boolean).join(' ');
export const isExternalUrl = (url: string) => /^https?:\/\//.test(url);
export const sectionEnabled = (id: string, config: SectionConfig) => id in config && config[id as keyof SectionConfig];
