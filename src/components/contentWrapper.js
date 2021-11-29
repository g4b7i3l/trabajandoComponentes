import TopBar from './topBar'
import Footer from './footer'
import ContentRowTop from './contentRowTop';
import Tabla from './tabla';

function ContentWrapper() {
    return (

        <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
                <TopBar/>
                <ContentRowTop/>
                <Tabla/>
                <Footer/>

            </div>
        </div>
    );
}

export default ContentWrapper;