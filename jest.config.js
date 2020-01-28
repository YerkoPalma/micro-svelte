module.exports = {
  transform: {
    '^.+\\.svelte$': 'svelte-jester',
    '^.+\\.js$': 'babel-jest'
  },
  testMatch: ['**/tests/**/*.[jt]s'],
  moduleFileExtensions: ['js', 'svelte']
}
