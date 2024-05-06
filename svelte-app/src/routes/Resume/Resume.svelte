<script>
    // 파일로 저장하는 함수
    function saveFile() {
      const data = '이력서 내용...';
      const blob = new Blob([data], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = '이력서.txt';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }

    let isEditing = false; // 수정 모드 상태
    let userInfo = { // 사용자 기본 정보
        name: '서민지',
        phone: '010-1234-5678',
        email: 'example@example.com'
    };

    // '수정' 버튼 클릭 이벤트 핸들러
    function toggleEdit() {
        isEditing = !isEditing;
    }
  </script>
  

<div class="container">
    <header class="page-header">
      <h1>🎈이력서</h1> 
      <button on:click={saveFile}>파일로 저장</button> 
    </header>



    <div class = 'basicinfo'>
        <div class='header'>
            <h2>기본 정보</h2>
            <button on:click={toggleEdit}>{isEditing ? '📥' : '🔧'}</button>
        </div>
        <div>
            <label>이름:</label>
            <input type="text" bind:value={userInfo.name} class="inputField" class:noBorder={!isEditing} disabled={!isEditing} />
        </div>
        <div>
            <label>전화번호:</label>
            <input type="text" bind:value={userInfo.phone} class="inputField" class:noBorder={!isEditing} disabled={!isEditing} />
        </div>
        <div>
            <label>이메일:</label>
            <input type="email" bind:value={userInfo.email} class="inputField" class:noBorder={!isEditing} disabled={!isEditing} />
        </div>
    </div>
      

    

</div>



  
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      padding: 20px;
      max-width: 800px; /* 최대 너비를 설정하여 양 옆에 공간을 만듭니다 */
    }
  
    .page-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 100px;
    }
  
    h1 {
      margin: 0;
    }
  
    .page-header button {
        padding: 5px 10px;
        border: black 1px solid;
        border-radius: 5px;
        background-color: skyblue;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }

    .basicinfo {
        width: 100%;
        margin-bottom: 20px;
    }
    .basicinfo .header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        
    }

    h2 {
        margin: 0;
        font-size: 20px;
        color : rgb(66, 66, 66);
        font-weight:bold;
    }
    .basicinfo button {
        border : none;
        background-color: white;
        font-size: 20px;
        cursor: pointer;
    }

    .basicinfo label {
        color : rgb(66, 66, 66);
        font-size: 16px;
        font-weight: bold;
        margin-right: 10px;
    }
    .inputField {
        border: 1px solid #ccc; /* 기본 테두리 */
        padding: 5px;
    }
    
    .inputField.noBorder {
        border: none; /* 테두리 제거 */
        padding: 0;
    }

    
  </style>
  