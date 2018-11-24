import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  fetchJob,
  filterFetchData,
  getDetailJob,
  changeStateDetail,
} from 'actions/action_Job';
import JobListHeader from './JobListHeader';
import { Grid, Segment } from 'semantic-ui-react';

class JobList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterFlag: false,
      redirect: false,
    };
  }

  componentDidMount() {
    const { fetchJob } = this.props;
    fetchJob();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isMoveToDetail) this.setState({ redirect: true });
  }

  async componentWillUnmount() {
    const { changeStateDetail } = this.props;

    await changeStateDetail();
  }

  _mapList = jobData => {
    const { getDetailJob } = this.props;

    return (
      <Grid>
        <Grid.Column width={16}>
          <Segment
            key={jobData.hireId}
            id={jobData.hireId}
            onClick={e => getDetailJob(e.currentTarget.id)}
          >
            <span>
              <img src={jobData.logo} width="35px" height="50px" />
            </span>
            <span> / {jobData.brand}</span>
            <span> / {jobData.title}</span>
            <span> / {jobData.status}</span>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  };

  _filterSearch = (value, inputValue) => {
    this.props.filterFetchData(value, inputValue);
    if (value === '전체' && !!inputValue) {
      this.setState({ filterFlag: true });
    } else if (value === '전체') {
      this.setState({ filterFlag: false });
    } else {
      this.setState({ filterFlag: true });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/jobdetail" />;
    }

    const { job, filter } = this.props;
    if (job.length === 0) {
      return <div>loading...</div>;
    }

    return (
      /* equal width => table 적용 */
      <div>
        <JobListHeader _filterSearch={this._filterSearch} />
        <Grid className="job-list container">
          <Grid.Column width={16}>
            <Segment>
              {this.state.filterFlag
                ? filter.map(this._mapList)
                : job.map(this._mapList)}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    job: state.job.allJobData,
    filter: state.job.filterData,
    isMoveToDetail: state.job.currentData.isMoveToDetail,
  };
};

export default connect(
  mapStateToProps,
  { fetchJob, getDetailJob, filterFetchData, changeStateDetail },
)(JobList);
