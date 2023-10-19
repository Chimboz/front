import { random } from '~~/utils/Number';

const date = Date.now();
export default defineEventHandler(() => {
  const bank = [];
  for (let i = 0; i < 40; i++) {
    bank.push({
      date: date - 86400000 * i,
      description: 'Loterie du jour',
      value: random(-100, 100),
    });
  }
  return bank;
});
