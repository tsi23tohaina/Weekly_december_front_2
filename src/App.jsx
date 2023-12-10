import './App.css';
import Header from './component/1-header/Header';
import Author from './component/2-author-book/Author';
import About from './component/3-About/About';
import Trusted from './component/4-trusted-by/Trusted';
import Call0 from './component/5-callout0/Call0';
import What from './component/6-what-will-you-learn/What';
import Chapter from './component/7-the-chapter/Chapter';
import Testimonial from './component/8-testimonial/Testitmonial';
import Blog from './component/9-blog/Blog';
import Call1 from './component/10-callout1/Call1';
import Footer from './component/11-footer/Footer';

import  facebook  from './svg/facebook.svg'

function App() {
  return (
    <div>
        <Header/>
        <Author/>
        <About/>
        <Trusted/>
        <Call0/>
        <What/>
        <Chapter/>
        <Testimonial/>
        <Blog/>
        <Call1/>
        <Footer/>
    </div>
  );
}

export default App;
