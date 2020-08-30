let args = process.argv.slice(2);

const pigLatin = function() {
  let ans = '';
  for (let i = 0; i < args.length; i++) {
    let str = args[i].substr(1)
    str += args[i].slice(0, 1) + 'ay ';
    ans += str;
  }
  return ans;
};

console.log(pigLatin());