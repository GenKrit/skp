import React, { useEffect, useState } from 'react'
import FeatureCard from "../../components/FeatureCard";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products/categories");
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("Error fetching categories:", error);
                setError(error.message);
            }
        };

        fetchCategories();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (categories.length === 0) {
        return <div>Loading ....</div>;
    }

    return (
        <FeatureCard Cards={categories} />
    )
}

export default Categories;
