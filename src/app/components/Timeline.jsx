import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Rocket } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Timeline() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const timelineData = [
    {
      icon: GraduationCap,
      title: 'Started College',
      company: 'University Name',
      period: '2018 - 2022',
      description: 'Pursued Computer Science degree with focus on web development and software engineering.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Briefcase,
      title: 'Frontend Developer Intern',
      company: 'Tech Company Inc.',
      period: '2021 - 2022',
      description: 'Worked on building responsive web applications using React and modern frontend technologies.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Rocket,
      title: 'Frontend Developer',
      company: 'Current Company',
      period: '2022 - Present',
      description: 'Leading frontend development projects, mentoring junior developers, and implementing cutting-edge solutions.',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From student to professional frontend developer
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow"
                    >
                      <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-3 bg-gradient-to-r ${item.color} text-white`}>
                        {item.period}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-blue-600 font-medium mb-3">{item.company}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  </div>

                  {/* Icon */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className={`w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="text-white" size={28} />
                    </motion.div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="md:hidden flex items-center justify-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="text-white" size={24} />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
