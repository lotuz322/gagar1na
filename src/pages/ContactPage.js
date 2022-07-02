import FeedbackForm from "../components/FeedbackForm";
import "./ContactPage.css";
export default function ContactPage() {

    return (
        <div className="contact-page">
            <p>Если на нашем сайте Вы не нашли ответов на свои вопросы, наши менеджеры всегда готовы дать более полную информацию по телефону.</p>
            <h2>Адрес</h2>
            <p>Г.МОСКВА, КОМИНТЕРНА 2/2</p>
            <p>Тел/факс +7(977)805-46-46</p>
            <p>E-mail sobiratelniuobaz@gmail.com</p>
            <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A2b80b0921e955882b64cbaab21c206adc21c9c89a2456fb4517327e7b2bcce7d&amp;source=constructor"
                width="100%" height="417" frameBorder="0">
            </iframe>
            <FeedbackForm/>
        </div>
    );
}