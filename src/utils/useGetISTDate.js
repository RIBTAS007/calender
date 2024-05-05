import moment from "moment-timezone";

const useGetISTDate = (date) => {
  return moment(date).tz("Asia/Kolkata").format("YYYY-MM-DD");
};

export default useGetISTDate;
