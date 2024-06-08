<script>
  import Calendar from "./Calendar.svelte";
  import { getData } from "../../../../../applyease2/frontend/src/routes/Home/data.js";
</script>

<div class = 'container'>
    <header class="page-header">
        <h1>📆 채용 일정</h1>
    </header>
    <Calendar events={getData()} date={new Date(2021, 5, 10)} />
    
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
        margin-bottom: 20px;
        border-bottom : 0.5px solid gray;
    }
  
    h1 {
      margin-bottom : 5px;
      font-size: 25px;
    }
</style>