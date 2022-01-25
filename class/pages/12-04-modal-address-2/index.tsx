import { useState, ChangeEvent } from 'react';
import { Modal, Button } from 'antd';
import DaumPostcode from 'react-daum-postcode';

export default function ModalCustomPage(){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [address, setAddress]=useState('');
  const [zoneCode, setZonecode]=useState('');

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onCompleteDaumPostCode = (data: any) =>{
    console.log(data)
    setAddress(data.address)
    setZonecode(data.zoneCode)
    setIsModalVisible(false)// 함수 실행 후 modal 종료를 위한 setState 설정
    
    
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        우편번호 검색
      </Button>
      {/* ismodalvisibel state를 &&을 사용해주면 false일 때는
      아예 && 뒤의 내용을 삭제하고 true일 때 다시 랜더링하기에
      유저가 보기에는 값이 초기화 된 걸로 보임 */}
      {isModalVisible && (<Modal 
      title="Modal Test" 
      visible={true} 
      onOk={handleOk} 
      onCancel={handleCancel}>
      <DaumPostcode
      onComplete={onCompleteDaumPostCode}
      />
      </Modal>
      )}
      
    </>
  );
};

