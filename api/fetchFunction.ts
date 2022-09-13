import axios from "axios";

export async function fetchOrderList() {
  const { data } = await axios.get("http://api.spacexdata.com/v4/launches/latest");
  return data;
}
