import { Header } from "../components/header";

export const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen w-full bg-slate-900">
      <Header />

      <main className="md:container md:mx-auto px-4">
        <section className="py-10 lg:py-20">{children}</section>
      </main>
    </div>
  );
};
