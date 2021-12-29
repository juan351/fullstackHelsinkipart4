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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs, 
  mostLikes
}