import React, { useState, useEffect } from 'react'
import Post from './Post';
import ReactPaginate from 'react-paginate';
import Container from 'react-bootstrap/Container';
import api from '../services/Api';

const FetchPosts = ({ searchKey }) => {

  const [posts, setPosts] = useState([])

  useEffect( () => {
    api.get('posts/all')
    .then((res) => {
      setPosts(res.data.data )
    })
    .catch(error => console.log(error))
    console.log(searchKey)
  }, [searchKey])


    const [pageNumber, setPageNumber] = useState(0);
    const dataPerPage = 7;
    const seenPages = pageNumber * dataPerPage;
    const pageCount = Math.ceil(posts.length/dataPerPage);
  
    const changePage = ({selected}) =>{
      setPageNumber(selected);
    }

    return (
        <Container>
        { posts && (
            posts.filter((post) =>
            (post.title.toLowerCase()).includes(searchKey)  || (post.topic.toLowerCase()).includes(searchKey) || (post.content.toLowerCase()).includes(searchKey) || (post.procedure.toLowerCase()).includes(searchKey))
            .slice(seenPages, seenPages + dataPerPage)
            .map((post) => (
            <Post
              key={post.id}
              post={post}
            />
          )))
        }
        <ReactPaginate 
          previousLabel={''}
          nextLabel={''}
          containerClassName={'pagination justify-content-center'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'btn'}
          previousLinkClassName={'pageLink'}
          nextClassName={'btn'}
          nextLinkClassName={'pageLink'}
          activeClassName={'active'}
          pageCount={pageCount}
          onPageChange={changePage}
        />
      </Container>
    )
}

export default FetchPosts