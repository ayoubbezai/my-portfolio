import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { X, ExternalLink, Globe, Tag } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
  type: "web" | "mobile" | "cyber security" | "ai" | "desktop";
  images?: string[] | null;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const images = project.images && project.images.length > 0 ? project.images : [project.image];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog 
        as="div" 
        className="relative z-50" 
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-300 dark:bg-black opacity-50 dark:opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-0 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel 
                className="w-[80vw] h-[90vh] transform overflow-hidden bg-white rounded-md dark:bg-gray-900 text-left align-middle shadow-2xl transition-all flex flex-col"
              >
                {/* Header - More compact */}
                <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20">
                        <Globe className="h-3 w-3 text-indigo-500" />
                        <span className="text-xs font-medium text-indigo-600 dark:text-indigo-400">
                          {project.type.toUpperCase()}
                        </span>
                      </div>
                      <Dialog.Title
                        as="h2"
                        className="text-lg md:text-xl font-bold text-gray-900 dark:text-white truncate"
                      >
                        {project.title}
                      </Dialog.Title>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 text-sm shadow-md"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span className="hidden md:inline">Visit Project</span>
                      <span className="md:hidden">Visit</span>
                    </motion.a>
                    
                    <button
                      onClick={onClose}
                      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                      aria-label="Close modal"
                    >
                      <X className="h-4 w-4 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                </div>

                {/* Main Content */}
                <div className=" flex-1 flex flex-col md:flex-row overflow-hidden">
                  {/* Left Panel - Project Details - Reduced size */}
                  <div className="md:w-1/5 lg:w-[30%] border-r border-gray-200 dark:border-gray-800 overflow-y-auto">
                    <div className="p-4 md:p-6 space-y-6">
                      {/* Description Section */}
                      <div className="space-y-3">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white">
                          Description
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies Section */}
                      <div className="space-y-3">
                        <h3 className="text-base font-bold text-gray-900 dark:text-white flex items-center gap-2">
                          <Tag className="h-4 w-4" />
                          Technologies
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel - Images Gallery */}
                  <div className="md:w-4/5 lg:w-[70%] overflow-hidden flex flex-col">
                    {/* All Images List - Scrollable */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {images.map((image, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700"
                        >
                          <div className="relative aspect-video bg-gray-100 dark:bg-gray-800">
                            <img
                              src={image}
                              alt={`${project.title} - Image ${index + 1}`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          
                          <div className="absolute bottom-2 left-2">
                            <div className="text-xs text-white bg-black/70 backdrop-blur-sm px-2 py-1 rounded">
                              Image {index + 1}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal;