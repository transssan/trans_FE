import { language } from "../components/language";
import { DicePageLanguage } from "../components/languageHtml";
import PageView from "./Pageview";

class Dice extends PageView {
  constructor() {
    super();
  }

  async getHtml() {
    const html = DicePageLanguage[language];

    return html;
  }
}
export default Dice;
