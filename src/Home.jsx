
// import { useState, useEffect } from 'react';
// import Bloglist from './Bloglist';
// import useFetch from './useFetch';
// import './index.css';

// const Home = () => {
//   const { data: blogs, isPending, error } = useFetch(
//     'http://localhost:8000/blog'
//   );

//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       label: 'STORIES • IDEAS • KNOWLEDGE',
//       title: 'Discover Something Worth Reading',
//       text: 'Explore stories, ideas and knowledge from our blog.',
//     },
//     {
//       label: 'READ • LEARN • DISCOVER',
//       title: 'Ideas That Inspire',
//       text: 'Discover new perspectives and interesting stories.',
//     },
//     {
//       label: 'OUR LATEST STORIES',
//       title: 'Find Your Next Favorite Article',
//       text: 'Take a moment to explore our latest blogs.',
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 4500);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   return (
//     <div className="home">

//       {/* Banner */}

//       <section className="home-banner">

//         <div
//           className="home-banner-slide"
//           key={currentSlide}
//         >
//           <span className="home-banner-label">
//             {slides[currentSlide].label}
//           </span>

//           <h1>
//             {slides[currentSlide].title}
//           </h1>

//           <p>
//             {slides[currentSlide].text}
//           </p>
//         </div>

//         <div className="home-banner-dots">
//           {slides.map((_, index) => (
//             <button
//               key={index}
//               className={currentSlide === index ? 'active' : ''}
//               onClick={() => setCurrentSlide(index)}
//               aria-label={`Go to slide ${index + 1}`}
//             />
//           ))}
//         </div>

//       </section>


//       {/* Blogs */}

//       {error && <div>{error}</div>}

//       {isPending && <div>Loading ....</div>}

//       {blogs && (
//         <Bloglist
//           blogs={blogs}
//           title="All Blogs"
//         />
//       )}

//     </div>
//   );
// };

// // export default Home;

import { useState, useEffect } from 'react';
 import Bloglist from './Bloglist';
 import useFetch from './useFetch';


 const Home = () => {
   const {data :blogs , isPending,error}= useFetch('http://localhost:8000/blog');


  return (
    <div className="home">
       { error &&  <div> {error}</div>} 
      
       {isPending && <div>Loading .... </div>}
       {blogs && <Bloglist
      
         blogs={blogs}
        title="All Blogs"
         // handleDelete={handleDelete}
      />}
     </div>
  );
 }

 export default Home;