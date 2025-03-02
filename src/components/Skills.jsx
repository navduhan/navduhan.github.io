import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      title: "Genomic Data Analysis",
      desc: "Experience with NGS, RNA-Seq, and variant calling.",
    },
    {
      title: "Machine Learning",
      desc: "Applying ML models to biological datasets.",
    },
    {
      title: "Programming & Tools",
      desc: "Python, R, Bash, Bioconductor, and BioPython.",
    },
    {
      title: "Structural Bioinformatics",
      desc: "Molecular docking, protein modeling, and structural analysis.",
    },
    {
      title: "Systems Biology",
      desc: "Pathway analysis, network biology, and multi-omics integration.",
    },
    {
      title: "Computational Genomics",
      desc: "Genome assembly, annotation, and comparative genomics.",
    },
    {
      title: "Data Visualization",
      desc: "Creating biological data visualizations using R, Python, and ggplot.",
    },
    {
      title: "Phylogenetics",
      desc: "Phylogenetic tree construction and evolutionary analysis.",
    },
    {
      title: "Metagenomics",
      desc: "Microbiome analysis, taxonomic classification, and functional profiling.",
    },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="p-6 border border-sky-300  rounded-lg 
                     bg-white shadow-lg transition-all duration-300 ease-in-out 
                     hover:scale-105"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <motion.h3
            className="text-xl font-semibold bg-gradient-to-r from-teal-200 to-sky-300 text-gray-900 mb-2 rounded-2xl"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill.title}
          </motion.h3>
          <p className="text-sm text-gray-700 dark:text-gray-600">
            {skill.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;