import './Error.css'
import rudolfImage from '../../assets/images/rudolf.png'

const Error = (props) => {
    return (
        <section className="error-container">
            <img src={rudolfImage} alt="Rudolf" />
            <div className="message -left">
                <div className="nes-balloon from-left">
                    <p>{props.message}</p>
                </div>
            </div>
        </section>
    )
}

export default Error