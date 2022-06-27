import { MainLayout } from "./layout/main";
import { Card } from "./components/card";

const cards = [
  {
    header: "Starter",
    price: "49",
    plan: "starter",
  },
  {
    header: "Basic",
    price: "149",
    plan: "basic",
  },
  {
    header: "Pro",
    price: "1499",
    plan: "pro",
  },
];

function App() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {cards.map((cardProps, idx) => (
          <Card key={idx} {...cardProps} />
        ))}
      </div>
    </MainLayout>
  );
}

export default App;
