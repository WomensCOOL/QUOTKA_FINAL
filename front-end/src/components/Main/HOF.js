import React, { useState } from 'react';
import styled from 'styled-components';
import Quotka from 'assests/Logo.png';

const TrendingBox = props => {
  return (
    <>
      <Box>
        <div>
          <Img src={Quotka} />
        </div>
        <div className="name">{props.name}</div>
        <div className="follow">Follower {props.follower}</div>
        <div className="follow">Following {props.following}</div>
      </Box>
    </>
  );
};

export default TrendingBox;

const Box = styled.h2`
  margin: 0 auto;
  width: 23%;
  height: 150px;
  background-color: #f3f3f3;
  border-radius: 30px;
  text-align: center;

  .name {
    font-size: 13px;
    font-weight: 900;
    margin-top: 3px;
  }
  .follow {
    font-size: 10px;
  }
`;

const Img = styled.img`
  width: 50%;
  height: 50%;
  padding: 10px;
  margin-right: 10px;
  margin-top: 4%;
  vertical-align: middle;
`;
