"use client";
import { ServicesSection } from "../../components/ServiceSection";
import Header from "../../components/Header";


export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <ServicesSection />
        </div>
    )
}