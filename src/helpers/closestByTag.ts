export default function closestByTag(el, selector) {
  while (el.tagName.toLowerCase() !== selector.toLowerCase()) {
    el = el.parentNode;
    if (!el) {
      return null;
    }
  }

  return el;
}
