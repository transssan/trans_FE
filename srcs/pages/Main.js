import { language } from "../components/language";
import { mainPageLanguage } from "../components/languageHtml";

import PageView from "./Pageview";

class Main extends PageView {
  constructor() {
    super();
  }

  async getHtml() {
    // const html = setSelectHtml();
    const html = mainPageLanguage[language];

    return html;
  }
}
export default Main;
