const Blog = require('../models/blog')

const listWithManyBlogs = [
  {
    'title': 'Internet paso a paso',
    'author':'IP@P',
    'url':'https://internetpasoapaso.com/',
    'likes':25,
    'id':'61cb9647af4335e8f3be5606'
  },
  {
    'title':'Retroinvaders',
    'author':'José Zanni',
    'url':'https://retroinvaders.com',
    'likes':34,
    'id':'61cb9682af4335e8f3be5609'
  },
  {
    'title':
      'El blog de NitroPC',
    'author':'NitroPC',
    'url':'https://www.nitro-pc.es/blog/',
    'likes':14,
    'id':'61cb96c3af4335e8f3be560b'
  },
  {
    'title':'Denken Über',
    'author':'Mariano Amartino',
    'url':'https://www.uberbin.net/',
    'likes':10,
    'id':'61cb9766af4335e8f3be560e'
  },
  {'title':'Blog de Vilma Nuñez',
    'author':'Vilma Nuñez',
    'url':'https://vilmanunez.com/blog/',
    'likes':30,
    'id':'61cb9781af4335e8f3be5610'}
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

module.exports = {
  listWithManyBlogs, blogsInDb
}