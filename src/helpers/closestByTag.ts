export default function closestByTag(el: any, selector: string) {
  while (el.tagName.toLowerCase() !== selector.toLowerCase()) {
    el = el.parentNode;
    if (!el) {
      return null;
    }
  }

  return el;
}
