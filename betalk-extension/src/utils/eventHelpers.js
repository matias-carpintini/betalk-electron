export function simulateKeyPress(element, key) {
  const keyboardEvent = new KeyboardEvent("keydown", {
    key: key,
    code: key,
    keyCode: key,
    which: key,
    bubbles: true,
    cancelable: true,
  });
  element.dispatchEvent(keyboardEvent);
}

export function triggerNativeShortcut(keys) {
  const event = new KeyboardEvent("keydown", {
    bubbles: true,
    cancelable: true,
    key: keys.key,
    code: keys.code,
    location: KeyboardEvent.DOM_KEY_LOCATION_STANDARD,
    ctrlKey: keys.ctrlKey,
    altKey: keys.altKey,
    shiftKey: keys.shiftKey,
    metaKey: keys.metaKey,
  });
  document.dispatchEvent(event);
}
