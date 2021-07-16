
import {Post} from './index'
import {coding, featured} from '../tags'

const new_site:  Post = {
    id: "new_site",
    title: "New Site!",
    description: "",
    date: "Thu Jul 15 2021",
    image: "/images/posts/new_site/blog.jpeg",
    isFeatured: true,
    tags: [coding, featured],
    mdFile: "new_site.md",
    published: true

}

export default new_site
