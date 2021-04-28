import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blog: {},
    isLoading: true,
  }

  componentDidMount() {
    this.fetchBlogDetails()
  }

  fetchBlogDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedBlog = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    this.setState({blog: updatedBlog, isLoading: false})
  }

  renderBlogDetails = () => {
    const {blog} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blog

    return (
      <div className="blog-info">
        <h2 className="title">{title}</h2>
        <div className="author-info">
          <img src={avatarUrl} alt="img" className="author-image" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt="img" className="image" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
      </div>
    ) : (
      this.renderBlogDetails()
    )
  }
}

export default BlogItemDetails
