export const baseUrl = "https://sentra.app";

export default async function sitemap() {
  const routes = [
    `${baseUrl}/`,
    // `${baseUrl}/about`,
    `${baseUrl}/manifesto`,
    `${baseUrl}/terms`,
    `${baseUrl}/privacy`,
  ];
  return [...routes];
}
