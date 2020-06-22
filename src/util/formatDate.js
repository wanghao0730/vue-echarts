export default function formateData(time) {
  const year = time.getFullYear();
  const month = time.getMonth() - 1;
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();

  return `${year}年-${month}月-${date}日  ${hour}:${minute}`
}