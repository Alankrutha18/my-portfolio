const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createGzip } = require('zlib');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

const sitemapStream = new SitemapStream({ hostname: 'https://yourdomain.com' });
const pipeline = sitemapStream.pipe(createGzip());

links.forEach(link => sitemapStream.write(link));
sitemapStream.end();

streamToPromise(pipeline).then(sm => {
  fs.writeFileSync('./public/sitemap.xml', sm);
  console.log('Sitemap successfully created!');
});
