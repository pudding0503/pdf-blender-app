import Home from "@/components/home";
import { getLatestAppVersion, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("en");
export default async function Page() {
  const appVersion = await getLatestAppVersion();
  return <Home appVersion={appVersion} />;
}
