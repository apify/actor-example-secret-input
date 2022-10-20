import { Actor } from 'apify';

await Actor.init()

// `Actor.getInput()` automatically decrypts the input
console.log('Automatically decrypted input:');
const input = await Actor.getInput();
console.dir(input);
console.log();

// If you read the 'INPUT' value from the default key-value store, it is still encrypted
console.log('Original, still encrypted input:');
const originalInput = await Actor.getValue('INPUT');
console.dir(originalInput);

await Actor.exit();
