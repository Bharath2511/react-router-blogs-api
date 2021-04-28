import './index.css'
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {blog} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blog
  return (
    <Link to={`/blogs/${id}`} className="nav-link">
      <div className="blog-card">
        <img src={imageUrl} alt={`item${id}`} className="card-image" />
        <div className="card-text-container">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>
          <div className="author-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
