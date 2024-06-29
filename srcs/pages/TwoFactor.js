import { language } from "../components/language";
import {
  PongRoomPageLanguage,
  twoFactorPageLanguage,
} from "../components/languageHtml";
import PageView from "./Pageview";

class TwoFactor extends PageView {
  constructor() {
    super();
    // console.log("asdfad", params);
    // this.id = params.id;
  }

  async getHtml() {
    const html = twoFactorPageLanguage[language];
    return html;
  }
}
export default TwoFactor;
