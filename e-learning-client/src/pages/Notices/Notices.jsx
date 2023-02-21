import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Container, Row } from "react-bootstrap";
import Loading from "../../Components/Loading/Loading";
import PagesHeader from "../../Components/PagesHeader/PagesHeader";
import SingleNotice from "./SingleNotice";

const Notices = () => {
  // // Notices Data fetching from the server
    const {data: notices = [], isLoading} = useQuery({
        queryKey: ['notices'],
        queryFn: async () => {
            const res = await fetch("http://localhost:5000/notices")
            const data = await res.json();
            return data;
        }
      })

  return (
    <div style={{background: '#EDF0F2'}}>
      {/* Notice page Header */}
      <PagesHeader title="All Notices" sub="Notice" />
      
      {/* When data loading show spinner */}
      <Container className="py-5">
        {
          isLoading && <Loading />
        }
        {/* Notices data show */}
        <Row>
          {notices?.map((notice) => (
            <SingleNotice key={notice._id} notice={notice} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Notices;
