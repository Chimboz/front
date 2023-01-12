export default defineEventHandler(() => {
  return {
    name: 'Tigriz',
    balance: 1000,
    logs: [
      {
        type: 'Suppression',
        reason: 'Racisme',
        moderator: { name: 'slim', id: 3, color: '#f00' },
        date: 1647884990963
      },
      {
        type: 'Bannissement',
        reason: 'Racisme',
        moderator: { name: 'slim', id: 3, color: '#f00' },
        date: 1647884590963
      },
      {
        type: 'Reset',
        reason: 'Racisme',
        moderator: { name: 'slim', id: 3, color: '#f00' },
        date: 1647884090963
      }
    ],
    ip: ['127.0.0.1', '127.0.0.2'],
    shared: [
      { name: 'zirgiT', id: 3, color: '#f0f' },
      { name: 'test', id: 3 }
    ],
    groups: [
      {
        name: 'Les Créateurs',
        id: 1,
        color: '#900'
      },
      {
        name: 'La Chatterie',
        id: 2,
        color: '#000'
      }
    ]
  }
})
