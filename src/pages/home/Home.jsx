import "./home.css"
import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import Footer from "../../components/footer/Footer"
import React from "react";
export default function Home() {
    return (
        <div className="home">
            <Header />
            <Posts />
            <Footer />
        </div>
    )
}
