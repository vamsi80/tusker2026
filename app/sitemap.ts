import { MetadataRoute } from 'next';
import { services } from '@/app/data';

const BASE_URL = 'https://www.thewhitetusker.com';

// Planned silo pages — add here as they are created
const siloPages = [
    '/brand-experience-design',
    '/experience-centers',
    '/immersive-technology',
    '/corporate-films',
    '/work',
    '/brand-solutions',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const servicePages = services.map((service) => ({
        url: `${BASE_URL}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.85,
    }));

    const siloEntries = siloPages.map((path) => ({
        url: `${BASE_URL}${path}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.9,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        ...siloEntries,
        ...servicePages,
    ];
}
