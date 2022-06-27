import { useCallback, useEffect, useState } from "react";

import { MainLayout } from "./layout/main";
import { Card } from "./components/card";
import { useInjection } from "./hooks/useInjection";
import { isElementInjected } from "./utils/html";
import { Injection } from "./components/injection";

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

const injectedClassName = "injected-wrapper";

function App() {
  const [parentClass, setParentClass] = useState();

  useInjection({
    parentClass: parentClass,
    wrapperClass: injectedClassName,
    component: <Injection />,
  });

  const handleClickSomewhere = useCallback((event) => {
    const { className } = event.target;

    if (isElementInjected(event.target, injectedClassName)) {
      return;
    }

    setParentClass(className);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickSomewhere);

    return () => {
      window.removeEventListener("click", handleClickSomewhere);
    };
  }, [handleClickSomewhere]);

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
