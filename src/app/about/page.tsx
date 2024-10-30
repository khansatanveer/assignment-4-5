import Transition from "../component/transition";


export default function About() {
  return (
    <Transition>
    <div>
      <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center p-6">
        <div className="max-w-3xl bg-amber-100 shadow-md rounded-lg p-8">
          <h1 className="text-4xl font-extrabold text-black mb-4 text-center">
            About Vegetarian Food
          </h1>
          <p className="text-gray-700 text-lg mb-6">
            Vegetarian food refers to a diet that avoids meat, fish, and poultry. Instead, it emphasizes plant-based ingredients such as vegetables, fruits, grains, nuts, seeds, and legumes. This lifestyle promotes sustainable living and offers numerous health benefits.
          </p>
          <h2 className="text-2xl font-extrabold text-black mt-4 mb-2">
            Why Choose Vegetarian Food?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Improves heart health by lowering cholesterol and blood pressure.</li>
            <li>Reduces the risk of chronic diseases like diabetes and cancer.</li>
            <li>Promotes weight management and a healthy digestive system.</li>
            <li>Helps reduce environmental impact by conserving resources.</li>
          </ul>
          <h2 className="text-2xl font-extrabold text-black mt-6 mb-2">
            Types of Vegetarian Diets
          </h2>
          <p className="text-gray-700 mb-6">
            There are various types of vegetarian diets, such as:
          </p>
              <h3 className="font-extrabold text-black">Lacto-Vegetarian</h3>
              <p>Avoids meat, fish, and eggs but includes dairy products.</p>
            <br/>
              <h3 className="font-extrabold text-black">Ovo-Vegetarian</h3>
              <p>Avoids meat, fish, and dairy but allows eggs.</p>
            <br/>
              <h3 className="font-extrabold text-black">Lacto-Ovo Vegetarian</h3>
              <p>Excludes meat and fish but allows both dairy and eggs.</p>
            <br/>
              <h3 className="font-extrabold text-black">Vegan</h3>
              <p>Eliminates all animal products, including dairy, eggs, and honey.</p>
            </div>
          </div>
         
        
     </div>
     </Transition>
  );
}
