export const getMyDate = (myDate) => {
  const aaa = new Date(myDate);
  const yyyy = aaa.getFullYear();
  const mm = aaa.getMonth() + 1;
  const dd = aaa.getDate();
  return `${yyyy}-${mm}-${dd}`;
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
