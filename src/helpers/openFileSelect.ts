export default async function openFileSelect(options?: {
  multiple: boolean;
}): Promise<File[]> {
  return new Promise((resolve, reject) => {
    try {
      const fileInputEl = document.createElement("input");
      fileInputEl.type = "file";

      if (options?.multiple) {
        fileInputEl.multiple = true;
      }

      fileInputEl.onchange = (e: any) => {
        resolve(e.target.files);
      };

      fileInputEl.click();
    } catch (e) {
      reject(e);
    }
  });
}
