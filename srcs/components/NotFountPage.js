import PageView from "../pages/Pageview";

class NotFoundPage extends PageView {
  async getHtml() {
    return `
      <div class="error-container">
        <div>
          <p class="neonText">404</p>
          <p class="neonText">Not Found</p>
        </div>
    </div>
    `;
  }
}

export default NotFoundPage;
