// export const compare = (a, b) => {

// }
export const toCamelCase = str =>
  str.replace(/[-_](.)/g, (_, c) => c.toUpperCase())