export const changeOption = ({ colorComponents, code, color, option, setSelectedOptions }) => {
  for (const colorComponent of Object.values(colorComponents)) {
    colorComponent.style.background = colorComponent.id;
  }
  colorComponents[
    `${option}${code}`
  ].style.background = `linear-gradient(90deg, darkgreen 0%, ${color} 20%, ${color} 80%, darkgreen 100%)`;
  setSelectedOptions((selectedOptions) => ({ ...selectedOptions, [`${option}Code`]: code }));
};

export const fixColorName = ({ color }) => {
  color = color
    .split(/(\s+)|(\/+)/)
    .at(-1)
    .toLowerCase();
  if (color === 'silver' || color === 'various') {
    color = 'grey';
  }
  return color;
};
