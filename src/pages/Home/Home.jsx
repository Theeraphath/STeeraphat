import "./Home.css";

function Home() {
  return (
    <div className="Home-container">
      <div className="Home-img">
        <img src="../public/image.jpg" alt="" />
      </div>
      <div className="Home-text">
        <h1>
          Hello, I am <span>Jamin</span>
        </h1>
        <h4>
          &nbsp;&nbsp;สาขาวิชาวิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์
        </h4>
        <p>
          &nbsp;&nbsp;"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </div>
     
    </div>
  );
}

export default Home;
