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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}