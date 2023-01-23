module.exports = function check(str, bracketsConfig) {
  const map = {};
  const stack = [];

  for (let i = 0; i < bracketsConfig.length; i++)
  {
    map[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }

  for (let i = 0; i < str.length; i++)
  {
    const isOpenBracket =
      Object.keys(map).some(value => value === str[i])
      &&
      str[i] !== stack[stack.length - 1]

    if(isOpenBracket)
    {
      stack.push(str[i]);
    }
    else if (Object.values(map).some(value => value === str[i]) && stack.length !== 0)
    {
      const lastOpenBracket = stack[stack.length - 1];
      if (map[lastOpenBracket] === str[i])
      {
        stack.pop();
      }
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
}