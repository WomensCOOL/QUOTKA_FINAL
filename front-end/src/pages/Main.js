import React from 'react';
import styled from 'styled-components';
import Logo from 'assests/Logo.png';
import Banner from 'assests/Banner.svg';
import TrendingBox from '../components/Main/TrendingBox';
import HOF from '../components/Main/HOF';

const Main = () => {
  return (
    <>
      <MainBox>
        <img src={Banner} alt="banner" />
      </MainBox>

      <MainTitle>
        <Img src={Logo} />
        Trending on QUOTKA
      </MainTitle>
      <TrendingContent>
        <TrendingBox
          num={'01'}
          name={'qtmylov'}
          content={
            '인간은 객관적 현실에 의해서 고통받는 것이 아니라 그것에 대한 ...'
          }
          date={'2022-07-22'}
        />
        <TrendingBox
          num={'02'}
          name={'cure쿼카'}
          content={
            '길을 잘못 들어섰다고 슬퍼 하지 마라 주저 앉지 마라. 삶에서 잘못 들어 ...'
          }
          date={'2022-07-24'}
        />
        <TrendingBox
          num={'03'}
          name={'moonlight'}
          content={
            '"사람은 최종 목적지만 보고 달리는 자율 주행 자동차가 아니잖아요 ...'
          }
          date={'2022-07-25'}
        />
      </TrendingContent>
      <TrendingContent>
        <TrendingBox
          num={'04'}
          name={'starbuv'}
          content={'나는 벼락에도 멍들지 않는 허공과 같다.'}
          date={'2022-07-26'}
        />
        <TrendingBox
          num={'05'}
          name={'youandi'}
          content={
            "'나중에'라고 외칠 때마다 생의 불꽃은 하나씩 꺼진다. 가장 슬픈 인생 ..."
          }
          date={'2022-07-27'}
        />
        <TrendingBox
          num={'06'}
          name={'sn0805sd'}
          content={
            '남의 의도를 해석하고 평가할 때 드러나는 것은 자신의 인식과 세계다.'
          }
          date={'2022-07-27'}
        />
      </TrendingContent>
      <hr></hr>
      <MainTitle>
        <Img src={Logo} />
        This Week Quote Master
      </MainTitle>
      <TrendingContent>
        <HOF name={'youandi'} follower={'101'} following={'53'}></HOF>
        <HOF name={'moonlight'} follower={'68'} following={'72'}></HOF>
        <HOF name={'starbuv'} follower={'88'} following={'34'}></HOF>
        <HOF name={'cure쿼카'} follower={'124'} following={'90'}></HOF>
      </TrendingContent>
    </>
  );
};

export default Main;

const MainTitle = styled.h2`
  margin: 0 auto;
  padding-top: 15px;
  font-size: 23px;
  font-weight: 900;
  padding-bottom: 25px;
`;

const Img = styled.img`
  width: 27px;
  height: 27px;
  margin-right: 5px;
  padding-top: 5px;
`;
const MainBox = styled.div`
  margin-left: -200px;
  margin-top: -100px;
  width: 1100px;
`;

const TrendingContent = styled.div`
  display: float;
`;
