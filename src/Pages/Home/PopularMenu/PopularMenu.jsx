
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {

    const [menu] = useMenu()
    const  popular = menu.filter(item => item.category === 'popular');
    return (
        <section className="mb-12 gap-10">
            <SectionTitle
                subHeading='FROM OUR MENU'
                heading='Check it out'
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn btn-outline border-0 border-b-4 mt-4 items-center">View Full Menu</button>
        </section>
    );
};

export default PopularMenu;