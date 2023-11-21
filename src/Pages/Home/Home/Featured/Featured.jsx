import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed  text-white pt-8 my-20">
            <SectionTitle
            subHeading='Check it Out'
            heading='FROM OUR MENU'
            ></SectionTitle>
           <div className="md: flex justify-center items-center bg-slate-400 bg-opacity-60 pb-20 pt-12 px-36">
           <div>
                <img src={featuredImg} alt="" />
            </div>
            <div className="md: ml-10">
                <p>Aug 20, 2030</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero a dolores, deserunt aut facere fugiat sint est ut accusantium? Enim ipsum nesciunt, voluptatem excepturi accusantium aliquid ipsam minus nulla, rerum quod commodi esse at officia odit eum atque eligendi sint laboriosam molestias beatae incidunt veniam natus voluptas. Quibusdam, aliquid enim.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Read More</button>
            </div>
           </div>
        </div>
    );
};

export default Featured;