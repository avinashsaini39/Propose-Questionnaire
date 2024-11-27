import { motion } from 'framer-motion';

const PostQuestion = ({ onRestart }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
      <motion.div
        initial={{ scale: 1 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
        }}
        className="text-red-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-32 h-32"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </motion.div>
      <p className="mt-6 text-3xl font-bold text-pink-700">You can go now! 💖</p>
      {/* <button
        onClick={onRestart}
        className="mt-8 bg-pink-500 hover:bg-pink-600 text-white text-xl font-bold py-3 px-6 rounded-lg shadow-lg"
      >
        Restart
      </button> */}
    </div>
  );
};

export default PostQuestion;
