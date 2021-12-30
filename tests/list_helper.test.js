const listHelper = require('../utils/list_helper')


test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })
})

describe('favorite blog', () => {
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
  const finalBlog = {
    'title':'Retroinvaders',
    'author':'José Zanni',
    'url':'https://retroinvaders.com',
    'likes':34,
    'id':'61cb9682af4335e8f3be5609'
  }
  test('when list has many blogs, finds the favorite', () => {
    const result = listHelper.favoriteBlog(listWithManyBlogs)
    expect(result).toEqual(finalBlog)
  })
})

describe('most blogs', () => {
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
      'author':'NitroPC',
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
  const author = {
    'author':'NitroPC',
    'blogs':2
  }
  test('finds the author with most blogs', () => {
    const result = listHelper.mostBlogs(listWithManyBlogs)
    expect(result).toEqual(author)
  })
})

describe('most likes', () => {
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
      'author':'NitroPC',
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
  const author = {
    'author':'José Zanni',
    'likes':34
  }
  test('finds the author with most likes', () => {
    const result = listHelper.mostLikes(listWithManyBlogs)
    expect(result).toEqual(author)
  })
})