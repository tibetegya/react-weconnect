const isCypress = process.env.NODE_ENV === 'test'

module.exports = {
  presets: ["next/babel"],
  plugins:  isCypress ? ["istanbul"] : []
}
