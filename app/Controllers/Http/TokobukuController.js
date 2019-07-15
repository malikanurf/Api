'use strict'

const Tokobuku = use('App/Models/Tokobuku')

class TokobukuController {

async store ({request, response}) {
const tokobukuInfo = request.only(['judul', 'penulis', 'jenis'])
const tokobuku = new Tokobuku()
tokobuku.judul = tokobukuInfo.judul
tokobuku.penulis = tokobukuInfo.penulis
tokobuku.jenis = tokobukuInfo.jenis
await tokobuku.save()
return response.status(201).json(tokobuku)
}
async index ({response}) {
let tokobukus = await Tokobuku.all()
return response.json(tokobukus)
}
async store ({request, response}) {
const tokobukuInfo = request.only(['judul', 'penulis', 'jenis'])
const tokobuku = new Tokobuku()
tokobuku.judul = tokobukuInfo.judul
tokobuku.penulis = tokobukuInfo.penulis
tokobuku.jenis = tokobukuInfo.jenis
await tokobuku.save()
return response.status(201).json(tokobuku)
}

async show ({params, response}) {
const tokobuku = await Tokobuku.find(params.id)
return response.json(tokobuku)
}

async update ({params, request, response}) {
const tokobukuInfo = request.only(['judul', 'penulis', 'jenis'])
const tokobuku = await Tokobuku.find(params.id)
if (!tokobuku) {
return response.status(404).json({data: 'Resource not found'})
}
tokobuku.judul = tokobukuInfo.judul
tokobuku.penulis = tokobukuInfo.penulis
tokobuku.jenis = tokobukuInfo.jenis
await tokobuku.save()
return response.status(200).json(tokobuku)

}

async delete ({params, response}) {
const tokobuku = await Tokobuku.find(params.id)
if (!tokobuku) {
return response.status(404).json({data: 'Resource not found'})
}
await tokobuku.delete()
return response.status(204).json(null)
}

}

module.exports = TokobukuController
