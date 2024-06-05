import './ArticleBox.css';

function ArticleBox(props){
    return(
        <div className="articleContainer">
            <div className="articleImage"><img src={props.image}/></div>
            <div className='subtitle'>
                <div className="autor"><p>{props.autor}</p></div>
                <div className="articleTitle">{props.title}</div>
                <div className="articleDescription">{props.description}</div>
            </div>
        </div>
    )
}

export default ArticleBox;