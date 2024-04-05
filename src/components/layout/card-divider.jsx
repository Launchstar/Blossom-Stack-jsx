import React from 'react';
import Card from "../card.jsx";

const CardDivider = () => {
    const displayTitle = "Simple Static Layout, No unnecessary boilerplate.";
    const displayDescription = "See projects made with the Blossom Stack.";

    return (
        <div className="min-h-screen bg-base-200 flex flex-col justify-center items-center">
            {/* Header content */}
            <div className="text-center mb-8">
                <h1 className="text-5xl font-bold">{displayTitle}</h1>
                <p className="py-6">{displayDescription}</p>
            </div>

            {/* Cards container */}
            <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/3 px-4 mb-4">
                    <Card
                        toolName="Project 1"
                        contentType="Tutorial"
                        toolDescription="A simple project to get started."
                        primaryCategory="Beginner"
                        layer="Frontend"
                    />
                </div>
                {/* Add two more cards */}
                <div className="w-full md:w-1/3 px-4 mb-4">
                    <Card
                        toolName="Project 2"
                        contentType="Tutorial"
                        toolDescription="Another project for learning."
                        primaryCategory="Intermediate"
                        layer="Backend"
                    />
                </div>
                <div className="w-full md:w-1/3 px-4 mb-4">
                    <Card
                        toolName="Project 3"
                        contentType="Tutorial"
                        toolDescription="Advanced project for experts."
                        primaryCategory="Advanced"
                        layer="Fullstack"
                    />
                </div>
            </div>
        </div>
    );
};

export default CardDivider;
