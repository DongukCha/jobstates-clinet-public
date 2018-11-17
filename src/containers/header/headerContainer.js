import { connect } from 'react-redux';
import Header from './header';
import { fetchHeader } from '../../actions/action_header';

const mapStateToProps = state => ({
  header: state.header,
});

export default connect(
  mapStateToProps,
  { fetchHeader },
)(Header);
