export default function Programs() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Link from 'next/link';

const ProgramsPage = () => {
  return (
    <>
      <Head>
        <title>Best Rated Private Elementary Schools Austin, TX | Programs</title>
        <meta name="description" content="Discover the top private elementary schools in Austin, TX and their programs." />
        <meta name="keywords" content="private elementary schools, Austin, TX, programs" />
      </Head>

      <header>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/programs">
                <a>Programs</a>
              </Link>
            </li>
            <li>
              <Link href="/admissions">
                <a>Admissions</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Our Programs</h1>
        <section>
          <h2>Elementary School Programs</h2>
          <ul>
            <li>
              <h3>Academic Programs</h3>
              <p>
                Our elementary school offers a comprehensive academic program that focuses on developing the skills and knowledge of our students in various subjects such as math, science, language arts, and social studies.
              </p>
            </li>
            <li>
              <h3>Arts and Music Programs</h3>
              <p>
                We have a rich arts and music program that encourages students to explore and develop their creativity through various activities such as painting, drawing, music, and theater.
              </p>
            </li>
            <li>
              <h3>Physical Education Programs</h3>
              <p>
                Our physical education program is designed to promote physical fitness, teamwork, and sportsmanship among our students through various activities such as soccer, basketball, and track and field.
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Special Programs</h2>
          <ul>
            <li>
              <h3>English Language Learner Program</h3>
              <p>
                We offer a comprehensive English language learner program that helps students who are non-native English speakers to develop their language skills and adapt to our school environment.
              </p>
            </li>
            <li>
              <h3>Gifted and Talented Program</h3>
              <p>
                Our gifted and talented program is designed to identify and nurture the talents and abilities of our students who demonstrate exceptional skills and abilities in various subjects.
              </p>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>&copy; 2024 Best Rated Private Elementary Schools Austin, TX. All rights reserved.</p>
      </footer>
    </>
  );
};

export default ProgramsPage;
```

This JSX code generates a basic layout for the programs page of the website. It includes a navigation menu, a main content area, and a footer section. The main content area is divided into two sections: one for elementary school programs and another for special programs. Each section lists the various programs offered by the school. Note that this is just a basic example and may need to be customized to fit the specific needs of your website.
    </section>
  );
}
