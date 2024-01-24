import "./Success.css"
export default function Successs({ Cheks }) {
    return (
        <div className="Card">
            <div className="modal">
                <div className="form">
                    <img src={Cheks} alt="will not show" />
                    <h1>Thanks for subscribing!</h1>
                    <p>A confirmation email has been sent to <span>ash@loremcompany.com</span>.
                        Please open it and click the button inside to confirm your subscription.</p>
                </div>
                <button className="button">Dismiss message</button>
            </div>

        </div>
    )
}