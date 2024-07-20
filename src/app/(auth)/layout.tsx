import Header from "../_components/Header";

export default function UserLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center p-10">{children}</main>
    </>
  );
}
