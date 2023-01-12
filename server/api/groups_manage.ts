export default defineEventHandler(() => {
  return {
    pending: [],
    member: [
      {
        id: 20,
        name: 'Ligolégende'
      },
      {
        id: 21,
        name: 'Chimboz'
      }
    ],
    owner: [
      {
        id: 10,
        name: "L'Église"
      },
      {
        id: 7,
        name: 'La Chatterie'
      }
    ],
    random: {
      id: 19,
      name: 'Mangemorts'
    },
    stats: {
      total: 29,
      type: {
        group: 23,
        klub: 1,
        clan: 0,
        ekip: 0,
        skwat: 0,
        guild: 0,
        alliance: 1,
        empire: 1,
        sekt: 2,
        skool: 0,
        hord: 0,
        meute: 1,
        gang: 0,
        triad: 0
      }
    }
  }
})
