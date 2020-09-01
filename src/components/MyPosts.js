import React from 'react'
import axios from 'axios'

class MyPosts extends React.Component{

  state = {
    data: []
  }

  componentDidMount(){
    let token = "Bearer " + localStorage.getItem('jwt')
    console.log(token);
    axios.get('http://localhost:3000/my_posts.json')
    .then(axiosReturn => {
      this.setState({data: axiosReturn.data})
    })
    .catch(err => console.log(err));
  }

  render(){
    return(
      <div>
        {
          this.state.data.map(post => (
            <div>
              <h3>{post.title}</h3>
              <h5>{post.description}</h5>
              <img src={post.image} alt={post.title}/>
            </div>
          ))
        }
      </div>
    );//return
  }//render
}//class MyPosts

export default MyPosts
