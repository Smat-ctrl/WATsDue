import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

const structuredData = {
"@context": "https://schema.org",
"@type": "SoftwareApplication",
name: "WATsDue",
applicationCategory: "EducationalApplication",
operatingSystem: "Web",
description:
"WATsDue helps University students such as University of Waterloo students import course outlines, extract due dates and exams, organize academic deadlines, and detect schedule conflicts.",
creator: {
"@type": "Person",
name: "Samuel Mathew",
},
audience: {
"@type": "EducationalAudience",
educationalRole: "student",
},
};

export const metadata: Metadata = {
metadataBase: new URL("https://watsdue.com"),
title: {
default: "WATsDue | Waterloo Course Deadline & Syllabus Planner",
template: "%s | WATsDue",
},
description:
"WATsDue helps University of Waterloo students turn course outlines and syllabi into a clean academic calendar with due dates, exams, reminders, and conflict detection.",
keywords: [
"WATsDue",
"Waterloo course planner",
"University of Waterloo deadlines",
"UW syllabus planner",
"course outline calendar",
"student deadline tracker",
"assignment due date tracker",
"exam conflict checker",
"academic calendar app",
"AI syllabus parser",
],
authors: [{ name: "Samuel Mathew" }],
creator: "Samuel Mathew",
publisher: "WATsDue",
applicationName: "WATsDue",
category: "Education",
robots: {
index: true,
follow: true,
},
openGraph: {
title: "WATsDue | Waterloo Course Deadline & Syllabus Planner",
description:
"Import Waterloo course outlines, detect assignments and exams, organize due dates, and spot schedule conflicts in one clean academic calendar.",
url: "https://watsdue.com",
siteName: "WATsDue",
type: "website",
locale: "en_CA",
},
twitter: {
card: "summary_large_image",
title: "WATsDue | Waterloo Course Deadline & Syllabus Planner",
description:
"Turn Waterloo course outlines into a clean academic calendar with deadlines, exams, reminders, and conflict detection.",
},
};

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
return (
<html
lang="en-CA"
className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
> <body className="min-h-full flex flex-col">
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify(structuredData),
}}
/>
{children} </body> </html>
);
}
