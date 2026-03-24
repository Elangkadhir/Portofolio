import { motion } from 'motion/react';
import { Code2, Palette, Smartphone, Zap } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'TypeScript', level: 85 }
      ]
    },
    {
      icon: Palette,
      title: 'Styling & Design',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'SASS/SCSS', level: 85 },
        { name: 'Material-UI', level: 80 },
        { name: 'Responsive Design', level: 95 }
      ]
    },
    {
      icon: Zap,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Vite', level: 85 },
        { name: 'Webpack', level: 75 },
        { name: 'NPM/Yarn', level: 90 }
      ]
    },
    {
      icon: Smartphone,
      title: 'State & APIs',
      skills: [
        { name: 'Redux/Context API', level: 85 },
        { name: 'REST APIs', level: 90 },
        { name: 'Axios/Fetch', level: 95 },
        { name: 'React Query', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-700">{skill.name}</span>
                        <span className="text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
