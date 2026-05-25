import './about.css';

function About() {
  return (
    <main className="about-main">
      <div className="about-container">
        <h2>Về Chúng Tôi</h2>
        <p>Chào mừng bạn đến với trang web du lịch biển của chúng tôi. Chúng tôi tự hào mang đến cho bạn những trải nghiệm tuyệt vời nhất tại các vùng biển tuyệt đẹp với cát trắng, nắng vàng và làn nước trong xanh.</p>
        
        <div className="about-content">
          <div className="about-card">
            <h3>Sứ Mệnh</h3>
            <p>Khám phá và chia sẻ vẻ đẹp của đại dương. Chúng tôi mong muốn cung cấp thông tin chi tiết, cẩm nang du lịch và những gợi ý hoàn hảo cho kỳ nghỉ của bạn.</p>
          </div>
          <div className="about-card">
            <h3>Tầm Nhìn</h3>
            <p>Trở thành nền tảng thông tin du lịch biển hàng đầu, kết nối những người yêu biển và mang lại giá trị bền vững cho các cộng đồng ven biển.</p>
          </div>
          <div className="about-card">
            <h3>Cam Kết</h3>
            <p>Chúng tôi cam kết cung cấp những thông tin trung thực, hình ảnh sống động và luôn đặt trải nghiệm khám phá của người dùng lên hàng đầu.</p>
          </div>
        </div>
        
        <div className="about-gallery">
          <h3>Hành Trình Khám Phá Đại Dương</h3>
          <p>Hãy để chúng tôi đồng hành cùng bạn trên mọi hành trình khám phá những hòn đảo hoang sơ và tận hưởng trọn vẹn vẻ đẹp của biển cả.</p>
        </div>
      </div>
    </main>
  );
}

export default About;
