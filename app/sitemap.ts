import { MetadataRoute } from 'next';
import { services } from '@/app/data';

const BASE_URL = 'https://www.thewhitetusker.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const servicePages = services.map((service) => ({
        url: `${BASE_URL}/${service.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        ...servicePages,
    ];
}
