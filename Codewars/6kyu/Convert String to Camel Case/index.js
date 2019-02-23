export function toCamelCase(str) {
  return str.replace(/[-_](.)/g, (_, lower) => lower.toUpperCase());
}