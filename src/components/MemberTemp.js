import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const MemberTempBlock = styled.div`
    border-top:87px solid orange;
    .row {
        padding:50px 0;
        h2{ font-size:30px; text-align:center}
        div{
            max-width:500px; margin:0 auto;
            h3{text-align:center; font-size:40px; margin:30px 0}
            form {
                .intext{ width:100%; padding:15px 10px;
                border-radius:10px; border:1px solid #555;
                margin-bottom:20px}
            }
            button{ display:block; padding:15px 0; background:#999;
                border-radius:10px; margin:20px 0; color:#fff;
                width:100%;
            }
        }
        .membertype {display:block; text-align:right; color:blue; text-decoration:underline}
    }
`

const MemberTemp = ({type}) => {

    const textMap= {login:'로그인', join:'회원가입'}
    const text = textMap[type]

    return (
        <MemberTempBlock>
            <div className="row">
                <h2>MEMBERSHIP</h2>
                <div>
                    <h3>{text}</h3>
                    <form>
                        { type==='join' && <input className="intext" type="text" placeholder="이름" /> }
                        <input className="intext" type="text" placeholder="아이디" />
                        <input className="intext" type="password" placeholder="비밀번호" />
                        { type==='join' && 
                            <>
                                <input className="intext" type="password" placeholder="비밀번호 확인" /> 
                                <label>성별 :</label>
                                남 <input type="radio" name="gender" value="m" style={{ marginRight:'10px'}}></input>
                                여 <input type="radio" name="gender" value="w"></input>
                            </>
                        }
                        <button type="submit">{text}</button>
                    </form>
                    {type==='login' ? <Link to="/join" className="membertype">회원가입</Link> : 
                    <Link to="/login" className="membertype">로그인</Link> }
                </div>
            </div>
        </MemberTempBlock>
    );
};

export default MemberTemp;