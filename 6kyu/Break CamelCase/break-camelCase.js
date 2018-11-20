function solution(str) {
  return `${str}`.split(/(?=[A-Z])/).join(' '); //regex: must be followed by an uppercase letter 
}


function solution(string) {
  return `${string}`.split(/(?=[A-Z])/).join(' ');
}


console.log(solution('camelCasing'));



