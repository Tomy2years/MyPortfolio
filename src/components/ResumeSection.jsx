// src/components/ResumeSection.jsx
import { ChatBot } from './Chatbot';
import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// --- CHANGE THIS SECTION ---
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export const ResumeSection = () => {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        const handleResize = () => {
            const container = document.getElementById('resume-container');
            if (container) {
                setWidth(container.offsetWidth - 20);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); 

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const LoadingState = () => (
        <div className="flex flex-col items-center justify-center h-full min-h-[400px] w-full text-gray-500 animate-pulse">
            <svg className="w-12 h-12 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p className="text-lg font-medium">Loading Resume...</p>
        </div>
    );

    return (
        <section id="resume" className="py-24 px-4 relative">
            {/* 1. CHANGED: Increased max-width to allow elements to grow wider */}
            <div className="container mx-auto max-w-[90rem]"> 
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Resume <span className="text-primary"> Section</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* LEFT: Resume */}
                    <div 
                        id="resume-container" 
                        /* 2. CHANGED: Increased Height to 800px */
                        className="w-full bg-white rounded-lg overflow-hidden shadow-lg flex justify-center items-start overflow-y-auto h-[600px] lg:h-[850px] scrollbar-thin scrollbar-thumb-gray-300"
                    >
                        <Document
                            file="/Tom_Resume.pdf" 
                            className="flex justify-center"
                            loading={<LoadingState />}
                            error={
                                <div className="flex items-center justify-center h-full text-red-500 p-10 text-center">
                                    Error loading PDF. Please try downloading it directly.
                                </div>
                            }
                        >
                            <Page 
                                pageNumber={1} 
                                /* 3. CHANGED: Increased the width cap from 600 to 1000 */
                                width={width > 1000 ? 1000 : width} 
                                renderTextLayer={false} 
                                renderAnnotationLayer={false}
                            />
                        </Document>
                    </div>

                    {/* RIGHT: AI Chatbot */}
                    {/* 4. CHANGED: Matched the new Height (800px) */}
                    <div className="w-full h-[600px] lg:h-[850px]">
                        <ChatBot />
                    </div>

                </div>

                <div className="flex justify-center mt-8">
                    <a 
                        href="/Tom_Resume.pdf" 
                        download="Tom_Perel_Resume.pdf"
                        className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-6 rounded-full transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download PDF
                    </a>
                </div>
            </div>
        </section>
    );
}