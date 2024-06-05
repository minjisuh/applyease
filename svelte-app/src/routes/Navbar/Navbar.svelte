<style>
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 10px;
    max-width: 800px;
    }

    .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 800px;
    padding: 10px 0;
    background-color: #ffffff;
    border-radius: 5px;
    height : 30px;
    }

    .navbar-container img {
    width: 50px;
    }

    .container .content img {
      margin-top : 10px;
      margin-bottom : 10px;
      width: 800px;
      height: 200px;
    }
    .page-name {
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin-left: 10px;
    margin-right: auto;
    display: flex;
    align-items: center;
    font-family: 'Montserrat', sans-serif; /* 폰트 변경 */
    text-transform: uppercase; /* 대문자 변경 */
    letter-spacing: 1px; /* 자간 조절 */
    }

    nav {
    display: flex;
    justify-content: space-between;
    }

    nav a {
    color: #333;
    margin-right: 10px;
    text-decoration: none;
    padding: 10px 20px;
    transition: background-color 0.3s ease;
    font-weight: 500; /* 폰트 굵기 변경 */
    font-size: 16px; /* 폰트 크기 변경 */
    }

    nav a:hover {
    background-color: #cce4ee;
    color: #fff; /* 호버 시 텍스트 색상 변경 */


    
}

  </style>
  
  <div class="container">
    <div class="navbar-container">
      <img src="/images/logo2.jpg" alt="Flowbite Logo" />
      <div class="page-name">Apply Ease</div>
      <nav>
        <a href="#/">Home</a>
        <a href="#/Resume">Resume</a>
        <a href="#/CoverLetter">CoverLetter</a>
      </nav>
    </div>
    <div class="content">
        <img src="/images/banner.gif" alt="Your GIF" />
    </div>
      
  </div>
  