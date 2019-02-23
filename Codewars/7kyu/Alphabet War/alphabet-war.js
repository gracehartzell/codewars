// function alphabetWar(fight) {
//     let left = 0;
//     let right = 0;

//     for (i = 0; i < fight.length; i++) {
//         (fight[i] === 'w')
//         ? left += 4
//         : (fight[i] === 'p')
//         ? left += 3
//         : (fight[i] === 'b')
//         ? left += 2
//         : (fight[i] === 's')
//         ? left += 1
//         : (fight[i] === 'm')
//         ? right += 4
//         : (fight[i] === 'q')
//         ? right += 3
//         : (fight[i] === 'd')
//         ? right += 2
//         : (fight[i] === 'z')
//         ? right += 1
//         : left += 0;
//     }
//     return (left > right) 
//       ? `Left side wins!`
//       : (left < right)
//       ? `Right side wins!`
//       : `Let's fight again!`
// }

function alphabetWar(fight) {
  const values = {'w': 4, 'p': 3, 'b': 2, 's': 1, 'm': -4, 'q': -3, 'd': -2, 'z': -1};
  let result = 0;
  fight.split('').map((t) => result += values[t] ? values[t] : 0  );
  return (result < 0 ? 'Right side wins!' : (result > 0) ? 'Left side wins!' : 'Let\'s fight again!' )
}


// TESTS
console.log(alphabetWar('mbgjjzd')) //
console.log( alphabetWar("z") ===  "Right side wins!" );
console.log( alphabetWar("zdqmwpbs") === "Let's fight again!" );
console.log( alphabetWar("zzzzs") === "Right side wins!" );
