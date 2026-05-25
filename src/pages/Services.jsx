import { FaCode, FaServer, FaDatabase, FaLayerGroup } from "react-icons/fa";

export default function Services() {
  const services = [
    { title: "Frontend", desc: "Building responsive, high-performance interfaces.", icon: <FaCode /> },
    { title: "Backend", desc: "Designing scalable server-side solutions.", icon: <FaServer /> },
    { title: "Database", desc: "Managing complex data with high reliability.", icon: <FaDatabase /> },
    { title: "Full Stack", desc: "Seamless end-to-end web applications.", icon: <FaLayerGroup /> }
  ];

  return (
    <section className="py-20 px-6 bg-slate-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">
            My <span className="text-cyan-400">Services</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-8 bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300"
            >
              <div className="text-4xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}