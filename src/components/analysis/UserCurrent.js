import React from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import { Container, Grid } from 'semantic-ui-react';
import * as Styled from 'StyledComponents';
import 'react-circular-progressbar/dist/styles.css';
import './UserCurrent.css';

const UserCurrent = ({
 allCount, pass, fail, documentCount 
}) => {
  const progressbar = (state, sum, title) => {
    const ratio = ((state / sum || 0) * 100).toFixed(0);
    return (
      <Grid style={{ width: '25%', display: 'inline-block', margin: '1rem' }}>
        <Grid.Column>
          <Grid.Row style={{ marginBottom: '1rem', textAlign: 'center' }}>
            <b>{title}</b>
          </Grid.Row>
          <Grid.Row>
            <CircularProgressbar
              percentage={ratio}
              text={`${ratio}%`}
              initialAnimation
            />
          </Grid.Row>
        </Grid.Column>
      </Grid>
    );
  };

  const progressText = () => (
    <div className="container-ongoing">
      <div className="bottom-ongoing">
        현재 {allCount - fail - pass}개 채용 진행중
      </div>
    </div>
  );

  const firstRound = allCount - documentCount;

  return (
    <Container className="jobContainer">
      <Grid textAlign="center">
        <Grid.Column width={2}>
          <Styled.Box>
            <Styled.Header>진행중</Styled.Header>
            <Styled.Line />
          </Styled.Box>
        </Grid.Column>
        <Grid.Column textAlign="left" width={12} className="jobbody">
          {progressbar(firstRound, allCount, '서류 합격률')}
          {progressbar(pass, allCount, '최종 합격률')}
          {progressText()}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

UserCurrent.propTypes = {
  allCount: PropTypes.number,
  document: PropTypes.number,
  pass: PropTypes.number,
  fail: PropTypes.number,
};

UserCurrent.defaultProps = {
  allCount: 1,
  document: 0,
  pass: 0,
  fail: 0,
};

export default UserCurrent;
