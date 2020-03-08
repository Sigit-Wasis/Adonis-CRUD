'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class KajiansSchema extends Schema {
  up () {
    this.create('kajians', (table) => {
      table.increments()
      table.string('judul_kajian')
      table.string('pemateri')
      table.text('isi_kajian')
      table.timestamps()
    })
  }

  down () {
    this.drop('kajians')
  }
}

module.exports = KajiansSchema
