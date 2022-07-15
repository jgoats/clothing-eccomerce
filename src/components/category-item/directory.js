import React from "react";
import CategoryItem from "./category.component.js";
import "./category.component.scss";

export default function Directory({ categories }) {

    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>

    )
}
