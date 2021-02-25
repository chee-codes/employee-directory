import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5&nat=US";

export default {
  search: function () {
    return axios.get(BASEURL);
  },
};
