export function getElementByXpath(path) {
  return document.evaluate(
    path,
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
}

export function getElementCoordinates(element) {
  const rect = element.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  return { x, y };
}

export function isUserTyping() {
  const activeElement = document.activeElement;
  return (
    activeElement.tagName === "INPUT" ||
    activeElement.tagName === "TEXTAREA" ||
    activeElement.isContentEditable
  );
}

// Function to hide all children of a given element
export function hideAllChildren(element) {
  // Loop through each child of the element
  Array.from(element.children).forEach((child) => {
    child.style.display = "none";
  });
}

// Utility function to remove an element if it exists
export function removeIfExists(xpath) {
  const element = getElementByXpath(xpath);
  if (element) {
    element.remove();
  }
}

// Function to observe the DOM and perform an action based on XPath when it appears
export function observeAndAct(xpath, callback) {
  const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
      const element = getElementByXpath(xpath);
      if (element) {
        callback(element);
      }
    });
  });

  // Start observing the entire document for changes
  observer.observe(document.body, {
    childList: true, // Observe direct children
    subtree: true, // Observe all descendants
  });

  // Optionally, disconnect observer once the element is removed (for performance)
  // observer.disconnect();
}

export function injectScript(file, callback) {
  const script = document.createElement("script");
  script.src = chrome.runtime.getURL(file);
  script.onload = function () {
    this.remove();
    if (typeof callback === "function") {
      callback();
    }
  };
  (document.head || document.documentElement).appendChild(script);
}

export function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const currentYear = new Date().getFullYear();
  const formatOptions = {
    month: "short", // "Aug"
    day: "numeric", // "30"
    hour: "numeric", // "10"
    minute: "2-digit", // "00"
    hour12: true, // for AM/PM format
  };

  // Add year only if it's different from the current year
  if (date.getFullYear() !== currentYear) {
    formatOptions.year = "numeric"; // "2024"
  }

  return date.toLocaleString("en-US", formatOptions);
}

export function getUniqueSelector(element) {
  if (!(element instanceof Element)) return;
  const path = [];
  while (element.nodeType === Node.ELEMENT_NODE) {
    let selector = element.nodeName.toLowerCase();
    if (element.id) {
      selector += "#" + element.id;
      path.unshift(selector);
      break;
    } else {
      let sibling = element;
      let nth = 1;
      while ((sibling = sibling.previousElementSibling)) {
        if (sibling.nodeName.toLowerCase() === selector) nth++;
      }
      if (nth !== 1) selector += ":nth-of-type(" + nth + ")";
    }
    path.unshift(selector);
    element = element.parentNode;
  }
  return path.join(" > ");
}
