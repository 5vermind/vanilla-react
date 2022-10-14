const renderRealDOM = (virtualDOM) => {
  if (typeof virtualDOM === "string") {
    return document.createTextNode(virtualDOM);
  }
  if (virtualDOM === undefined) return;

  const $el = document.createElement(virtualDOM.tagName);

  virtualDOM.children
    .map(renderRealDOM)
    .forEach((node) => $el.appendChild(node));

  return $el;
};

export const render = (virtualDOM, container) => {
  container.appendChild(renderRealDOM(virtualDOM));
};

export const createElement = (tagName, props, ...children) => {
  if (typeof tagName === "function") {
    return tagName.apply(null, [props, ...children]);
  }
  return { tagName, props, children };
};
