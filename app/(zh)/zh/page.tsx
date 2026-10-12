import Home from "@/components/home";
import { pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("zh");
export default function Page() { return <Home locale="zh" />; }
