const fs = require('fs');

const globby = require('globby');
const prettier = require('prettier');

(async () => {
  const prettierConfig = await prettier.resolveConfig('../../prettier.config.js');

  const pages = await globby(['src/pages/**/*{.js,.mdx}', '!src/pages/_*.js', '!src/pages/api']);
  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page.replace('src/pages', '').replace('.js', '').replace('.mdx', '');
                const route = path === '/index' ? '' : path;

                return `
                        <url>
                            <loc>${`https://tailwindcss.com${route}`}</loc>
                        </url>
                    `;
              })
              .join('')}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
})();
