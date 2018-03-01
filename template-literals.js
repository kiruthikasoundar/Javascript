/* let name = 'bob';
console.log(`hi ${name}`);

let sentence = `This is a loooooooo
    ooooong essay
    not typing`;

console.log(sentence);
 */

 function getReasonCount() { return 1; }

 let interpolation = `Give me ${ (getReasonCount() == 2) ? 'one good reason' : ' a few reasons' } to try this.`;
 console.log(interpolation);