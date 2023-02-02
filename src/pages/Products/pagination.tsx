import React from "react";
import styled from "styled-components";
const Paging = styled.div`
  .pagination {
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .page-item {
    margin-left: 10px;
  }
  .page-item:hover {
    cursor: pointer;
  }
  a:active {
    color: red;
  }
`;
export interface IPaging {
  postsPerPage: any;
  totalPosts: any;
  paginate: any;
}

const Pagination = (props: IPaging) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log(
    parseInt(props.postsPerPage) + " " + props.totalPosts + " " + pageNumbers
  );

  return (
    <Paging>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <div key={number} className="page-item">
            <p onClick={() => props.paginate(number)} className="page-link">
              {number}
            </p>
          </div>
        ))}
      </ul>
    </Paging>
  );
};

export default Pagination;
