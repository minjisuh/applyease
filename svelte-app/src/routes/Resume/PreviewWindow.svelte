<script>
  export let name;
  export let phone;
  export let email;
  export let intro; // 이 부분이 제대로 받아지고 있는지 확인
  export let careers;
</script>

<div class="resume-preview">
  <h2>{name}</h2>
  <p>Phone: {phone}</p>
  <p>Email: {email}</p>
  <div class="intro">
    <div class="header">
      <h2>간단 소개</h2>
    </div>
    <div>
      <p>{intro}</p> <!-- 이 부분에 introText가 제대로 표시되고 있는지 확인 -->
    </div>
  </div>

  <div class="careers">
    <div class="carrer-header">
      <h2>경력</h2>
    </div>
    {#each careers as career}
      <div class="career-wrapper">
        {career.startYear}. {career.startMonth} - {career.endYear}. {career.endMonth} / {career.company} / {career.department}
      </div>
    {/each}
  </div>
</div>
