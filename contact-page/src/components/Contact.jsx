export default function Contact(props) {
    return(
        <article className="contact-card">
            <img src={props.img} alt="Cat" />
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="\src\images\phone-icon.png" alt="Phone Icon" />
                <p>{props.phoneNumber}</p>
            </div>
            <div className="info-group">
                <img src="\src\images\mail-icon.png" alt="Mail Icon" />
                <p>{props.email}</p>
            </div>
        </article>
    )
}