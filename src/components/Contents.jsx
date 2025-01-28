
export const WhyChoose = () => {
    const features = [
        {
            title: "Reliable, Hassle-Free Service",
            description:
                "Our team ensures timely, efficient visits, leaving your yard pristine. Enjoy more time with your pet-let us handle the mess!",
            icon: "✅",
        },
        {
            title: "Pet Safety",
            description:
                "We clean all of our equipment and shoes with a kennel-grade disinfectant after every cleanup, minimizing the spread of germs and illness.",
            icon: "🐶",
        },
        {
            title: "Satisfaction Guaranteed",
            description:
                "At Mango Scoopers, we guarantee your satisfaction with our pooper scooper service. If you're not happy, we'll make it right-your happiness is our priority",
            icon: "😊",
        },
        {
            title: "No Contracts",
            description:
                "Enjoy the freedom of our flexible services without being tied down by any contracts, giving you the flexibility to start or stop whenever you need.",
            icon: "📜",
        },
        {
            title: "Gate Photos",
            description:
                "You will receive a reassuring snapshot of your closed gate at the end of each service visit, giving you peace of mind as your furry friends return to their tidy yard.",
            icon: "📸",
        },
        {
            title: "Notification Texts",
            description:
                "We'll send you a notification text 60 minutes before we arrive and an email once the job is done, ensuring you're informed at every step of the process.",
            icon: "📩",
        },
    ];

    return (
        <section className="bg-gray-100 py-16 px-6 lg:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <h3 className="text-lg font-semibold text-gray-500 uppercase">
                    THE BEST IN GILBERT, ARIZONA
                </h3>
                <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    Why Choose <span className="text-green-600">Mango Scoopers</span>?
                </h2>
                <p className="mt-4 w-full md:w-2/3 m-auto text-gray-600">
                    When you hire Mango Scoopers as your pooper scooper company, you can be
                    confident you made the right decision with our 100% satisfaction guarantee.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                {features.map((feature, index) => (
                    <div key={index}
                        className="bg-white hover:scale-105 shadow-md p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 ease-in-out"
                        >
                        <div className="text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                        <p className="mt-2 text-gray-600">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

