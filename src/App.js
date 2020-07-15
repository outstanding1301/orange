import React from 'react';
import Site from './components/Site';
import Login from './components/Login';
import './App.css';
import { inject, observer } from 'mobx-react';

@inject('accountStore')
@observer
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
      <Login accountStore={this.props.accountStore}/>
      <div className="background"></div>
        <h1 className="title">Orange</h1>
        <center>
          <div className="items">
            {(()=>{
              if(this.props.accountStore.isLogin) {
                return (
                  <div>
                    <Site name="사이즈 표" description='사이즈 표 생성' url="https://outstanding1301.github.io/size-table/"/>
                    <Site name="다중 상품" description='옵션 선택 묶음 상품 HTML, 카드 생성' url="https://outstanding1301.github.io/multi-item/"/>
                    <Site name="상세이미지" description='상품 상세 설명 이미지 생성' url="https://outstanding1301.github.io/item-detail/"/>
                    <Site name="바코드" description='로켓 발주서로 바코드 생성' url="https://outstanding1301.github.io/barcode-gen/"/>
                    <Site name="주문정보" description='로켓 발주서 이름순 정렬' url="https://outstanding1301.github.io/order-gen/"/>
                    <Site name="운송장" description='쿠팡, ESM 주문서 CNPLUS 양식화' url="https://outstanding1301.github.io/waybill-gen/"/>
                    <Site name="태그 생성" description='카테고리별 태그 생성' url="https://outstanding1301.github.io/tag-gen/"/>
                    <Site name="글자수 세기" description='글자 수, 바이트 수 계산' url="https://outstanding1301.github.io/text-length-bytes/"/>
                    <Site name="스카이넷" description='상품 업로드 작업 전반적 개선' url="https://outstanding1301.github.io/skynet/"/>
                  </div>
                )
              }
              else {
                return <div style={{fontSize: '20px', textAlign: 'center', color: '#181818'}}>먼저 로그인 해주세요.</div>
              }
            })()}
            
              <div className="bottomNav">
                {(()=>{
                  if(this.props.accountStore.isLogin) {
                    return (
                      <div>
                        <Site name="쿠팡 WING" color="#ffffff" img="coupang.png" url="https://wing.coupang.com/"/>
                        <Site name="ESM" color="#393e8d" img="esm.png" url="https://www.esmplus.com/"/>
                        <Site name="11번가" color="#ffffff" img="11st.png" url="http://soffice.11st.co.kr/"/>
                        <Site name="상상뷰티" color="#78d64b" img="naver.png" url="https://cafe.naver.com/sangsangbeauty"/>
                      </div>
                    )
                  }
                })()}
              </div>
          </div>
        </center>
      </div>
    );
  }
}

export default App;
