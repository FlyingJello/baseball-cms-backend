exports.trimObject = (object, props) => Object.keys(object).reduce((acc, elem) => {
  if (!props.includes(elem)) {
    acc[elem] = object[elem]
  }
  return acc
}, {})
