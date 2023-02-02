import React from "react";
import styled from "styled-components";
import { blogImg, calendar, pen } from "../../images";

const LeatestBlogWrapper = styled.div`
  width: 370px;
  height: 493px;
  background: #ffffff;
  box-shadow: 0px 8px 40px rgba(49, 32, 138, 0.05);
  border-radius: 5px;
  &:hover {
    cursor: pointer;
    .blog-title {
      color: #fb2e86;
    }
    .blog-read {
      color: #fb2e86;
    }
  }
  .blog-wrap-top {
    img {
      border-radius: 8px;
    }
  }
  .blog-author-date {
    margin-left: 14px;
    margin-top: 20px;
    font-size: 1.4rem;
    color: #151875;
  }
  .blog-author {
    margin-right: 30px;
  }
  .blog-wrap-bottom {
    width: 300px;
    margin-left: 20px;
    margin-top: 30px;
  }
  .blog-title {
    font-size: 1.8rem;
    color: #151875;
    margin-bottom: 17px;
  }
  .blog-sumary .blog-read {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 30px;
  }
  .blog-sumary {
    color: #72718f;
    margin-bottom: 15px;
  }
  .blog-read {
    text-decoration-line: underline;

    color: #151875;
  }
`;
export interface ILeatestBlogProps {}

export default function LeatestBlog(props: ILeatestBlogProps) {
  return (
    <LeatestBlogWrapper>
      <div className="blog-wrap-top">
        <img src={blogImg} alt="" />
        <div className="blog-author-date">
          <span className="blog-author">
            <img src={pen} alt="" />
            <span>SaberAli</span>
          </span>
          <span>
            <img src={calendar} alt="" />
            <span>21 August,2020</span>
          </span>
        </div>
      </div>
      <div className="blog-wrap-bottom">
        <div className="blog-title">Top esssential Trends in 2021</div>
        <div className="blog-sumary">
          More off this less hello samlande lied much over tightly circa horse
          taped mightly
        </div>
        <div className="blog-read">Read More</div>
      </div>
    </LeatestBlogWrapper>
  );
}
