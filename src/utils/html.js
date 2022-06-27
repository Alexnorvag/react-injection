export const getElements = (classname, parent) => {
  const parentNode = parent || document;

  return Array.from(parentNode.getElementsByClassName(classname));
};

export const createWrapper = (classname) => {
  const wrapper = document.createElement("div");
  wrapper.className = classname;
  wrapper.style.position = "absolute";
  wrapper.style.inset = 0;
  wrapper.style.zIndex = 10;

  return wrapper;
};

export const isElementInjected = (node, injectedClassname) => {
  const { className, parentNode, childNodes } = node;

  let isInjected = false;

  if (
    className.includes(injectedClassname) ||
    parentNode.className.includes(injectedClassname) ||
    Array.from(childNodes).some((node) =>
      node?.className?.includes(injectedClassname)
    )
  ) {
    isInjected = true;
  }

  return isInjected;
};
