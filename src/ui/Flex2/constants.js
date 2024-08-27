let colCenter = "fjustify-center";
let colEndCenter = "justify-end";

let rowCenter = "justify-center";
let rowEndCenter = "justify-end";

function wrapperMixinClassName(base) {
  return function (addClass) {
    return `${base} ${addClass}`;
  };
}

function containsString(str, search) {
  return str.indexOf(search) !== -1;
}

const rowBaseClass = "flex w-full items-center";
const colBaseClass = `${rowBaseClass} flex-col`;

const mixinRowClassName = wrapperMixinClassName(rowBaseClass);
const mixinColClassName = wrapperMixinClassName(colBaseClass);

const classNames = { colCenter, colEndCenter, rowCenter, rowEndCenter };

Object.keys(classNames).forEach((className) => {
  const isRow = containsString(className, "row");
  classNames[className] = isRow
    ? mixinRowClassName(classNames[className])
    : mixinColClassName(classNames[className]);
});

export { classNames };
