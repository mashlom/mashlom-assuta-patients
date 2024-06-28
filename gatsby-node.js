const messages = require("./src/locales/i18n-translations.json")
const { languages, defaultLanguage } = require("./src/common/helpers/languages");


exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions;
  return new Promise((resolve) => {
    let path = page.path;
    deletePage(page);

    for (let language of languages) {
      const isDefaultLanguage = language === defaultLanguage;
      if (!isDefaultLanguage) { // keeps the default language path without prefix
        path = '/' + language + page.path;
      }

      const pageForLanguage = Object.assign({}, page, {
        originalPath: page.path,
        path: path,
        context: {
          language,
          messages: messages[language]
        },
      });
      createPage(pageForLanguage)
    }
    resolve()
  })
};
