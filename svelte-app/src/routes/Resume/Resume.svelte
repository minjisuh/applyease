<script>
    import { navigate } from 'svelte-routing';
    function openPreview() {
        navigate('/preview', { state: { userInfo } });
    }


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
        email: 'example@example.com',
        intro2 : '안녕하세요'
    };

    // '수정' 버튼 클릭 이벤트 핸들러
    function toggleEdit() {
        isEditing = !isEditing;
    }

    let careers = [];

    function addCareer() {
        careers = [...careers, { startYear: '', startMonth: '', endYear: '', endMonth: '', company: '', department: '', isEditable: true }];
    }

    function saveCareer(index) {
        let career = careers[index];
        career.isEditable = false;
        careers = [...careers.slice(0, index), career, ...careers.slice(index + 1)];
    }
    let educationHistory = [
    ];

    function addEducation() {
        educationHistory = [...educationHistory, { degree: '', school: '', major: '', isEditable: true }];
    }

    function editEducation(index) {
        educationHistory[index].isEditable = true;
        educationHistory = [...educationHistory]; // Svelte가 배열의 변화를 감지하도록 새로운 배열 할당
    }

    function saveEducation(index) {
        educationHistory[index].isEditable = false;
        educationHistory = [...educationHistory]; // Svelte가 배열의 변화를 감지하도록 새로운 배열 할당
    }

    let links = [];

    // 링크와 설명을 links 배열에 추가
    function addLink() {
        links = [...links, { url: '', description: '', isEditable: true }];
    }
    function editLink(index) {
        links[index].isEditable = true;
        links = [...links]; // Svelte가 배열의 변화를 감지하도록 새로운 배열 할당
    }
    function saveLink(index) {
        links[index].isEditable = false;
        links = [...links]; // Svelte가 배열의 변화를 감지하도록 새로운 배열 할당
    }

  </script>
  

<div class="container">
    <header class="page-header">
      <h1>📜 이력서</h1> 
      <button on:click={openPreview}>미리보기</button>
      <button on:click={saveFile}>📂 파일로 저장</button> 
    </header>



    <div class = 'basicinfo'>
        <button on:click={toggleEdit}>{isEditing ? '📥 저장' : '🔧 수정'}</button>
        <div class='header'>
            <h2>😊 기본 정보</h2>
        </div>
        <div>

            <input type="text" bind:value={userInfo.name} class="inputField" class:noBorder={!isEditing} disabled={!isEditing} />
        </div>
        <div>

            <input type="text" bind:value={userInfo.phone} class="inputField" class:noBorder={!isEditing} disabled={!isEditing} />
        </div>
        <div>

            <input type="email" bind:value={userInfo.email} class="inputField" class:noBorder={!isEditing} disabled={!isEditing} />
        </div>
    </div>
      
    <div class="intro">
        <div class="header">
          <h2>📢 간단 소개</h2>
        </div>
        <div>
            
        </div>
    </div>
      

    <div class='careers'>
        <div class = 'carrerheader'>
            <h2>💼 경력</h2>
            <button on:click={addCareer}>+ 경력 추가</button>
        </div>
        {#each careers as career, index}
        <div class="career-input">
            {#if career.isEditable}
                <div class = "starttime">
                    
                    <select bind:value={career.startYear}>
                        <option value="">년도</option>
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                    </select>
 
                    <select bind:value={career.startMonth}>
                        <option value="">월</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <div class = "endtime">

                    <select bind:value={career.endYear}>
                        <option value="">년도</option>
                        <!-- 년도 옵션, 실제로는 동적으로 생성될 수 있습니다 -->
                        <option>2024</option>
                        <option>2023</option>
                        <option>2022</option>
                        <option>2021</option>
                        <!-- 여기에 더 많은 년도 추가 -->
                    </select>

                    <select bind:value={career.endMonth}>
                        <option value="">월</option>
                        <!-- 월 옵션 -->
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                        <option>12</option>
                    </select>
                </div>
                <input type="text" placeholder="회사명" bind:value={career.company} />
                <input type="text" placeholder="부서명/직책" bind:value={career.department} />
                <button on:click={() => saveCareer(index)}>저장</button>
            {:else}
                <!-- 편집 불가능한 텍스트로 표시 -->
                <div class="career-wrapper">
                    {career.startYear}. {career.startMonth} - {career.endYear}. {career.endMonth} / {career.company} / {career.department}
                </div>
            {/if}
        </div>
        {/each}
    </div>


    <div class='education'>
        <h2>🎓 학력</h2>
        {#each educationHistory as education, index}
            <div class="education-input">
                {#if education.isEditable}
                        <!-- 편집 가능한 입력 필드 -->
                    <select bind:value={education.degree}>
                        <option value="">학위 선택</option>
                        <option>학사</option>
                        <option>석사</option>
                        <option>박사</option>
                    </select>
                    <input type="text" placeholder="학교명" bind:value={education.school} />
                    <input type="text" placeholder="전공" bind:value={education.major} />
                    <button on:click={() => saveEducation(index)}>저장</button>
                {:else}
                    <!-- 편집 불가능한 텍스트로 표시 -->
                    <div>
                        {education.degree} | {education.school}대학교 | {education.major}전공
                        <button on:click={() => editEducation(index)}>수정</button>
                    </div>
                {/if}
            </div>
        {/each}
        <button on:click={addEducation}>+ 학력 추가</button>
    </div>
    
    <div class = 'links'>
        <h2>🔗 링크</h2>
        {#each links as link, index}
            <div class = 'link-input'>
                {#if link.isEditable}
                    <input type="text" placeholder="링크" bind:value={link.url} />
                    <input type="text" placeholder="설명" bind:value={link.description} />
                    <button on:click={() => saveLink(index)}>저장</button>
                {:else}
                    <div>
                        <a href={link.url} target="_blank">{link.description} | {link.url}</a>
                        <button on:click={() => editLink(index)}>수정</button>
                    </div>
                {/if}
            </div>
        {/each}
        <button on:click={addLink}>+ 링크 추가</button>
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
      max-width: 1200px; /* 최대 너비를 설정하여 양 옆에 공간을 만듭니다 */
    }
  
    .page-header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 100px;
        border-bottom : 0.5px solid gray;
    }
  
      
    h1 {
      margin-bottom : 5px;
      font-size: 25px;
    }
  
    .page-header button {
        padding: 5px 10px;
        border: black 1px solid;
        border-radius: 5px;
        background-color: rgb(236, 249, 255);
        color: black;
        font-size: 16px;
        cursor: pointer;
    }

    .basicinfo {
        width: 100%;
        margin-bottom: 100px;
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
        margin-bottom: 10px;
        padding : 5px 10px;
        border : none;
        border-radius : 5px;
        background-color: rgb(236, 249, 255);
        font-size: 15px;
        cursor: pointer;
    }

    
    .inputField {
        border: 1px solid #ccc; /* 기본 테두리 */
        padding: 5px;
    }
    
    .inputField.noBorder {
        border: none; /* 테두리 제거 */
        padding: 0;
    }

    .intro {
        width: 100%;
        margin-bottom: 100px;
    }
    .intro .header {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    

    .careers {
        width: 100%;
        margin-bottom: 100px;
    }
    
    .careers .carrerheader button{
        margin-top : 10px;
        padding : 5px 10px;
        border : 1px solid black;
        border-radius : 5px;
        background-color: rgb(236, 249, 255);
        font-size: 15px;
        cursor: pointer;
        margin-bottom : 20px;
    }
    
    .careers .career-input {
        margin-bottom: 20px;
    }
    .careers .career-input .career-wrapper{
        border: 1px solid #ccc;
        padding: 10px;
        background-color: rgb(236, 249, 255);
    }
    .careers .career-input button {
        padding: 3px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgb(236, 249, 255);
        font-size: 10px;
        cursor: pointer;
        margin-left: 10px;
    }
    .education {
        width: 100%;
        margin-bottom: 100px;
    }
    .education .education-input button {
        padding: 3px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgb(236, 249, 255);
        font-size: 10px;
        cursor: pointer;
        margin-left: 10px;
    }

    .education button {
        margin-top : 10px;
        padding: 5px 10px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgb(236, 249, 255);
        font-size: 15px;
        cursor: pointer;
    }

    .links {
        width: 100%;
        margin-bottom: 100px;
    }
    .links .link-input button {
        padding: 3px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgb(236, 249, 255);
        font-size: 10px;
        cursor: pointer;
        margin-left: 10px;
    }
    .links button {
        margin-top : 10px;
        padding: 5px 10px;
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgb(236, 249, 255);
        font-size: 15px;
        cursor: pointer;
    }
  </style>
  
