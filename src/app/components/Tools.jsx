import { motion } from 'motion/react';
import { useInView } from '../hooks/useInView';

export default function Tools() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const tools = [
    { name: 'VS Code', color: 'from-blue-400 to-blue-600' },
    { name: 'Figma', color: 'from-purple-400 to-purple-600' },
    { name: 'Chrome DevTools', color: 'from-red-400 to-red-600' },
    { name: 'Postman', color: 'from-orange-400 to-orange-600' },
    { name: 'GitHub', color: 'from-gray-600 to-gray-800' },
    { name: 'Notion', color: 'from-gray-400 to-gray-600' },
    { name: 'Slack', color: 'from-purple-500 to-pink-500' },
    { name: 'Jira', color: 'from-blue-500 to-cyan-500' },
    { name: 'Vercel', color: 'from-black to-gray-700' },
    { name: 'Netlify', color: 'from-teal-400 to-cyan-500' },
    { name: 'Firebase', color: 'from-yellow-400 to-orange-500' },
    { name: 'Adobe XD', color: 'from-pink-500 to-purple-600' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tools I Use
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            My daily toolkit for designing, developing, and deploying applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className={`relative group cursor-pointer`}
            >
              <div className={`bg-gradient-to-br ${tool.color} p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300`}>
                <div className="aspect-square flex items-center justify-center">
                  <span className="text-white font-bold text-center text-sm">
                    {tool.name}
                  </span>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
