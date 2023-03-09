export default async function injectScript(src: string) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = src;
    script.addEventListener("load", resolve);
    script.addEventListener("error", () => reject("Error loading script."));
    script.addEventListener("abort", () => reject("Script loading aborted."));
    document.head.appendChild(script);
  });
}
