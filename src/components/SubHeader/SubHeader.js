import "./SubHeader.css";
export default function SubHeader({subHeaderTitle}) {

    return(
      <div className="subheader">
        <h1 className="subheader__title">{subHeaderTitle}</h1>
        <div className="subheader__background"> </div>
      </div>
    );
}