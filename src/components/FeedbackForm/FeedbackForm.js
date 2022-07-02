import "./FeedbackForm.css";

export default function FeedbackForm({}) {

    return (
        <>
            <h2 className="feedback-form__title">Свяжитесь с нами</h2>
            <form className="feedback-form">
                <label className="feedback-form-item-label" form="feedback-name">
                    Ваше Имя *
                </label>
                <input className="feedback-form-item" id="feedback-name" type="text" required/>

                <label className="feedback-form-item-label" form="feedback-phone">
                    Ваш телефон *
                </label>
                <input className="feedback-form-item" id="feedback-phone" type="tel" required/>

                <label className="feedback-form-item-label" form="feedback-emile">
                    Ваш Email
                </label>
                <input className="feedback-form-item" id="feedback-emile" type="emile"/>
            </form>
        </>
    );
}