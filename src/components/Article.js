import './Article.css';
import ArticleBox from './ArticleBox';
import image1 from '../images/image-currency.jpg';
import image2 from '../images/image-restaurant.jpg';
import image3 from '../images/image-plane.jpg';
import image4 from '../images/image-confetti.jpg';

function Article(){
    return(
        <>
            <div className='articleBoxTitle'><h1>Latest Articles</h1></div>
            <div className='mainArticleBox'>
                <ArticleBox
                 image = {image1}
                 autor = 'By Claire Robinson'
                 title = 'Receive money in any currency with no fees'
                 description = 'The world is getting smaller and we are becoming more mobile. So why should you be forced to only receive money in a single...'
                 />
                 <ArticleBox
                 image = {image2}
                 autor = 'By Wilson Hutton'
                 title = 'Treat yourself without worrying about money'
                 description = 'Our simple budgeting feature allows you to separete out your spending and set realistic limits each month. That means you...'
                 />
                 <ArticleBox
                 image = {image3}
                 autor = 'By Wilson Hutton'
                 title = 'Take your Easybank card wherever you go'
                 description = 'We want you to enjoy your travels. This is why we dont charge any fees on purchases while you are abroad. we will even show you...'
                 />
                 <ArticleBox
                 image = {image4}
                 autor = 'By Claire Robinson'
                 title = 'Our invite-only Beta accounts are now live!'
                 description = 'After a lot of hard work by the whole team, we are excited to launch our closed beta. It is easy to request an invite through the site...'
                 />
            </div>
        </>
    )
}

export default Article;