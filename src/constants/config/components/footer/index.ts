import { AppRoutes } from '@components/AppRouter/types';

const { TIMELINE, BANKCARD, CONTACT } = AppRoutes;

export const footerText = {
  chapterTitle: 'Modsen Currency Tracker',
  chapterText:
    "Since then, the company has grown organically to. Starsup is the world's largest trading platform, with $12 billion worth of currency trading and 500,000 tickets sold daily to tens of thousands of traders worldwide.",
  subchapterText: [
    { title: 'General', text: ['Market', 'Service'], path: TIMELINE },
    { title: 'Product', text: ['Sparks', 'Snaps'], path: BANKCARD },
    { title: 'Community', text: ['Ideas', 'Streams'], path: CONTACT },
  ],
  copyrightNotice: 'Startsup © 2023-2024, All Rights Reserved',
};
