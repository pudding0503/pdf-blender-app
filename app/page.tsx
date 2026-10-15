import Home from "@/components/home";
import { getPublishedAppVersion, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("en");
export default async function Page() {
  const appVersion = await getPublishedAppVersion();
  return <Home appVersion={appVersion} />;
}
