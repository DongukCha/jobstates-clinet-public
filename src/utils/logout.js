export default () => {
  localStorage.clear();
  alert('로그아웃 되었습니다');
  window.location = '/';
};
