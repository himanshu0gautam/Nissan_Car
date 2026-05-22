import React from "react";

const services = [
  {
    id: 1,
    title: "EXPLORE NEW MAGNITE",
    desc: "Nissan brings home the virtual area of experiencing Nissan cars and all their features in detail.",
    image:
      "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/Home/shopathome/images/2-MC-Shop@Home-Explore-600x337.jpg.ximg.l_3_h.smart.jpg",
    cta: "Know More",
  },
  {
    id: 2,
    title: "OWN A NISSAN",
    desc: "Find out instantly why you down build a blueprint vehicle with clear financing options.",
    image:
      "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/3-Nissan-@-Home---450x252-20F.jpg.ximg.l_3_h.smart.jpg",
    cta: "Book Now",
  },
  {
    id: 3,
    title: "ACCESSORIES",
    desc: "Accessories that redefine style and comfort. Maximize the performance of your new Nissan.",
    image:
      "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/1-Nissan-@-Home---450x252-20F.jpg.ximg.l_3_h.smart.jpg",
    cta: "View Accessories",
  },
  {
    id: 4,
    title: "SERVICE HUB",
    desc: "Nissan Remote Hub makes it easy to schedule service right at your preferred location with trained experts.",
    image:
      "https://www-asia.nissan-cdn.net/content/dam/Nissan/in/vehicles/gravite/overview/2-Nissan-@-Home---450x252-20F.jpg.ximg.l_3_h.smart.jpg",
    cta: "Book Service",
  },
];

export default function NissanHome() {
  return (
    <section className="pt-20 pb-7 px-4 max-w-6xl mx-auto bg-white border-t border-gray-100">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-medium tracking-wider text-black">
          Nissan@HOME
        </h2>
        <p className="text-[1rem] font-light text-gray-700 tracking-wide mt-4">
          Leave home the entire showroom experience utilizing Nissan.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <div key={service.id} className="flex flex-col justify-between group">
            <div>
              <div className="aspect-video w-full overflow-hidden bg-gray-50 mb-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <h3 className="text-[1.25rem] font-normal tracking-wider text-black mb-1 uppercase">
                {service.title}
              </h3>
              <p className="text-[1rem] text-gray-500 leading-relaxed font-light line-clamp-3 mb-4">
                {service.desc}
              </p>
            </div>

            <div>
              <a
                href={`#${service.cta.toLowerCase().replace(/\s+/g, "-")}`}
                className="inline-block text-[1rem] font-bold tracking-widest text-black uppercase border-b-2 border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors"
              >
                {service.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
