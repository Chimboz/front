import { randomInt } from '~~/utils';

const date = Date.now();
export default defineEventHandler(() => {
  const bank = [];
  for (let i = 0; i < 31; i++) {
    bank.push({
      date: date - 86400000 * i,
      description: 'Loterie du jour',
      value: randomInt(-100, 100),
    });
  }
  return bank;
});
