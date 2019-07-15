'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TokobukuSchema extends Schema {
  up () {
    this.create('tokobukus', (table) => {
      table.increments()
      table.string('judul').nullable()
	  table.string('penulis').nullable()
	  table.string('jenis').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('tokobukus')
  }
}

module.exports = TokobukuSchema
