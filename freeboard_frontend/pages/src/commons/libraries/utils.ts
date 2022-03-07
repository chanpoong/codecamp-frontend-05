export const getMyDate = (myDate) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  const dd = aaa.getDate();
  return `${yyyy}-${mm}-${dd}`;
};

export const getMyDate2 = (myDate) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  const dd = aaa.getDate();

  return `${yyyy}-${String(mm).padStart(2, "0")}-${String(dd).padStart(
    2,
    "0"
  )}`;
};
export const getPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const checkFileValidation = (file?: File) => {
  if (!file?.size) {
    alert("파일이 존재하지 않습니다.");
    return false;
  }
  if (file?.size > 5 * 1024 * 1024) {
    alert("5MB를 초과하는 파일은 업로드 할 수 없습니다.");
    return false;
  }

  if (
    !file.type.includes("jpeg") &&
    !file.type.includes("png") &&
    !file.type.includes("jpg")
  ) {
    alert("지원하지 않는 형식의 파일입니다.");
    return false;
  }
  return true;
};

export const DateToString = (dateTime: string) => {
  let dateString = "";
  const date = new Date(dateTime);
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor(diff / (1000 * 60 * 60));
  const diffMin = Math.floor(diff / (1000 * 60));
  const diffSec = Math.floor(diff / 1000);

  if (diffSec < 60) dateString = `방금 전`;
  else if (diffMin < 60) dateString = `${diffMin}분 전`;
  else if (diffHour < 24) dateString = `${diffHour}시간 전`;
  else if (diffDay < 8) dateString = `${diffDay}일 전`;
  else dateString = dateTime.split("T")[0];

  return dateString;
};
