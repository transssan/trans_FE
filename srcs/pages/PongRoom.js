import { language } from "../components/language";
import { PongRoomPageLanguage } from "../components/languageHtml";
import PageView from "./Pageview";

class PongRoom extends PageView {
  constructor(params) {
    super();
    // console.log("asdfad", params);
    this.id = params.id;
  }

  async getHtml() {
    const html = PongRoomPageLanguage(this.id)[language];
    return html;
    // return `<h1>Game ${this.id}</h1>`;
  }
}
export default PongRoom;
