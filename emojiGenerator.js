// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');

const data = fs.readFileSync(process.argv[2], 'utf-8');
discordEmojis = JSON.parse(data);
const markedEmojis = {};
for (const category of Object.keys(discordEmojis))
  for (const emoji of discordEmojis[category])
    for (const name of emoji.names) markedEmojis[name] = emoji.surrogates;

fs.writeFileSync('./constants/emojis.json', JSON.stringify(markedEmojis));
