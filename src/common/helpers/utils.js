import { defaultLanguage, languages } from "./languages";
const ghPrefix = 'mashlom-assuta-patients';

export const changePathLanguage = (lang) => {
  const path = window.location.pathname;
  let newPath = path.startsWith(`/${ghPrefix}`) ? path.slice(ghPrefix.length + 1) : path;
  const pathParts = newPath.split('/').filter(Boolean);
  if (languages.includes(pathParts[0])) {
    pathParts.shift();
  }
  if (lang !== defaultLanguage) {
    pathParts.unshift(lang);
  }
  newPath = pathParts.join('/');
  return `/${newPath}`;
};

export const getCurrentPathLanguage = () => {
  const path = window.location.pathname;
  const pathArray = path.split('/');
  let currentLangauge = pathArray[1];
  if (currentLangauge === ghPrefix) {
    currentLangauge = pathArray[2];
  }
  const isLanguage = languages.includes(currentLangauge);
  return isLanguage ? currentLangauge : defaultLanguage;
};