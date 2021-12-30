const dummy = (blogs)=>{
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0)
}

const favoriteBlog = (blogs) => {
  blogs.sort((a,b) => b.likes - a.likes)
  return blogs[0]
}

const mostBlogs = (blogs) => {
  let counter = {}
  let ordered = []

  blogs.forEach(element => {
    counter[element.author] = (counter[element.author] || 0) + 1
  })
  for(let element in counter){
    ordered.push([element, counter[element]])
  }
  ordered.sort((a,b) => b[1] - a[1])

  return {'author': ordered[0][0], 'blogs': ordered[0][1]}

}

const mostLikes = (blogs) => {
  let counter = {}
  let ordered = []
  
  blogs.forEach(element => {
    counter[element.author] = (counter[element.author] || 0) + element.likes
  })
  for(let element in counter){
    ordered.push([element, counter[element]])
  }
  ordered.sort((a,b) => b[1] - a[1])
  
  return {'author': ordered[0][0], 'likes': ordered[0][1]}
  
}

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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs, 
  mostLikes,
  listWithManyBlogs
}