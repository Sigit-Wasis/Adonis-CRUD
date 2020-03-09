'use strict'
const Kajian = use('App/Models/Kajian')

class KajianController {
	// view read data kajian
	async index({ request, response, view }) {
  		const kajians = await Kajian.all()

  		return view.render('kajian.index', { kajians: kajians.rows })
	}

	// insert data kajian
	async store({ request, response, view, session }) {
		const kajian = new Kajian()

		kajian.judul_kajian = request.input('judul_kajian')
		kajian.pemateri = request.input('pemateri')
		kajian.isi_kajian = request.input('isi_kajian')
		await kajian.save()

		session.flash({ notification: 'Data Berhasil Disimpan' })
		return response.route('kajians.index')
	}

	// view show kajian
	async show({ request, response, params, view }) {
		const id 	= params.id
		const kajian 	= await Kajian.find(id)

		return view.render('kajian.show', { kajian: kajian })
	}

	// view edit kajian
	async edit({ request, response, params, view }) {
		const id 	= params.id
		const kajian 	= await Kajian.find(id)

		return view.render('kajian.edit', { kajian: kajian })
	}

	// update data kajian
	async update ({ request, response, view, params, session }) {
		const id 		= params.id
		const kajian 	= await Kajian.find(id)

		kajian.judul_kajian 	= request.input('judul_kajian')
		kajian.pemateri			= request.input('pemateri')
		kajian.isi_kajian		= request.input('isi_kajian')
		await kajian.save()

		session.flash({ notification: 'Data Berhasil Diupdate'})
		return response.route('kajians.index')
	}

	// delete data kajian
	async delete ({ request, response, view, params, session }) {
		const id 	= params.id
		const kajian 	= await Kajian.find(id)
		await kajian.delete()

		session.flash({ notification: 'Data Berhasil Dihapus' })
		return response.route('kajians.index')
	}
}

module.exports = KajianController
