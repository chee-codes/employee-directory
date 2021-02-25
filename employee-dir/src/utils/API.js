import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=25&nat=US";

export default {
  search: function () {
    return axios.get(BASEURL);
  },
};
