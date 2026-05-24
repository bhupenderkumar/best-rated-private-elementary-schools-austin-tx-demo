export default function Download() {
  return (
    <section className="section">
      ```jsx
// pages/download.js

import Head from 'next/head';

function DownloadPage() {
  return (
    <>
      <Head>
        <title>Download | Best Rated Private Elementary Schools Austin, TX</title>
        <meta name="description" content="Download resources from Best Rated Private Elementary Schools Austin, TX" />
      </Head>

      <main className="container mx-auto p-4 pt-6">
        <h1 className="text-3xl font-bold mb-4">Download Resources</h1>

        <div className="bg-white rounded shadow-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">School Brochure</h2>
          <p>
            Get a copy of our school brochure to learn more about our curriculum, facilities, and extracurricular activities.
          </p>
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Brochure
          </a>
        </div>

        <div className="bg-white rounded shadow-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">Application Form</h2>
          <p>
            Fill out our application form to apply for admission to Best Rated Private Elementary Schools Austin, TX.
          </p>
          <a
            href="/application-form.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download Application Form
          </a>
        </div>

        <div className="bg-white rounded shadow-md p-4 mb-4">
          <h2 className="text-xl font-bold mb-2">School Calendar</h2>
          <p>
            Get a copy of our school calendar to stay up-to-date on important dates and events.
          </p>
          <a
            href="/school-calendar.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Download School Calendar
          </a>
        </div>

        <p className="mt-4">
          If you have any questions or need more information, please contact us using our online contact form.
        </p>
      </main>
    </>
  );
}

export default DownloadPage;
```

This JSX code generates a download page for Best Rated Private Elementary Schools Austin, TX. The page includes links to download a school brochure, application form, and school calendar. The page also includes a message that invites users to contact the school using an online contact form.
    </section>
  );
}
