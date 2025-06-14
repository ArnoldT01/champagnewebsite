import './ProductCard.css';

type ProductCardProps = {
    product: {
        image_path: string;
        name: string;
        price: string;
    };
    size?: 'small' | 'large';
}

const ProductCard = ({ product, size = 'small' }: ProductCardProps) => {
    const { image_path, name, price } = product;

    return (
        <div className={`product-card-container ${size}`}>
            <div className='image-container'>
                <img src={image_path} className='product-image' alt={name} />
            </div>
            <p>{name}</p>
            <p>{price}</p>
        </div>
    )
}

export default ProductCard