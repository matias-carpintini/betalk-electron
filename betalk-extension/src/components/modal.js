export default class Modal {
  constructor(options) {
    this.modalContent = options.modalContent || "";
    this.formHandler = options.formHandler || null;
    this.shortcutHandler = options.shortcutHandler || null; // Custom shortcut handler
    this.keyHandler = options.keyHandler || null; // Custom key handler

    this.modalElement = this.createModalElement();

    this.handleEscKey = this.handleEscKey.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.initialize();
  }

  createModalElement() {
    const modalDiv = document.createElement("div");
    modalDiv.classList.add(
      "x10l6tqk",
      "x13vifvy",
      "xds687c",
      "x1ey2m1c",
      "x17qophe"
    );
    modalDiv.setAttribute("tabindex", "-1");
    modalDiv.innerHTML = `
      <div tabindex="-1" class="modal">
        <div data-animate-modal-backdrop="true"
          class="xixxii4 x13vifvy x17qophe x9f619 xh8yej3 x5yr21d x1bpt9pm xw2csxc x1odjw0f xa03szm xnpuxes copyable-area">
          <div class="x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xpb48g7 x1jn0hjm x1us19tq"
            role="dialog">
            <div class="x9f619 x78zum5 x1c4vz4f x2lah0s xdl72j9 xdt5ytf xkwfhqy x17e6fzg x15dh256 x1t7u3xy x1shw4ur x6ikm8r x10wlt62 x14atkfc xexx8yu x4uap5 x18d9i69 xkhd6sd x1iek97a"
              data-animate-modal-popup="true">
              <div class="x1n2onr6 x1iyjqo2 xs83m0k x1l7klhg x1mzt3pk xeaf4i8" data-animate-modal-body="true">
                ${this.modalContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    return modalDiv;
  }

  initialize() {
    const formElement = this.modalElement.querySelector("form");
    if (formElement && this.formHandler) {
      formElement.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Find the submit button that was clicked
        const submitter =
          e.submitter || formElement.querySelector('button[type="submit"]');

        // Create FormData from the form
        const formData = new FormData(formElement);

        // Manually add the action from the clicked button, if available
        if (submitter && submitter.getAttribute("data-action")) {
          formData.append("formAction", submitter.getAttribute("data-action"));
          formData.append("objectId", submitter.getAttribute("data-object-id"));
        }

        const success = await this.formHandler(formData);
        if (success) {
          this.closeModal();
        }
      });
    }

    document.addEventListener("keydown", this.handleEscKey);
    const backdrop = this.modalElement.querySelector(
      "[data-animate-modal-backdrop]"
    );

    if (backdrop) {
      backdrop.addEventListener("click", this.handleOutsideClick);
    }
  }

  handleEscKey(e) {
    if (e.key === "Escape") {
      this.closeModal();
    }
  }

  handleOutsideClick(e) {
    const popup = this.modalElement.querySelector("[data-animate-modal-popup]");
    if (!popup.contains(e.target)) {
      this.closeModal();
    }
  }

  openModal() {
    document.body.appendChild(this.modalElement);
    document.addEventListener("keydown", this.handleKeyDown, true); // Capture keydown events
    if (this.keyHandler) {
      document.addEventListener("keydown", this.keyHandler, true); // Add custom key handler
    }
  }

  closeModal() {
    document.body.removeChild(this.modalElement);
    document.removeEventListener("keydown", this.handleKeyDown, true); // Remove keydown event listener
    document.removeEventListener("keydown", this.handleEscKey);
    if (this.keyHandler) {
      document.removeEventListener("keydown", this.keyHandler, true); // Remove custom key handler
    }
    const backdrop = this.modalElement.querySelector(
      "[data-animate-modal-backdrop]"
    );
    if (backdrop) {
      backdrop.removeEventListener("click", this.handleOutsideClick);
    }
  }

  handleKeyDown(e) {
    if (e.key === "Escape") {
      this.closeModal();
    } else if (this.shortcutHandler) {
      this.shortcutHandler(e); // Call custom shortcut handler
    } else {
      // Prevent default action for all other keys
      e.stopPropagation();
    }
  }
}
