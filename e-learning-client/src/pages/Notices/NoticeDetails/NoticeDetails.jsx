import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import PagesHeader from "../../../Components/PagesHeader/PagesHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Components/Loading/Loading";

const NoticeDetails = () => {
  const { noticeId } = useParams();
  const [recentPost, setRecentPost] = useState();

  const { data: notice = {}, isLoading } = useQuery({
    queryKey: ["notices"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/notices/${noticeId}`);
      const data = await res.json();
      return data;
    },
  });

  useEffect(() => {
    fetch("http://localhost:5000/notices/recentNotice")
      .then((res) => res.json())
      .then((data) => setRecentPost(data));
  }, []);

  const { title, img, date, posted, description } = notice;

  return (
    <div style={{ background: "#EDF0F2" }}>
      <PagesHeader title={title} sub="notice" sub2={title} />
      <Container>
        <Row>
          <Col md={8} sm={12}>
            {isLoading && <Loading />}
            <div className="my-5 bg-white rounded-top rounded-right">
              <Image
                src={img}
                className="img-fluid rounded-top rounded-right"
                style={{ width: "100%" }}
              />
              <div className="p-4">
                <h3 className="fs-3 fw-bold">{title}</h3>
                <div className="d-flex mb-4">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      style={{ color: "#377DFF" }}
                    />
                    <p className="mb-0 ms-2">{date}</p>
                  </div>
                  <div className="d-flex align-items-center ms-4">
                    <FontAwesomeIcon
                      icon={faUserLarge}
                      style={{ color: "#377DFF" }}
                    />
                    <p className="mb-0 ms-2">{posted}</p>
                  </div>
                </div>
                <p>{description}</p>
              </div>
            </div>
          </Col>
          <Col md={4} sm={12}>
            <div className="my-5">
              <div className="p-4 rounded bg-white ">
                <h4 className="mb-4">Recent Posts</h4>
                {recentPost?.map((post) => (
                  <div className="d-flex align-items-center mb-3" key={post._id}>
                    <Link
                      to={`/notice/${post._id}`}
                      className="text-black text-decoration-none"
                    >
                      <Image
                        src={post.img}
                        alt={post.title}
                        style={{ width: "70px", height: "80px" }}
                      />
                    </Link>
                    <div className="ms-3">
                      <Link
                        to={`/notice/${post._id}`}
                        className="text-black text-decoration-none"
                      >
                        <h4 className="fs-6 fw-bold">{post.title}</h4>
                      </Link>
                      <p>{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NoticeDetails;
