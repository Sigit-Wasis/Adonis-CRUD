'use strict'

const User = use('App/Models/User')
const { validate } = use('Validator')

class RegisterController {

	index ({ view }) {
		return view.render('auth.register')
	}

	async store({ request, response, session }) {
		/** 
		* Declaration Validation
		*/
		const rules = {
			name: 'required',
			email: 'required|unique:users,email',
			password: 'required'
		}

		const messages = {
			'name.required': 'Nama Lengkap Tidak Boleh Kosong',
			'email.required': 'Email Tidak Boleh Kosong',
			'email.unique': 'Alamat Email Sudah Terdaftar',
			'password.required': 'Password Tidak Boleh Kosong'
		}

		const validation = await validate(request.all(), rules, messages)

		/**
		* Validation Failed
		*/
		if (validation.fails()) {
			session.withErrors(validation.messages()).flashExcept(['password'])
			return response.redirect('back')
		}

		/**
		* Create User
		*/
		const user = await User.create({
			name: request.input('name'),
			email: request.input('email'),			
			password: request.input('password')
		})

		/**
		* Display Success Message
		*/
		session.flash({ notification: 'Register Berhasil! '})
		return response.redirect('back')
	}
}

module.exports = RegisterController