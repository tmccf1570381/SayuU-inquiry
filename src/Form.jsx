import { useState } from "react"

export default function Form(){
    const [flag ,setFlag] = useState(false);
    const [formValue, setFormValue] = useState({
        "kind" : "",
        "firstName" : "",
        "lastName" : "",
        "phone1" : "",
        "phone2" : "",
        "phone3" : "",
        "mail" : "",
        "mailConfirm" : "",
        "text" : ""
    });

    const handler = (e) => {
        switch(e.target.id){
            case "firstName":
                // console.log("kind");
                break
            default:
                break
        }
        setFormValue(prev => ({...prev, [e.target.id] : e.target.value}))
    }

    const submit = async(e) => {
        e.preventDefault();
        await fetch("https://g5aprquask.execute-api.ap-northeast-1.amazonaws.com/develop/", 
        {method: "POST", mode: "no-cors" ,headers: {'Content-Type': 'application/json'},  body: JSON.stringify({content: formValue})})
        .then(e=>e.json()).catch(error=>"");
        setFormValue({
            "kind" : "",
            "firstName" : "",
            "lastName" : "",
            "phone1" : "",
            "phone2" : "",
            "phone3" : "",
            "mail" : "",
            "mailConfirm" : "",
            "text" : ""
        });
        alert("お問い合わせを受付けました");
        setFlag(false);
    }

    return (
        <>
        {!flag
        ?<section className="forms">
            <p className="discript">以下のフォームよりお問い合わせ内容をご入力下さい。</p>
            <form action="" method="post">
                <section className="textform">
                    <label htmlFor="kind" className="label">
                        <span className="must">必須</span>
                        お問い合わせ種別
                    </label>
                    <select id="kind" value={formValue.kind} onChange={e => handler(e)}>
                        <option value="">選択してください</option>
                        <option value="SayuUについて">SayuUについて</option>
                        <option value="料金について">料金について</option>
                        <option value="その他">その他</option>
                    </select>
                </section>

                <section className="fillForm">
                    <div className="test">
                    <section className="firstName">
                        <label htmlFor="firstName" className="label">
                            <span className="must">必須</span>
                            姓
                        </label>
                        <input type="text" id="firstName" placeholder="例）安全" value={formValue.firstName} onChange={e => handler(e)} />
                    </section>

                    <section className="lastName">
                        <label htmlFor="lastName" className="label">
                            <span className="must">必須</span>
                            名
                        </label>
                        <input type="text" id="lastName" placeholder="例）太郎" value={formValue.lastName} onChange={e => handler(e)}/>
                    </section>
                    </div>
                </section>

                <section className="fillForm">
                    <section className="textform">
                        <label htmlFor="phone1" className="label">
                            <span className="optional">任意</span>
                            電話番号
                        </label>
                        <div className="phoneNumber">
                            <input type="text" id="phone1" placeholder="例）0800" value={formValue.phone1} onChange={e => handler(e)} />
                            <span className="phone-">ー</span>
                            <input type="text" id="phone2" placeholder="例）700"  value={formValue.phone2} onChange={e => handler(e)} />
                            <span className="phone-">ー</span>
                            <input type="text" id="phone3" placeholder="例）7700" value={formValue.phone3} onChange={e => handler(e)} />
                        </div>
                    </section>
                </section>

                <section className="textform">
                    <label htmlFor="" className="label">
                        <span className="must">必須</span>
                        メールアドレス
                    </label>
                    <input type="text" id="mail" placeholder="例）SayuU@mail.com" value={formValue.mail} onChange={e => handler(e)}/>
                </section>

                <section className="textform">
                    <label htmlFor="" className="label">
                        <span className="must">必須</span>
                        メールアドレス（確認用）
                    </label>
                    <input type="mail" id="mailConfirm" placeholder="例）SayuU@mail.com" value={formValue.mailConfirm} onChange={e => handler(e)}/>
                </section>

                <section className="textform">
                    <label htmlFor="" className="label">
                        <span className="must">必須</span>
                        お問い合わせ内容
                    </label>
                    <textarea id="text" className='statement' rows={0} placeholder="お問い合わせ内容をご入力ください。" value={formValue.text} onChange={e => handler(e)}></textarea>
                </section>

                <section className="textform">
                    <button className="submmit" onClick={()=>{setFlag(true)}}>入力内容を確認する</button>
                </section>
            </form>
        </section>
        :<section className="forms">
            <div className="confirm">
                <h2>お問い合わせ内容の確認</h2>
                <div className="confirmRow firstRow">
                    <label className="confirmRow-left">お問い合わせ種別</label>
                    <span className="confirmRow-right">{formValue.kind}</span>
                </div>

                <div className="confirmRow">
                    <label className="confirmRow-left">氏名</label>
                    <span className="confirmRow-right">{formValue.firstName +" "+ formValue.lastName}</span>
                </div>
                
                <div className="confirmRow">
                    <label className="confirmRow-left">電話番号</label>
                    <span className="confirmRow-right">{formValue.phone1 +"-"+ formValue.phone2 +"-"+ formValue.phone3}</span>
                </div>

                <div className="confirmRow">
                    <label className="confirmRow-left">メールアドレス</label>
                    <span className="confirmRow-right">{formValue.mail}</span>
                </div>

                <div className="confirmRow lastRow">
                    <div>
                        <label className="confirmRow-left">お問い合わせの内容</label>
                    </div>
                    <div className="confirmRow-text">
                        {formValue.text}
                    </div>
                </div>
                <section className="buttonArea">
                    <button className="submmit confirmbutt" onClick={()=>{setFlag(false)}}>お問い合わせ内容を修正する</button>
                    <button className="submmit confirmbutt" onClick={submit}>この内容で送信する</button>
                </section>
            </div>
        </section>
        }
        </>
    )
}