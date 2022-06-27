import { useCallback, useLayoutEffect, useRef } from "react";
import { render } from "react-dom";

import { createWrapper, getElements } from "../utils/html";

const defaultInjectionOptions = (options) => ({
  parentClass: null,
  wrapperClass: "injected",
  component: null,
  multi: false,
  ...options,
});

export const useInjection = (userOptions) => {
  const options = defaultInjectionOptions(userOptions);
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
    injectionContainers.current = getElements(options.parentClass);

    const { containers, extracted } = injectComponent({
      containers: injectionContainers.current,
      wrapperClass: options.wrapperClass,
      component: options.component,
    });

    return () => {
      if (extracted && !options.multi) {
        cleanupInjection({
          containers,
          wrapperClass: options.wrapperClass,
        });
      }
    };
  }, [options, cleanupInjection, injectComponent]);
};
