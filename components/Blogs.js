import React, { Component } from "react";
import { Card, Container, Row, Col, Badge } from "react-bootstrap";

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@sagarbetkar1994"
    )
      .then((resp) => resp.json())
      .then((blogs) => this.setState({ blogs }));
  }
  render() {
    const blogs = this.state.blogs;
    return (
      <Container id="blogs" style={{ padding: "7rem 0" }} fluid>
        <Container>
          <h3 className="mb-5" style={{ color: "#000" }}>
            Blogs
          </h3>
          <Row xs={1} sm={2} md={3} className="my-5 g-4">
            {blogs.items?.map((post, index) => (
              <Col key={index}>
                <Card className="mb-4 card-shadow h-100">
                  <Card.Img
                    variant="top"
                    src={post.thumbnail}
                    style={{ height: "200px" }}
                  />
                  <Card.Body>
                    <Card.Title>{post.title}</Card.Title>
                    {post.categories.map((c, index) => (
                      <Badge className="m-1" key={index} bg="info">
                        {c}
                      </Badge>
                    ))}
                  </Card.Body>
                  <Card.Footer className="text-muted">
                    {/* <Card.Text>Posted on: {post.pubDate.split(' ')[0]}</Card.Text> */}
                    <Card.Link href={post.link} target="_blank">
                      Read the Full Blog Here!
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Blogs;
