import React from 'react';
import NavBar from "./components/NavBar";
import Product from "./components/cards/Product";
import Tochoose from "./components/Tochoose";
import { RxLayers } from "react-icons/rx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const Products = [
    {
      id: 1,
      name: "Renting Offices",
      image: "https://www.smow.com/pics/g/w/2064/smow-planungsthemen-moderne-bueros-planen-einzelbuero-usm.jpg",
      description:
        "Office tools are software applications designed to enhance productivity and streamline tasks in a professional setting. They typically include word processors, spreadsheets, presentation software, email clients, and database management systems",
    },
    {
      id: 2,
      name: "Coffee Shop",
      image: "https://assets.simpleviewinc.com/sv-park-city/image/upload/c_fill,f_jpg,h_512,q_65,w_640/v1/cms_resources/cms_resources/clients/parkcity-redesign/iStock_615829790_ea800f3a-a0a9-475c-99f8-997e8b843bf6.jpg",
      description:
        "A coffee shop is a place where people can relax, socialize, work, or simply enjoy a cup of coffee and other refreshments. They offer a variety of coffee drinks, pastries, and sometimes light meals.",
    },
    {
      id: 3,
      name: "Private event Space",
      image: "https://webneel.com/wallpaper/sites/default/files/images/08-2018/2-nature-wallpaper-grass.jpg",
      description:
        "A private event space is a dedicated area designed for hosting events such as parties, meetings, and conferences. These spaces often come with amenities like catering services, audio-visual equipment, and customizable layouts to suit various event needs.",
    },
  ];

  return (
    <>
      <div>
        <NavBar />
      </div>

      <section className="min-h-[50vh] md:min-h-[60vh] bg-[url('https://a0.muscache.com/im/pictures/hosting/Hosting-690627545233696257/original/23345c3a-927a-4d92-89ec-c2ff8349538a.jpeg')] bg-cover bg-center flex items-center justify-center text-white px-4">
        <div className="text-center text-white max-w-4xl w-full">
          <h2 className="text-lg md:text-xl lg:text-2xl font-light mb-2 tracking-wide">
            The Best WorkSpace in Kigali
          </h2>

          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
            <span className="block text-primary-50">Professional, Creative,</span>
            <div className="text-white text-2xl md:text-3xl lg:text-4xl">
            <span className="block text-primary-300">Flexible, Scalable </span>
            <span className="block text-[oklch(65%_0.23_180)]">Workspace</span>
            </div>
          </h1>

          <p className="text-sm md:text-base leading-relaxed text-gray-200 max-w-xl mx-auto mb-6 px-2">
            Discover your ideal workspace with us. Work smart, not hard in our fully-equipped office
            spaces. Elevate your business with flexible solutions tailored to your needs. Find your perfect
            office today!
          </p>

          <button className="bg-teal-400 hover:bg-primary-50 text-primary-30 font-semibold px-6 py-3 rounded shadow-md transition">
            Explore
          </button>
        </div>
      </section>

      {/* Products Section - Mobile responsive */}
      <div className="flex flex-col items-center text-center px-4 py-12 bg-gray-50">
        <span className="text-2xl md:text-3xl font-bold mb-4">We Offer Creative Working</span>
        <h2 className="text-base md:text-lg text-gray-600 max-w-xl mb-6 md:mb-8">
          From coworking spaces to meeting rooms and event venues, we provide dynamic environments for
          professionals, entrepreneurs, and teams to grow.
        </h2>

        {/* Mobile Layout - Single column stack */}
        <div className="md:hidden w-full max-w-md space-y-6">
          {Products.map((product) => (
            <Product 
              key={product.id} 
              name={product.name} 
              image={product.image} 
              description={product.description} 
              link={<a href="Learn More">Learn More</a>}
            />
          ))}
        </div>

        {/* Desktop Layout - Your EXACT original grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {Products.map((product) => (
            <Product 
            key={product.id
            } 
            name={product.name 
            } 
            image={product.image
            } 
            description={product.description
            } 
            link={<a href="Learn More">Learn More</a>}
            />
          ))}
        </div>
      </div>

       <div className="flex flex-col items-center text-center px-4 py-12 bg-gray-50">
       <div className="flex justify-center items-center gap-2 mb-6">
        <button type="button" className="h-4 w-4 md:h-6 md:w-6 rounded-full bg-teal-400 border border-primary-50"></button>
        <button type="button" className="h-4 w-4 md:h-6 md:w-6 rounded-full border border-primary-50"></button>
       </div>
     </div>

        {/* About Us Section - Mobile responsive */}
        <div className="bg-gray-50 py-8 md:py-12 px-4 md:px-6 lg:px-10">
          {/* Mobile Layout */}
          <div className="md:hidden text-center space-y-6">
            <div>
              <span className="text-base font-bold mb-4 text-teal-400 block">About Us</span>
              <div className="space-y-2">
                <h1 className="text-xl font-bold text-gray-800">We offer creative working</h1>
                <h2 className="text-xl font-bold text-gray-800">environments that suit your</h2>
                <h2 className="text-xl font-bold text-gray-800">business needs</h2>
              </div>
            </div>
            <div className="max-w-sm mx-auto">
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing elit torquent conubia leo rutrum praesent dui turpis lobortis vulputate pellentesque tristique primis cum tincidunt placerat maecenas velit metus fermentum eget
              </p>
              <p className="text-base font-bold text-teal-400">More About Us</p>
            </div>
          </div>

          {/* Desktop Layout - Your EXACT original code */}
          <div className="hidden md:flex justify-between items-start">
            <div className="bg-gray-50 py-12 px-4 pl-20">
              <span className="text-ls font-bold mb-4 text-teal-400">About Us</span>
              <h1 className="text-3xl font-bold text-black-600 max-w-xl">We offer creative working</h1>
              <h2 className="text-3xl font-bold text-black-600 max-w-xl">
                environments that suit your
              </h2>
              <h2 className="text-3xl font-bold text-black-600 max-w-xl">business needs</h2>
            </div>
            <div className="border-l-2 h-48 border-black-600 pb-5 ml-56"></div>
            <div></div>

           <div className="bg-gray-50 flex flex-wrap gap-4 mt-12 ml-auto max-w-xl text-right">
           <h1 className="text-sm text-black-600">Lorem ipsum dolor sit amet consectetur adipiscing elit torquent</h1>
           <h2 className="text-sm text-black-600">conubia leo rutrum praesent dui turpis lobortis vulputate pellentesque</h2>
           <h2 className="text-sm text-black-600">tristique primis cum tincidunt placerat maecenas velit metus fermentum eget</h2>
           <p className="text-ls font-bold mb-4 text-teal-400">More About Us</p>
          </div>
       </div>
   </div>
   
   <div className="text-base md:text-ls bg-gray-50 font-bold mb-4 text-teal-400 text-center">Your Benefits</div>
   <Tochoose /> 
   <Contact />
   <Footer />
    </>
  );
}

export default App;