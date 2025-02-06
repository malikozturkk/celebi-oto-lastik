import ContactPage from "@/components/ContactPage";
import { contactMetadata } from "@/metadata/contactMetadata";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = contactMetadata;

export default function Contact() {
    return (
        <div className="flex flex-col gap-16">
            <ContactPage />
        </div>
    )
}