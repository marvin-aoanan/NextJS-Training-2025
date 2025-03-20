import Header from "@/app/components/header";
import Footer from "@/app/components/footer";

export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <html lang="en">
    <body>
    <div>
    <Header />
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
      </div>
    </div>
    </body>
    </html>
  ) : (
    <html lang="en">
    <body>
      <div>{login}</div>
      <Footer />
    </body>
    </html>
  );
}