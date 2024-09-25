export function drawer(title, content) {
  return `
    <span class="x5yr21d x17qophe x6ikm8r x10wlt62 x10l6tqk x13vifvy xh8yej3">
      <div tabindex="-1" aria-label="Snooze tab drawer" id="snoozedChatsDrawer">
        <div class="x78zum5 xdt5ytf x5yr21d x17qophe x6ikm8r x10wlt62 x67bb7w x10l6tqk x13vifvy xh8yej3 x150wa6m xnpuxes copyable-area">
          <header class="x9f619 x78zum5 x1okw0bk x6s0dn4 x7j6532 xc73u3c x9mfa4r xzwifym x150wa6m">
            <div class="x78zum5 x1okw0bk x6s0dn4 xh8yej3 x14wi4xw xexx8yu x4uap5 x18d9i69 xkhd6sd">
              <div title="Snoozed" class="x104kibb x1iyjqo2 x4osyxg x6ikm8r x10wlt62 x1mzt3pk xo442l1 x1ua5tub x1y332i5 x117nqv4 x1aueamr x1wm35g xj8l9r2">
                <h1 class="x1qlqyl8 x1pd3egz xcgk4ki" aria-label="">
                  ${title}
                </h1>
              </div>
              <span class="x1okw0bk">
                <div class="_ajv2 _ajv1"><span class=""></span></div>
              </span>
            </div>
          </header>
          <div class="x5yr21d x78zum5 xdt5ytf x6ikm8r x10wlt62" style="overflow-y: auto;">
            <div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 xdt5ytf x6s0dn4" style="flex-shrink: 0;">
              <div class="xh8yej3">
                ${content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}
