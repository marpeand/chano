const CONFIG = {
    // Site config
    title: 'Chano',
    siteDescription: 'Personal Blog and Portfolio template build using NextJS & TailwindCSS',
    url: 'https://chano.vercel.app', // Change this with your url
    lang: 'en-US',
    theme: 'dark', // 'dark' or 'light'
    postPerPage: 6, // Number of post at /
    year: 2023,
    links: [
        { id: 0, name: 'Home', href: '/' },
        { id: 1, name: 'About', href: '/about' },
        { id: 2, name: 'Projects', href: '/projects' },
        { id: 3, name: 'Archive', href: '/archive' },
        { id: 4, name: 'Rss', href: '/rss.xml' },
    ],

    // Color config
    darkColor: '#050505',
    lightColor: '#FFFFFF',

    // Author config
    author: 'chano',
    authorIntroduction:
        'Lorem ipsum dolor sit amet, consectetur \
        adipiscing elit. Duis ac porttitor erat. \
        Vivamus elementum efficitur imperdiet. ', // Write a small introduction about you, no more than 30 words is recommended.

    social: {
        github: 'https://www.github.com/marpeand/chano',
        twitter: 'https://twitter.com',
        linkedin: 'https://www.linkedin.com/',
        coffee: 'https://www.buymeacoffee.com/',
        kofi: 'https://ko-fi.com/',
        mastodon: 'https://mastodon.social/@mastodonuser',
        resume: '/resume.pdf', // upload your resume in /public folder
    },

    // Analitycs config
    useGoogleAnalytics: false, // Set 'false' to desactivate Google Analytics
    GoogleAnalyticsCode: '', // G-XXXXXXXXXX
}

module.exports = CONFIG
