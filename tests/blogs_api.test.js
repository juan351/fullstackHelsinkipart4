const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.listWithManyBlogs
    .map(note => new Blog(note))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

describe('supertest', () => {
  
  test('Http GET returns correct quantity of blogs in JSON format', async () => {
    const response = await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
        
    expect(response.body).toHaveLength(helper.listWithManyBlogs.length)
  })
  test('Http POST creates new blog correctly', async () => {
    const newBlog = {
      title: 'Temporary title',
      author: 'I',
      url: 'http://localhost',
      likes: 2
    }

    await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd).toHaveLength(helper.listWithManyBlogs.length + 1)

    const titles = blogsAtEnd.map(n => n.title)
    expect(titles).toContain(
      'Temporary title'
    )
            
  })

  test('property id is not undefined', async () => {
    const response = await api.get('/api/blogs')
    expect(response.body[0].id).toBeDefined()
  })

  test('if property likes is not present, then its default value is 0', async () => {
    const newBlog = {
      title: 'Temp',
      author: 'I',
      url: 'http://localhost'
    }
    const response = await api
      .post('/api/blogs')
      .send(newBlog)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    
    expect(response.body.likes).toBe(0)
    
  })
  
})


afterAll(() => {
  mongoose.connection.close()
}) 