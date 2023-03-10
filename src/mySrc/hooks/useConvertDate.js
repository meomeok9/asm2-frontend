const useConvertDate = (data) => {
  const date = new Date(data);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Set",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dat = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return dat + "-" + month + "-" + year;
};
export default useConvertDate;
