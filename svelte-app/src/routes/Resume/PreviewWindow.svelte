<script>
  export let name;
  export let phone;
  export let email;
  export let intro2; // 이 부분이 제대로 받아지고 있는지 확인
</script>

<div class="resume-preview">
  <h2>{name}</h2>
  <p>Phone: {phone}</p>
  <p>Email: {email}</p>
  <p>{intro2}</p>
</div>
