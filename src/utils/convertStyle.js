export function containsRvh(propertyValue) {
    const rvhRegex = /(\d+(\.\d*)?)rvh(?!\w)/
    return rvhRegex.test(propertyValue);
  }
  
  function replaceRvhWithPx(propertyStringValue, windowHeight) {
    const rvhRegex = /(\d+(\.\d*)?)rvh(?!\w)/g
    return propertyStringValue.replace(
      rvhRegex,
      (_, rvh) => `${(windowHeight * parseFloat(rvh)) / 100}px`
    )
  }
  