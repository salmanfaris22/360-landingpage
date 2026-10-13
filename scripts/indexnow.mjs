// Pings IndexNow (Bing, Yandex, Seznam, Naver…) with every URL in the live sitemap.
// Run after a deploy has finished:  npm run indexnow
// The key is public by design: it is served at /23bcfc48f4ca95beceb26ab70cb871c1.txt so engines can verify the sender.
const SITE = "https://www.media360concept.com";
const KEY = "23bcfc48f4ca95beceb26ab70cb871c1";

const xml = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]).filter((u) => !/\.(png|jpe?g|webp|avif)$/.test(u));
if (!urlList.length) throw new Error("No URLs found in the live sitemap");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${res.status} ${res.statusText} for ${urlList.length} URLs`);
if (res.status >= 400) process.exit(1);
