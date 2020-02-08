'use strict'
const Post = use('App/Models/Post')


class PostController {
	// view read data post
	async index({ request, response, view }) {
  		const posts = await Post.all()

  		return view.render('posts.index', { posts: posts.rows })
	}

	// view create post
	create({ request, response, view }) {
		return view.render('posts.create')
	}

	// insert data post
	async store({ request, response, view, session }) {
		const post = new Post()

		post.title = request.input('title')
		post.content = request.input('content')
		await post.save()

		session.flash({ notification: 'Data Berhasil Disimpan' })
		return response.route('posts.index')
	}

	// view edit post
	async edit({ request, response, params, view }) {
		const id 	= params.id
		const post 	= await Post.find(id)

		return view.render('posts.edit', { post: post })
	}

	// update data post
	async update ({ request, response, view, params, session }) {
		const id 	= params.id
		const post 	= await Post.find(id)

		post.title 		= request.input('title')
		post.content	= request.input('content')
		await post.save()

		session.flash({ notification: 'Data Berhasil Diupdate'})
		return response.route('posts.index')
	}

	// delete data post
	async delete ({ request, response, view, params, session }) {
		const id 	= params.id
		const post 	= await Post.find(id)
		await post.delete()

		session.flash({ notification: 'Data Berhasil Dihapus' })
		return response.route('posts.index')
	}
	
}

module.exports = PostController