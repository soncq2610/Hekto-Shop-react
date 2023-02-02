import React from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
const SkeletonWrap = styled.div`
  width: 1170px;
  height: 509px;
  display: flex;
  justify-content: start;
  background: #ffffff;
  box-shadow: 0px 0px 25px 10px #f6f4fd;
  margin-bottom: 30px;
  align-items: center;
  margin: 0 auto;
  margin-top: 120px;
  .small-image {
    margin-right: 20px;
    margin-left: 15px;
  }
  .infor {
  }
  .big-image {
    margin-top: 20px;
  }
  .react-loading-skeleton {
    margin: 0 auto;
    display: flex;
  }
  .infor {
    margin-left: 40px;
  }
`;
const DetailLoading = () => {
  return (
    <SkeletonWrap>
      <div className="small-image">
        <Skeleton
          width={151}
          height={155}
          inline={true}
          style={{ marginBottom: "10px", marginTop: "" }}
        />
        <Skeleton
          width={151}
          height={155}
          inline={true}
          style={{ marginBottom: "10px" }}
        />
        <Skeleton width={151} height={155} inline={true} />
      </div>
      <div className="big-image">
        <Skeleton width={375} height={487} />
      </div>
      <div className="infor">
        <Skeleton count={9} width={500} height={20} />
      </div>
    </SkeletonWrap>
  );
};
export default DetailLoading;
