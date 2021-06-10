
import {Post} from './index'
import {travel} from '../tags'

const test:  Post = {
    id: 'test',
    title: 'My First Blog Post',
    description: 'This is a test blog post',
    date: 'Thu Jun 10 2021',
    image: '/images/posts/test/blog.jpeg',
    isFeatured: false,
    tags: [travel],
    mdFile: 'test.md',
    published: true

}

export default test
