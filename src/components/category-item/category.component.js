import React from "react";
import "./category.component.scss";

export default function CategoryItem({ category }) {
    const { imageUrl, title, id } = category;
    return (
        <div key={id} className="category-container">
            <div style={{ backgroundImage: `url(${imageUrl})` }} className="background-image"></div>
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}