export default function About() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <Head>
        <title>About Us | Best Rated Private Elementary Schools Austin, TX</title>
        <meta name="description" content="Learn about our mission, values, and history at Best Rated Private Elementary Schools Austin, TX." />
        <meta name="keywords" content="private elementary schools, best rated, austin, tx" />
      </Head>

      <main className="container mx-auto p-4 pt-6 md:p-6">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <div className="bg-white rounded-lg shadow-lg">
              <Image src="/image-about.jpg" alt="About Us Image" width={800} height={600} className="object-cover w-full h-64" />
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/3 p-4">
            <p className="text-lg leading-relaxed mb-4">
              Welcome to Best Rated Private Elementary Schools Austin, TX, where we are dedicated to providing a high-quality education to our students. Our mission is to foster a love of learning, creativity, and critical thinking in a supportive and inclusive environment.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our school was founded on the principles of academic excellence, character development, and community engagement. We are committed to helping our students become responsible, compassionate, and confident individuals who are prepared to succeed in an ever-changing world.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              At Best Rated Private Elementary Schools Austin, TX, we believe that every child is unique and deserves a tailored education that meets their individual needs. Our experienced and dedicated teachers work closely with parents to create a personalized learning plan that fosters academic growth, social development, and emotional well-being.
            </p>
            <Link href="/our-mission" passHref>
              <a className="text-blue-600 hover:text-blue-800">Learn More About Our Mission</a>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
```
    </section>
  );
}
