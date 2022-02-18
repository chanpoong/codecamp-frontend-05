export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    document.cookie = "aaa=goranii";
    document.cookie = "product=hair";
  };
  const onClickSaveLocal = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickGetCookie = () => {
    // const aaa = document.cookie;
    // console.log(aaa);
    const aaa = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa"))[0];
    const result = aaa.replace("aaa=", "");
    console.log(result);
  };
  const onClickGetLocal = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onClickGetSession = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };
  return (
    <div>
      <button onClick={onClickSaveCookie}>쿠기 저장</button>
      <button onClick={onClickSaveLocal}>로컬 저장</button>
      <button onClick={onClickSaveSession}>세션 저장</button>
      ====-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-
      <button onClick={onClickGetCookie}>쿠키 조회</button>
      <button onClick={onClickGetLocal}>로컬 조회</button>
      <button onClick={onClickGetSession}>세션 조회</button>
    </div>
  );
}
