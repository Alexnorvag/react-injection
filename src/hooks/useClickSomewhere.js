import { useCallback, useEffect, useState } from "react";

export const useClickSomewhere = ({ onClick }) => {
  const [parentClass, setParentClass] = useState();

  const handleClickSomewhere = useCallback(
    (event) => {
      const { className } = event.target;

      const isWrongBehaviour = onClick(event.target);

      if (isWrongBehaviour) {
        return;
      }

      setParentClass(className);
    },
    [onClick]
  );

  useEffect(() => {
    window.addEventListener("click", handleClickSomewhere);

    return () => {
      window.removeEventListener("click", handleClickSomewhere);
    };
  }, [handleClickSomewhere]);

  return {
    parentClass,
  };
};
