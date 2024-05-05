<script>
    let name = '';
    let phoneNumber = '';
  </script>
  
  <style>
    .resume-form {
      display: flex;
      flex-direction: column;
      max-width: 500px;
      margin: 0 auto;
    }
  
    .form-group {
      margin-bottom: 20px;
    }
  
    label {
      margin-bottom: 5px;
      font-weight: bold;
    }
  
    input {
      width: 100%;
      padding: 10px;
      font-size: 16px;
    }
  </style>
  
  <div class="resume-form">
    <h1>이력서</h1>
    <div class="form-group">
      <label for="name">이름</label>
      <input id="name" type="text" bind:value={name} placeholder="이름을 입력하세요">
    </div>
    <div class="form-group">
      <label for="phoneNumber">전화번호</label>
      <input id="phoneNumber" type="text" bind:value={phoneNumber} placeholder="전화번호를 입력하세요">
    </div>
    <!-- 추가적으로 필요한 필드를 여기에 추가하세요 -->
  </div>
  
  <!-- 입력된 데이터를 확인하기 위한 임시 출력 -->
  <p>이름: {name}</p>
  <p>전화번호: {phoneNumber}</p>
  