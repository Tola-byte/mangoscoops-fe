export const Services = () => {
    return (
        <section className="p-8 bg-white">
            <h3 className="text-2xl font-bold text-center mb-6">Our Services</h3>
            <ul className="flex flex-wrap justify-center gap-6">
                {['Weekly Cleaning', 'One-Time Cleanups', 'Turf Deodorization'].map((service, index) => (
                    <li
                        key={index}
                        className="p-6 bg-green-100 rounded-lg shadow-md w-72 text-center text-lg"
                    >
                        {service}
                    </li>
                ))}
            </ul>
        </section>
    );
};
