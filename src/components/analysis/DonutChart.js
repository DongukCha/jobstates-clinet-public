import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';
import color from 'utils/colors';
import * as Styled from 'StyledComponents';

const DonutChart = ({
 tech, category, allTech, allCategory 
}) => {
  const hiringData = {
    labels: Object.keys(tech),
    datasets: [
      {
        label: '사용자 기술 스택',
        borderWidth: 1,
        data: Object.values(tech),
        backgroundColor: color,
        hoverBackgroundColor: color,
      },
    ],
  };

  const categoryData = {
    labels: category.map(el => el[0]),
    datasets: [
      {
        label: '사용자 산업분야',
        borderWidth: 1,
        data: category.map(el => el[1]),
        backgroundColor: color,
        hoverBackgroundColor: color,
      },
    ],
  };

  const allHiringData = {
    labels: Object.keys(allTech),
    datasets: [
      {
        label: '모든 사용자 기술 스택',
        borderWidth: 1,
        data: Object.values(allTech),
        backgroundColor: color,
        hoverBackgroundColor: color,
      },
    ],
  };

  const allCategoryData = {
    labels: allCategory.map(el => el[0]),
    datasets: [
      {
        label: '모든 사용자 산업분야',
        borderWidth: 1,
        data: allCategory.map(el => el[1]),
        backgroundColor: color,
        hoverBackgroundColor: color,
      },
    ],
  };

  const dougnutGraph = (data, idx) => (
    <div style={{ width: '50%', display: 'inline-block' }}>
      <Doughnut data={data} key={idx} />
    </div>
  );

  return (
    <>
      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Column width={2}>
            <Styled.Box>
              <Styled.Header>관심 영역</Styled.Header>
              <Styled.Line />
            </Styled.Box>
          </Grid.Column>
          <Grid.Column textAlign="left" width={12} className="jobbody">
            {!tech.length && !category.length ? (
              <div className="analysis-none">채용 공고를 등록해주세요</div>
            ) : (
              [hiringData, categoryData].map((data, idx) => dougnutGraph(data, idx),)
            )}
          </Grid.Column>
        </Grid>
      </Container>
      <Container className="jobContainer">
        <Grid textAlign="center">
          <Grid.Column width={2}>
            <Styled.Box>
              <Styled.Header>모든 유저</Styled.Header>
              <Styled.Line />
            </Styled.Box>
          </Grid.Column>
          <Grid.Column textAlign="left" width={12} className="jobbody">
            {[allHiringData, allCategoryData].map((data, idx) => dougnutGraph(data, idx),)}
          </Grid.Column>
        </Grid>
      </Container>
    </>
  );
};

DonutChart.propTypes = {
  tech: PropTypes.instanceOf(Object),
  category: PropTypes.instanceOf(Array),
  allTech: PropTypes.instanceOf(Object),
  allCategory: PropTypes.instanceOf(Array),
};

DonutChart.defaultProps = {
  tech: { none: 0 },
  category: ['none', 0],
  allTech: { none: 0 },
  allCategory: ['none', 0],
};

export default DonutChart;
