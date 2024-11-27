// import { useState, useRef } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
// import Footer from './Footer';

// const questions = [
//   "Agar hum dono thodi der ke liye coffee pe jaayein, toh tumhara response kya hoga?",
//   "Kya tumhe lagta hai ki hum dono ek acche couple banenge?",
//   "Mujhe tumhara saath bahut pasand hai, tumhe kaisa lagta hai?",
//   "Agar hum dono ko kuch waqt mile, toh kya tumhare liye humari chemistry kaafi hai? 💖",
//   "Kya tumhare liye yeh baatein hum dono ke beech aur important ho gayi hain?"
// ];

// const LoveQuestionnaire = () => {
//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [noPosition, setNoPosition] = useState({ x: 150, y: 0 }); // Start offset to avoid overlap
//   const buttonRef = useRef(null);
//   const containerRef = useRef(null);

//   const handleYesClick = () => {
//     if (currentQuestionIndex < questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     }
//   };

//   const handleMouseMove = (e) => {
//     const button = buttonRef.current;
//     const container = containerRef.current;
//     if (!button || !container) return;

//     const buttonRect = button.getBoundingClientRect();
//     const containerRect = container.getBoundingClientRect();

//     const distanceX = e.clientX - (buttonRect.left + buttonRect.width / 2);
//     const distanceY = e.clientY - (buttonRect.top + buttonRect.height / 2);
//     const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

//     if (distance < 100) {
//       // Constrain position within container boundaries
//       const maxX = (containerRect.width / 2) - (buttonRect.width / 2);
//       const maxY = (containerRect.height / 2) - (buttonRect.height / 2);

//       const randomX = Math.random() * maxX * 2 - maxX;
//       const randomY = Math.random() * maxY * 2 - maxY;

//       setNoPosition({ x: randomX, y: randomY });
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       <div
//         ref={containerRef}
//         className="flex-grow flex flex-col items-center justify-center bg-pink-100 p-6 relative overflow-hidden"
//         onMouseMove={handleMouseMove}
//       >
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={currentQuestionIndex}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.5 }}
//             className="text-center text-4xl font-bold text-pink-700 mb-16"
//           >
//             {questions[currentQuestionIndex]}
//           </motion.div>
//         </AnimatePresence>
  
//         <div className="flex gap-20 relative mt-4">
//           <button
//             onClick={handleYesClick}
//             className="bg-pink-500 hover:bg-pink-600 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-110"
//           >
//             Yes
//           </button>
  
//           <motion.button
//             ref={buttonRef}
//             animate={{ x: noPosition.x, y: noPosition.y }}
//             className="bg-gray-300 text-gray-700 text-2xl font-bold py-4 px-8 rounded-lg shadow-lg cursor-default"
//             transition={{ type: "spring", stiffness: 300, damping: 20 }}
//             style={{ position: 'absolute' }}
//           >
//             No
//           </motion.button>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default LoveQuestionnaire;




import { useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Footer from './Footer';
import PostQuestion from './PostQuestion';
import BackgroundAudio from './BackgroundAudio';

const questions = [
  "Agar hum dono thodi der ke liye coffee pe jaayein, toh tumhara response kya hoga?",
  "Kya tumhe lagta hai ki hum dono ek acche couple banenge?",
  "Mujhe tumhara saath bahut pasand hai, kya tumhe bhi acha lagta hai mere sath?",
  "Agar hum dono ko kuch waqt mile, toh kya tum mujhe or jaanna chahogi? 💖",
  "Kya tumhare liye yeh baatein hum dono ke beech important hai?"
];

const LoveQuestionnaire = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [noPosition, setNoPosition] = useState({ x: 150, y: 0 });
  const [isFinished, setIsFinished] = useState(false); // To track completion
  const buttonRef = useRef(null);
  const containerRef = useRef(null);

  const handleYesClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleMouseMove = (e) => {
    const button = buttonRef.current;
    const container = containerRef.current;
    if (!button || !container) return;

    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const distanceX = e.clientX - (buttonRect.left + buttonRect.width / 2);
    const distanceY = e.clientY - (buttonRect.top + buttonRect.height / 2);
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    if (distance < 100) {
      const maxX = (containerRect.width / 2) - (buttonRect.width / 2);
      const maxY = (containerRect.height / 2) - (buttonRect.height / 2);

      const randomX = Math.random() * maxX * 2 - maxX;
      const randomY = Math.random() * maxY * 2 - maxY;

      setNoPosition({ x: randomX, y: randomY });
    }
  };

  if (isFinished) {
    return <PostQuestion onRestart={() => setIsFinished(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
    {/* <BackgroundAudio/> */}

      <div
        ref={containerRef}
        className="flex-grow flex flex-col items-center justify-center bg-pink-100 p-6 relative overflow-hidden"
        onMouseMove={handleMouseMove}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center text-4xl font-bold text-pink-700 mb-16"
          >
            {questions[currentQuestionIndex]}
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-20 relative mt-4">
          <button
            onClick={handleYesClick}
            className="bg-pink-500 hover:bg-pink-600 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-110"
          >
            Yes
          </button>

          <motion.button
            ref={buttonRef}
            animate={{ x: noPosition.x, y: noPosition.y }}
            className="bg-gray-300 text-gray-700 text-2xl font-bold py-4 px-8 rounded-lg shadow-lg cursor-default"
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{ position: 'absolute' }}
          >
            No
          </motion.button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoveQuestionnaire;
