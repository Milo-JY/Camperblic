import React, {useState} from 'react';
import '../../styles/loginStyles/Login.css';
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from "axios";

interface LoginFrom{
    member_id :string,
    password : string,
}
const Login = () => {
    const history = useNavigate ();
    const [loginForm , setLoginForm] = useState<LoginFrom>({
        member_id :'',
        password :'',
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
        console.log(loginForm);
    };

    const LoginBtn = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        axios.post('/member/login', loginForm)
            .then((response) => {
                // 로그인 성공 시 홈으로 이동
                if (response.status === 200) {
                    history("/") // 홈 페이지 경로로
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <section className={'loginMainDiv'}>
            <div className={'loginFormDiv'}>
                <h1 className={'loginH1'}>CAMPERBLIC</h1>
                <div className={'borderDiv'}>
                    <form onSubmit={LoginBtn}>
                        <div className={"InputMainDiv"}>
                            <input type={"text"} placeholder={"아이디"} name={"member_id"} onChange={handleInputChange}/>
                            <input type={"password"} placeholder={"비밀번호"} name={"password"} onChange={handleInputChange}/>
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
        </section>
    );
};

export default Login;