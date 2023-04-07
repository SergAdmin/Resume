const express = require('express')
const router = express.Router()

// ================================================================

var header = {
	person: {
		position: 'Junior Fullstack JS Developer',
		salary: '600$ в місяц',
		name: {
			firstname: 'Serhii',
			lastname: 'Melnichenko',
		},
	},
	address: 'Квіткова поляна, до запиту',
}

var footer = {
	contacts: {
		email: {
			text: 'mailto:ivan@mail.com',
			href: 'ivan@mail.com'
		},
		phone: {
			text: 'tel:+380670000123',
			href: '+380670000123'
		},
		social: {
			text: 'LinkedIn',
			href: 'https://www.linkedin.com/in/ivan-test'
		},
	}
}

//=================================================================

router.get('/', function (req, res) {
	res.render('index', {})
})

// ================================================================

router.get('/summary', function (req, res) {
	res.render('summary', {
		page: {
			title: 'Resume | Summary'
		},

		header,
		main: {
			summary: {
				title: 'Summary',
				text: `Open-minded for new technologies, with 1 years of experience in development. Whenever I start to
        work on a new project I learn the domain and try to understand the idea of the project. Good team
        player, every colleague is a friend to me.
      `
			},
			experience: {
				title: 'Other experience',
				text: `Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.
        `
			}
		},

		footer,
	})
})

// ================================================================

router.get('/skills', function (req, res) {
	res.render('skills', {
		page: {
			title: 'Resume | Skills',
		},

		header,

		main: {
			skills: [
				{
					name: 'HTML',
					point: 10,
					isTop: true,
				},
				{
					name: 'Handlebars',
					point: 8,
				},
				{
					name: 'NPM',
					point: 9,
				},
				{
					name: 'VS Code',
					point: 7,
				},
				{
					name: 'Git',
					point: 6,
				},
				{
					name: 'Terminal',
					point: 5,
				},
				{
					name: 'React.js',
					point: 0,
				},
				{
					name: 'PHP',
					point: null,
				},
			],
			hobbies: [
				{ name: 'Малювання', isMain: true },
				{ name: 'Гра на нервах', isMain: true },
				{ name: 'Різьба по дереву', isMain: false },
			],
		},

		footer,
	})
})
// ================================================================

router.get('/education', function (req, res) {
	res.render('education', {
		page: { title: 'Resume | Education', },
		header,
		main: {
			educations: [
				{ name: 'Дитсадок', isEnd: true, },
				{ name: 'Школа', isEnd: true, },
				{ name: 'Інститут', isEnd: true, },
				{ name: 'Курси', isEnd: false, },
				{ name: 'IT-Браінс', isEnd: false, },
			],
			certificates: [
				{ name: 'First', id: 12145 },
				{ name: 'Second', id: 12154 },
				{ name: 'Blanc', id: 12 },
			],
		},
		footer,
	})
})
// ================================================================

router.get('/work', function (req, res) {
	res.render('work', {
		layout: 'big',
		page: { title: 'Resume | Work', },
		header,
		main: {
			title: 'Work history',
			works: [
				{
					position: 'Junior Fullstack Developer',
					company: {
						name: 'Роги та копита',
						url: 'https://1+1.com.ua',
					},
					duration: {
						from: '10.10.2010',
						to: '10.10.2022',
					},
					projectAmmount: 3,
					projects: [
						{
							name: 'Resume',
							url: 'https://resume.com.ua',
							about: 'Bla-bla-bla',
							stacks: [
								{ name: 'React.js', },
								{ name: 'HTML & CSS', },
								{ name: 'Node.js', },
							],
						},
						,
					],
					awards: [
						{ name: 'Супер-пупер....' },
						{ name: 'Зірка на груди....' },
					],
					stackAmmount: 3,
					awardAmount: 2,


				},
				{
					position: 'Accounter',
					company: {
						name: '70 років без води',
						url: 'https://2+2.com.ua',
					},
					duration: {
						from: '11.10.2022',
						to: null,
					},
				},
			],
		},
		footer,
	})
})
// ================================================================

module.exports = router
