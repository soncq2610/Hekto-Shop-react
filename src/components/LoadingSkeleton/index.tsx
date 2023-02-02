import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
const SkeletonWrap = styled.div`
  width: 270px;
  height: 360px;
  justify-content: center;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
  .image {
    height: 270px;
    margin-bottom: 1.2rem;
  }
  .infor {
  }
  .react-loading-skeleton {
    margin: 0 auto;
    display: flex;
  }
`;
const LoadingSkeleton = () => {
  return (
    <SkeletonWrap>
      <div className="image">
        <Skeleton width={270} height={270} />
      </div>
      <div className="infor">
        <Skeleton
          count={3}
          style={{ marginBottom: "1rem" }}
          width={200}
          height={16}
          inline={true}
        />
      </div>
    </SkeletonWrap>
  );
};
export default LoadingSkeleton;
