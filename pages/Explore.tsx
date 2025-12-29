
import React from 'react';

const Explore: React.FC = () => {
    return (
        <section className="py-24">
            <div className="max-w-4xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="font-script text-5xl mb-4 text-theme-text">Explore</h2>
                    <p className="font-serif text-lg text-theme-text/80 max-w-2xl mx-auto">
                        We love this area and hope you enjoy it too! Here are some of our favorite things to do.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">

                    {/* Activities */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl text-theme-accent border-b border-theme-accent/20 pb-2">Activities</h3>
                        <ul className="space-y-3 font-sans text-sm tracking-wide text-theme-text/80">
                            <li>Explore Greenwich Avenue</li>
                            <li>Bruce Museum</li>
                            <li>Explore Rye Village</li>
                            <li>Rye Playland Beach</li>
                        </ul>
                    </div>

                    {/* Hiking/Trails */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl text-theme-accent border-b border-theme-accent/20 pb-2">Hiking/Trails</h3>
                        <ul className="space-y-3 font-sans text-sm tracking-wide text-theme-text/80">
                            <li>Babcock Preserve Loop</li>
                            <li>Greenwich Audubon Center Trail</li>
                            <li>Bruce Park Loop</li>
                            <li>Foundation House</li>
                        </ul>
                    </div>

                    {/* Restaurants */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl text-theme-accent border-b border-theme-accent/20 pb-2">Restaurants</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-semibold text-theme-text mb-2">Breakfast</h4>
                                <ul className="space-y-2 font-sans text-sm tracking-wide text-theme-text/80">
                                    <li>The Kneaded Bread</li>
                                    <li>Cfcf Coffee</li>
                                    <li>Maman</li>
                                    <li>The Granola Bar</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold text-theme-text mb-2">Lunch/Dinner</h4>
                                <ul className="space-y-2 font-sans text-sm tracking-wide text-theme-text/80">
                                    <li>The Ginger Man</li>
                                    <li>Moli</li>
                                    <li>Little Pub Greenwich</li>
                                    <li>Terra Ristorante Italiano</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Golf */}
                    <div className="space-y-6">
                        <h3 className="font-serif text-2xl text-theme-accent border-b border-theme-accent/20 pb-2">Golf Courses</h3>
                        <ul className="space-y-3 font-sans text-sm tracking-wide text-theme-text/80">
                            <li>TBD</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Explore;
