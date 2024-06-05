<script>
    let answers = ['', '', '', '', '']; // 5개의 질문에 대한 답변을 저장할 배열
    const questions = [
        "1. 지원 동기",
        "2. 입사 후 포부",
        "3. 주요 역량",
        "4. 협업 경험",
        "5. 성격 장단점"
    ];
    // 답변을 텍스트 파일로 저장
    function saveAnswers() {
        let content = "";
        questions.forEach((q, index) => {
            content += `${q}\n답변: ${answers[index]}\n\n`;
        });

        const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "자기소개서.txt";
        a.click();
        URL.revokeObjectURL(url);
    }
</script>




<div class='container'>
    <header class="page-header">
        <h1>📃 마스터 자기소개서</h1>
        <button on:click={saveAnswers}>📂 파일로 저장</button> 
    </header>
    <div class="qna">
        {#each questions as question, index (index)}
            <div>
                <h2>{question}</h2>
                <textarea bind:value={answers[index]} placeholder="여기에 답변을 입력하세요."></textarea>
                <p>글자수: {answers[index].length}</p>
            </div>
        {/each}
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

    .qna {
        margin-bottom: 100px;
        width : 100%;
    }

    .qna textarea{
        width: 100%;
        height: 200px;
        font-size: 16px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    .qna p {
        font-size: 13px;
        color: gray;
        margin-bottom : 100px;
    }
</style>