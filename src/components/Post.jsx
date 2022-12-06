import React from 'react'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import moment from 'moment';
import ReadMore from 'read-more-react';
import Container from 'react-bootstrap/Container';


const Post = ({ post }) => {

    if (post){

        const link = post.link+''; 
        const links = link.split(',');

        return (
            <Container>
                <Card className="my-4 p-3 bg-light border-0">
                    <Card.Body>
                        <Card.Title> 
                            <div className="h5">
                                { post.title }
                                <div className="text-muted my-2 font-weight-light float-end small">
                                { post.user_info.username}{',  '} { moment(post.created).fromNow() }!
                                </div>
                            </div>  
                        </Card.Title>
                        <Card.Subtitle>
                            <h5 className="mb-2">
                                {post.topic}
                            </h5>
                            <p className="mb-2">
                                {post.content}
                            </p>
                        </Card.Subtitle>
                        <Card.Text className="bg-secondary p-2 text-light">
                            <ReadMore text= { post.procedure } readMoreText="Read More!"/>
                        </Card.Text>
                        <div>
                            {   
                                links.map((link) => (
                                    <Badge pill bg='success' style = {{ margin: 2 }}>
                                        {link}
                                    </Badge>
                                )) 
                            } 
                        </div>  
                    </Card.Body>
                </Card>
            </Container>
        )
    }else{
        return '';
    }
}

export default Post