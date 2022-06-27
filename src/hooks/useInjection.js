import { useCallback, useLayoutEffect, useRef } from "react";
import { render } from "react-dom";

import { createWrapper, getElements } from "../utils/html";

export const useInjection = ({ parentClass, wrapperClass, component }) => {
  const injectionContainers = useRef();

  const injectComponent = useCallback(
    ({ containers, wrapperClass, component }) => {
      containers.forEach((element) => {
        const wrapper = createWrapper(wrapperClass);
        const container = element.appendChild(wrapper);

        element.style.position = "relative";

        render(component, container);
      });

      return { containers, extracted: true };
    },
    []
  );

  const cleanupInjection = useCallback(({ containers, wrapperClass }) => {
    containers.forEach((container) => {
      container.style.removeProperty("position");

      const wrappers = getElements(wrapperClass, container);

      wrappers.forEach((wrapper) => {
        wrapper.parentNode.removeChild(wrapper);
      });
    });
  }, []);

  useLayoutEffect(() => {
    injectionContainers.current = getElements(parentClass);

    const { containers, extracted } = injectComponent({
      containers: injectionContainers.current,
      wrapperClass,
      component,
    });

    return () => {
      if (extracted) {
        cleanupInjection({
          containers,
          wrapperClass,
        });
      }
    };
  }, [component, parentClass, wrapperClass, cleanupInjection, injectComponent]);
};
