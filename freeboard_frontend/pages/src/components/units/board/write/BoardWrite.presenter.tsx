import * as JH from "./BoardWrite.styles";
import DaumPostcode from "react-daum-postcode";
import { Modal, Button } from "antd";
import ImageUploadPage from "../../../../commons/imageUpload/imageUpload.container";
import { v4 as uuidv4 } from "uuid";

export default function BoardWriteUI(props) {
  return (
    <JH.Board>
      <JH.MyTitle>게시물 {props.isEdit ? "수정" : "등록"}</JH.MyTitle>
      <JH.MySubTitle>* 는 필수 작성 항목입니다.</JH.MySubTitle>

      <JH.TextBox1>
        <div>
          <JH.Text>작성자* </JH.Text>
          <JH.InputBox
            type="text"
            onChange={props.nameCheck}
            placeholder="이름을 입력하세요"
            defaultValue={props.isEdit ? props.data?.fetchBoard.writer : ""}
          />
          <JH.ErrorMassages>{props.nameError}</JH.ErrorMassages>
        </div>

        <div>
          <JH.Text>비밀번호* </JH.Text>
          <JH.InputBox
            type="password"
            onChange={props.passwordCheck}
            placeholder="비밀번호를 입력하세요"
            defaultValue={props.isEdit ? props.data?.fetchBoard.password : ""}
          />
          <JH.ErrorMassages>{props.passwordError}</JH.ErrorMassages>
        </div>
      </JH.TextBox1>
      <JH.TextBox2>
        <JH.Text>제목* </JH.Text>
        <JH.InputTitle
          type="text"
          onChange={props.titleCheck}
          placeholder="제목을 입력하세요"
          defaultValue={props.isEdit ? props.data?.fetchBoard.title : ""}
        />
        <JH.ErrorMassages>{props.titleError}</JH.ErrorMassages>
      </JH.TextBox2>
      <JH.TextBox2>
        <JH.Text>내용* </JH.Text>
        <JH.InputOne
          onChange={props.txtCheck}
          placeholder="내용을 작성해주세요"
          defaultValue={props.isEdit ? props.data?.fetchBoard.contents : ""}
        ></JH.InputOne>
        <JH.ErrorMassages> {props.txtError} </JH.ErrorMassages>
      </JH.TextBox2>
      <JH.TextBox2>
        <JH.Text>주소 </JH.Text>
        <JH.PartOfAddress>
          <JH.InputMailAddress
            type="text"
            value={
              props.zipcode ||
              props.data?.fetchBoard.boardAddress?.zipcode ||
              ""
            }
            placeholder="우편번호"
          />

          <JH.FindMailAddress onClick={props.onToggleModal}>
            🔍️
          </JH.FindMailAddress>
          {props.isModalVisible && (
            <Modal
              title="Search Address"
              visible={true}
              onOk={props.onToggleModal}
              onCancel={props.onToggleModal}
            >
              <DaumPostcode onComplete={props.onCompleteDaumPostCode} />
            </Modal>
          )}
        </JH.PartOfAddress>

        <JH.GetUserAddress
          type="text"
          placeholder="주소"
          disabled={true}
          value={
            props.address || props.data?.fetchBoard.boardAddress?.address || ""
          }
        />

        <JH.InputAddress
          type="text"
          placeholder="상세주소를 입력해주세요"
          onChange={props.onInputAddressDetail}
          value={
            props.addressDetail
              ? props.addressDetail
              : props.data?.fetchBoard.boardAddress?.addressDetail
          }
        />
      </JH.TextBox2>

      <JH.TextBox2>
        <JH.Text>YouTube </JH.Text>
        <JH.InputYoutube
          onChange={props.YoutubeUrlCheck}
          type="text"
          placeholder="링크를 복사해주세요"
          defaultValue={props.isEdit ? props.data?.fetchBoard.youtubeUrl : ""}
        />
      </JH.TextBox2>

      <JH.PictureBox>
        <JH.Text>사진 첨부</JH.Text>
        <JH.UploadedImageWrapper>
          {props.images.map((el, index) => (
            <ImageUploadPage
              key={uuidv4()}
              index={index}
              images={el}
              defaultFileUrl={
                props.isEdit ? el : props.data?.fetchBoard?.images?.[index]
              }
              onChangeFileUrls={props.onChangeFileUrls}
            />
          ))}
        </JH.UploadedImageWrapper>
      </JH.PictureBox>

      <JH.TextBox2>
        <JH.Text>메인설정</JH.Text>
        <JH.WrapperChoose>
          <JH.ChooseMain>
            <JH.ChooseButton
              type="checkbox"
              name="choose"
              id="checkbox1"
            ></JH.ChooseButton>
            <JH.ChooseButtonText htmlFor="checkbox1">
              YouTube
            </JH.ChooseButtonText>
          </JH.ChooseMain>
          <JH.ChooseMain>
            <JH.ChooseButton
              type="checkbox"
              name="choose"
              id="checkbox2"
            ></JH.ChooseButton>
            <JH.ChooseButtonText htmlFor="checkbox2">사진</JH.ChooseButtonText>
          </JH.ChooseMain>
        </JH.WrapperChoose>
      </JH.TextBox2>

      <JH.Signup>
        <JH.SignupButton
          onClick={props.showModal}
          //   {props.isEdit ? props.EditBoard() : props.ValueCheck()}
          changeBtnColor={props.isActive}
        >
          {props.isEdit ? "수정하기" : "등록하기"}
        </JH.SignupButton>
        <Modal
          title={props.isEdit ? "수정하기" : "등록하기"}
          visible={props.isSignupModalVisible}
          onOk={props.ValueCheck}
          onCancel={props.handleCancel}
        >
          저장하시겠습니까?
        </Modal>

        <JH.CansleButton onClick={props.showCancelModal}>
          취소하기
        </JH.CansleButton>
        <Modal
          title={"취소"}
          visible={props.isCancelModalVisible}
          onOk={props.ClickCansle}
          onCancel={props.cancelModalPressCancel}
        >
          작성을 취소하시겠습니까?
        </Modal>
      </JH.Signup>
    </JH.Board>
  );
}
