"use client";

import { useEffect } from "react";

export default function Page() {

    const fetchData = async () => {
        try {
            const response = await fetch("https://api.ynvara.com/v1");
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
        </>
    )
}