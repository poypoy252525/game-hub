import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "017396d7564f4e3ab3c444f29b18189d",
  },
});
