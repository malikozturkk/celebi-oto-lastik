"use client"
import { slugify } from "@/data/services";

const ProductsCategory = ({ category }: any) => {
    return (
        <button
            key={category.category}
            type="button"
            className="font-bold text-sm text-start hover:text-blue-600"
            onClick={(e) => {
                e.preventDefault();
                document.getElementById(slugify(category.category))?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            {category.category}
        </button>
    )
}

export default ProductsCategory