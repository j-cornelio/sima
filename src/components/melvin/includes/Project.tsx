
import image1 from '../images/work/1.jpg';
import image2 from '../images/work/2.jpg';
import image3 from '../images/work/3.jpg';
import image4 from '../images/work/4.jpg';
import image5 from '../images/work/5.jpg';
import image6 from '../images/work/6.jpg';
import image7 from '../images/work/7.jpg';
import image8 from '../images/work/8.jpg';
import image9 from '../images/work/9.jpg';
import image10 from '../images/work/10.jpg';
import image11 from '../images/work/11.jpg';
import image12 from '../images/work/12.jpg';

function Project () {
    return (
        <>
            <div className="row work">
                <div className="col-md-2">
                    <img src={image1} />
                </div>
                <div className="col-md-2">
                    <img src={image2} />
                </div>
                <div className="col-md-2">
                    <img src={image3} />
                </div>
                <div className="col-md-2">
                    <img src={image4} />
                </div>
                <div className="col-md-2">
                    <img src={image5} />
                </div>
                <div className="col-md-2">
                    <img src={image6} />
                </div>
            </div>
            <div className="row work">
                <div className="col-md-2">
                    <img src={image7} />
                </div>
                <div className="col-md-2">
                    <img src={image8} />
                </div> 
                <div className="col-md-2">
                    <img src={image9} />
                </div> 
                <div className="col-md-2">
                    <img src={image10} />
                </div> 
                <div className="col-md-2">
                    <img src={image11} />
                </div> 
                <div className="col-md-2">
                    <img src={image12} />
                </div> 
            </div>
        </>
    )
}

export default Project;