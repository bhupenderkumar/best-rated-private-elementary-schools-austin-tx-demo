export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Image from 'next/image';

function Programs() {
  return (
    <>
      <Head>
        <title>Programs - Best Rated Private Elementary Schools Austin, TX</title>
        <meta name="description" content="Discover our comprehensive programs at Best Rated Private Elementary Schools Austin, TX." />
      </Head>

      <main className="container mx-auto mt-16">
        <h1 className="text-3xl font-bold mb-8">Our Programs</h1>

        <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Academic Excellence Program</h2>
            <p className="mb-4">Our Academic Excellence Program is designed to foster a love of learning in our students.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">STEM Program</h2>
            <p className="mb-4">Our STEM Program provides students with a comprehensive education in science, technology, engineering, and math.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>

          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Arts Program</h2>
            <p className="mb-4">Our Arts Program offers students the opportunity to explore their creativity through music, art, and drama.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Learn More</button>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Additional Programs</h2>
          <ul className="list-disc ml-6">
            <li>After-school programs</li>
            <li>Summer camps</li>
            <li>Sports teams</li>
            <li>Clubs and organizations</li>
          </ul>
        </section>
      </main>

      <footer className="bg-gray-100 text-center p-4 mt-8">
        <p>&copy; 2023 Best Rated Private Elementary Schools Austin, TX. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Programs;
```

This JSX code generates a Next.js page component for the programs page of the Best Rated Private Elementary Schools Austin, TX website. The page features a grid layout with three program sections, each with a title, description, and a "Learn More" button. The page also includes a list of additional programs and a footer with copyright information.
    </section>
  );
}
