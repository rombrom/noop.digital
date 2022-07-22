export async function woot() {
  const res = await 'foo';

  const test = {
    foo: 'bar',
    quix: 'qox',
  };

  return res;
}

console.log('Hellow');
console.log(await woot());
