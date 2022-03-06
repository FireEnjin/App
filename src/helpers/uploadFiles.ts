import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import getExtension from "./getExtension";
import resizeImage from "./resizeImage";

export default async function uploadFiles(
  app: any,
  files: File[],
  options?: {
    path?: string;
  }
): Promise<{ success: boolean; name?: string; url?: string; error?: any }[]> {
  const results = [];
  const storage = getStorage(app);
  for (const file of files) {
    try {
      const storageRef = ref(
        storage,
        `/${
          options?.path || ""
        }${new Date().toISOString()}.${await getExtension(file?.name)}`
      );
      const upload = await uploadBytes(
        storageRef,
        file?.type?.match(/image.*/) ? await resizeImage(file, 1080) : file
      );
      const url = await getDownloadURL(upload.ref);
      results.push({
        success: true,
        name: file?.name,
        url,
      });
    } catch (error) {
      results.push({ succes: false, error });
    }
  }

  return results;
}
