import { motion } from "motion/react";

// Updated contact data
const CONTACT = {
  address: "123 Main Street, Downtown, Algiers, Algeria",
  phoneNo: "+213 555 123 456",
  email: "contact@ayoubbezai.site",
  github: "https://github.com/ayoubbb1235",
  linkedin: "https://linkedin.com/in/ayoubbezai",
  twitter: "https://twitter.com/ayoubbezai",
};

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center py-10 px-2 sm:px-4 lg:px-8 bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 min-h-[30vh] mt-10">
      <motion.h1
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: -60, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300 drop-shadow-lg"
      >
        Let's Connect
      </motion.h1>
      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.7 }}
        className="text-base md:text-lg text-center mb-6 text-gray-700 dark:text-gray-300 max-w-xl"
      >
        I’m always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out!
      </motion.p>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-md bg-white/70 dark:bg-gray-900/70 backdrop-blur-lg rounded-2xl shadow-xl p-6 flex flex-col gap-6 items-center border border-indigo-200 dark:border-indigo-700/40 ring-1 ring-indigo-100 dark:ring-indigo-900/30 hover:ring-4 hover:ring-indigo-300 dark:hover:ring-indigo-500 transition-all duration-300"
      >
        <div className="flex items-center gap-3 w-full">
          <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 12.414a2 2 0 00-2.828 0l-4.243 4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <span className="text-gray-900 dark:text-gray-100 text-base font-semibold tracking-wide">{CONTACT.address}</span>
        </div>
        <div className="flex items-center gap-3 w-full">
          <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M16 3v4a1 1 0 001 1h4" /></svg>
          <span className="text-gray-900 dark:text-gray-100 text-base font-semibold tracking-wide">{CONTACT.phoneNo}</span>
        </div>
        <div className="flex items-center gap-3 w-full">
          <svg className="w-6 h-6 text-indigo-500 dark:text-indigo-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm0 0v1a4 4 0 01-8 0v-1" /></svg>
          <a href={`mailto:${CONTACT.email}`} className="text-indigo-700 dark:text-indigo-200 underline text-base font-semibold hover:text-indigo-900 dark:hover:text-indigo-100 transition-colors">{CONTACT.email}</a>
        </div>
        <div className="flex gap-5 mt-2">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591zm0 0"/></svg>
          </a>
          <a href={CONTACT.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:scale-110 transition-transform">
            <svg className="w-7 h-7 text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195a4.92 4.92 0 00-8.384 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.247a4.904 4.904 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 010 21.543a13.94 13.94 0 007.548 2.212c9.057 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/></svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
