

const FoodCard = ({ item }) => {
    const {name, image, price, recipe} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className="absolute right-0 text-white bg-slate-900 mr-4 px-4">${price}</p>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe }</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;