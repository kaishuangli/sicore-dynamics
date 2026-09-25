import { isAdminAuthenticated } from "@/lib/catalog/auth";
import AdminApp from "@/sections/admin/AdminApp";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Product catalog admin",
  robots: { index: false, follow: false },
};

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();
  return <AdminApp initialAuthenticated={authenticated} />;
}
