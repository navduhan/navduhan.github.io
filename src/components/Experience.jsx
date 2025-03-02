import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const experiences = [
    {
      id: 1,
      title: "Research Associate III",
      description:
        "Conducting advanced AI-driven research to enhance computational models for bioinformatics and genomic data analysis. Developing deep learning frameworks for pattern recognition in biological sequences, optimizing machine learning algorithms for high-throughput sequencing data, and integrating multi-omics data to derive novel biological insights. Collaborating with interdisciplinary teams to publish findings in high-impact journals and contribute to grant proposals.",
      company: "South Dakota State University",
      companyLink: "https://www.sdstate.edu",
      time: "Nov 2023 - Present",
      address: "Brookings, SD, USA",
    },
    {
      id: 2,
      title: "Graduate Research Assistant",
      description:
        "Led multiple research projects focusing on deep learning and AI applications for large-scale biological data processing. Designed and implemented neural network architectures to analyze genomic and transcriptomic data, enhancing the accuracy of predictive models. Developed bioinformatics pipelines using Python and R for next-generation sequencing (NGS) analysis. Published peer-reviewed research and presented findings at international conferences.",
      company: "Utah State University",
      companyLink: "https://www.usu.edu",
      time: "Jan 2019 - Nov 2023",
      address: "Logan, UT, USA",
    },
    {
      id: 3,
      title: "Bioinformatician",
      description:
        "Designed and optimized computational workflows for genome analysis, focusing on agricultural research applications. Developed custom Python and Bash scripts for data preprocessing, variant calling, and transcriptomic analysis. Conducted differential gene expression analysis to identify key regulatory genes in crop improvement studies. Provided bioinformatics training to researchers and assisted in publishing results in scientific journals.",
      company: "Punjab Agricultural University",
      companyLink: "https://www.pau.edu",
      time: "Aug 2011 - Dec 2018",
      address: "Ludhiana, Punjab, India",
    },
    {
      id: 4,
      title: "Lecturer Bioinformatics",
      description:
        "Taught undergraduate courses in bioinformatics, computational biology, and biostatistics, covering topics such as sequence alignment, molecular modeling, and systems biology. Developed interactive course materials and guided students in research projects on bioinformatics applications in drug discovery. Organized workshops and seminars on emerging trends in computational biology and genomics.",
      company: "Guru Nanak Girls College",
      companyLink: "https://www.gngc.ac.in",
      time: "Jul 2010 - Aug 2011",
      address: "Ludhiana, Punjab, India",
    },
  ];

  return (
    <div className="my-32 max-w-6xl mx-auto px-4">
      <h2 className="font-bold text-6xl md:text-8xl mb-32 w-full text-center text-black dark:text-white">
        Experience
      </h2>

      <div ref={ref} className="relative w-full md:w-[75%] mx-auto">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-1 top-0 w-[3px] sm:left-4 md:left-9 h-full bg-blue-500 origin-top dark:bg-blue-400"
        />

        <div className="flex flex-col gap-y-6">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              className="w-full flex flex-col items-center"
            >
              <div
                className="group relative rounded-lg bg-white p-6 shadow-lg 
                              transition-all duration-300 ease-in-out hover:scale-105
                              border border-blue-500/50 dark:border-blue-800/20 
                              w-[80%]  flex flex-col justify-between"
              >
                <h3 className="font-bold text-2xl text-blue-600 dark:text-blue-400 mb-2">
                  {exp.title}&nbsp;
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    className="text-purple-500 hover:underline inline-block"
                    rel="noopener noreferrer"
                  >
                    @{exp.company}
                  </a>
                </h3>
                <span className="font-medium text-gray-600 dark:text-gray-400 block mb-4">
                  {exp.time} | {exp.address}
                </span>
                <p className="font-medium w-full text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
