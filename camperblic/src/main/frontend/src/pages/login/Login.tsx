import React, {useState} from 'react';
import '../../styles/loginStyles/Login.css';
import { Link } from 'react-router-dom';
import axios from "axios";

interface LoginFrom{
    userId :string,
    userPw : string,
}
const Login = () => {

    const [loginForm , setLoginForm] = useState<LoginFrom>({ userId :'', userPw :''})
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
        console.log(loginForm);
    };

    const LoginBtn = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        axios.post('/login', loginForm)
            .then((response) => {
                console.log(response.data); // 서버 응답 처리
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className={'loginMainDiv'}>
            <div className={'loginFormDiv'}>
                <h1 className={'loginH1'}>CAMPERBLIC</h1>
                <div className={'borderDiv'}>
                    <form onSubmit={LoginBtn}>
                        <div className={"InputMainDiv"}>
                            <input type={"text"} placeholder={"아이디"} name={"userId"} onChange={handleInputChange}/>
                            <input type={"password"} placeholder={"비밀번호"} name={"userPw"} onChange={handleInputChange}/>
                        </div>
                        <div>
                            <button className={'LoginBtn'}>로그인</button>
                        </div>
                    </form>
                    <div className={'linkTODiv'}>
                        <Link to='/findpassword' className={'LinkTo'}>비밀번호 찾기 </Link>
                        <Link to='/findaccount' className={'LinkTo'}> 아이디 찾기 </Link>
                        <Link to='/signin'> 회원가입</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;