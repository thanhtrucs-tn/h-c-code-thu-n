import './home.css';
import { useState } from 'react';

function Home() {

    // Phần thông tin cá nhân được thêm vào để hiển thị các trường nhập liệu cho tên, email và số điện thoại của người dùng. Các trường này có giới hạn độ dài và placeholder để hướng dẫn người dùng nhập thông tin.
    const [name, setName] = useState('');   // State để lưu tên người dùng
    const [nameError, setNameError] = useState('');   // State để lưu lỗi liên quan đến tên người dùng (nếu có)     
    
    const [email, setEmail] = useState('');   // State để lưu email người dùng
    const [emailError, setEmailError] = useState('');   // State để lưu lỗi liên quan đến email người dùng (nếu có)
    
    const [phone, setPhone] = useState('');   // State để lưu số điện thoại người dùng
    const [phoneError, setPhoneError] = useState('');   // State để lưu lỗi liên quan đến số điện thoại người dùng (nếu có)


    // Phần state và hàm xử lý phép tính được thêm vào để thực hiện các phép tính cơ bản và hiển thị kết quả trên giao diện
    // State để lưu giá trị a, b, kết quả phép tính và tên phép tính để hiển thị trên giao diện
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(null);   // Lưu kết quả phép tính
  const [operation, setOperation] = useState('');   // Lưu tên phép tính để hiển thị kết quả

  const handleCalculate = (type) => {   // type: sum, subtract, multiply, divide
    let value;          // Biến tạm để lưu kết quả phép tính

    if (type === 'sum') {       //  Nếu là phép cộng
      value = a + b;            //  Tính tổng a và b
      setOperation('Cộng');     //  Lưu tên phép tính để hiển thị kết quả
    } else if (type === 'subtract') {       //  Nếu là phép trừ
      value = a - b;                        //  Tính hiệu a và b
      setOperation('Trừ');                  //  Lưu tên phép tính để hiển thị kết quả
    } else if (type === 'multiply') {       //  Nếu là phép nhân
      value = a * b;                         //  Tính tích a và b    
      setOperation('Nhân');                   //  Lưu tên phép tính để hiển thị kết quả
    } else if (type === 'divide') {           //  Nếu là phép chia
      if (b === 0) {                           //  Nếu b bằng 0, không thể chia được
        value = 'Không chia được cho 0';        //  Hiển thị thông báo lỗi thay vì kết quả
      } else {                                  //  Nếu b khác 0, thực hiện phép chia bình thường
        value = a / b;                        //  Tính thương a và b
      }
      setOperation('Chia');                 //  Lưu tên phép tính để hiển thị kết quả   
    }

    setResult(value);                       // Cập nhật kết quả phép tính vào state để hiển thị trên giao diện
  };

  return (
    <main className="home-main">
      <h2>Welcome to the Home page</h2>

        {/* thông tin cá nhân */}
        <div className="info">
            <h3>Thông tin cá nhân của bạn.</h3>

            <ul>
                <li>
                    <label htmlFor="name">Tên:</label>
                    <input type="text" id="name"
                            value={name}
                            placeholder="Nhập tên của bạn" 
                            onChange={(e) => {
                                const value = e.target.value;

                                if(value.length <= 30){
                                    setName(value);
                                    setNameError('');
                                }

                                else{
                                    setNameError('Tên chỉ được tối đa 30 ký tự');
                                }
                            }}
                    />
                    {nameError && <p className="error">{nameError}</p>}
                </li>

                <li>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"
                            value={email}
                            placeholder="Nhập email của bạn"
                            value={email}
                            onChange={(e) => {
                                const value = e.target.value;
                                if(value.length <= 50){
                                    setEmail(value);
                                    setEmailError('');
                                }
                                else{
                                    setEmailError('Email chỉ được tối đa 50 ký tự');
                                }
                            }}
                    />
                    {emailError && <p className="error">{emailError}</p>}
                </li>
                
                <li>
                    <label htmlFor="phone">Số điện thoại:</label>
                    <input type="tel" id="phone" 
                            maxLength={10}
                            placeholder="Nhập số điện thoại của bạn" 
                            value={phone}
                            onChange={(e) => {
                                const value = e.target.value;
                                if(value.length <= 10){
                                    setPhone(value);
                                    setPhoneError('');
                                }
                                else{
                                    setPhoneError('Số điện thoại chỉ được tối đa 10 ký tự');
                                }
                    }}
                    />
                    {phoneError && <p className="error">{phoneError}</p>}
                </li>
            </ul>
        </div>

    {/* phép tính */}
        <div className="calculator">
            <h2>Phép tính</h2>

            <label>Nhập số a: </label>
            <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}           // Cập nhật giá trị a khi người dùng nhập vào ô input
            />
            <br />

            <label>Nhập số b: </label>
            <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}           // Cập nhật giá trị b khi người dùng nhập vào ô input
            />

            <div className="button">
            <button onClick={() => handleCalculate('sum')}>Cộng</button>          {/* Gọi hàm handleCalculate với tham số 'sum' khi người dùng click vào nút Cộng */  }
            <button onClick={() => handleCalculate('subtract')}>Trừ</button>        {/* Gọi hàm handleCalculate với tham số 'subtract' khi người dùng click vào nút Trừ */  } 
            <button onClick={() => handleCalculate('multiply')}>Nhân</button>
            <button onClick={() => handleCalculate('divide')}>Chia</button>
            </div>

            {result !== null && (                   // Chỉ hiển thị kết quả nếu result khác null, tức là đã có phép tính được thực hiện
            <div className="result-box">          {/* Hiển thị kết quả phép tính trong một div với class result-box để có thể áp dụng CSS */  }
                <p>
                Kết quả {operation}: <strong>{result}</strong>
                </p>
            </div>
            )}
        </div>
    </main>
  );
}

export default Home 
