const state = {
    projectdata:[],
    userInfo: JSON.parse(localStorage.getItem('userInfo')||'') ,
    token:localStorage.getItem('token')||'',
    xyy:1,
};
export default state;