import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-left">
          <h3>Hi! I am</h3>
          <h1>Muhammad Umer Khan</h1>
          <p>A proficient website developer and designer. My commitment to excellence ensures that I deliver premium services and products to my clients, meeting global standards while adhering to tight deadlines.</p>
          <Link href="/contact" className="btn">Contact Me</Link>
        </div>
        <div className="hero-right">
          <Image src="/ban.jpg" alt="image" width={300} height={200} />
        </div>
      </div>

      {/* About Me Section */}
      <div className="about-me-section">
        <h3>My Intro</h3>
        <h2>About Me</h2>
        <p>My expertise extends to various design tools, including Photoshop, Illustrator, and Figma. With these powerful tools, I create immersive and experiential projects that not only impress clients but also elevate brands to new heights by providing exceptional user experiences.</p>
        <p>If you're seeking a passionate and skilled professional who can bring your projects to life with unmatched expertise, don't hesitate to contact me for an interview. Let's turn your ideas into exceptional digital experiences!</p>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h3>My Services</h3>
        <h2>I Offer Best Services For You</h2>
        <div className="flex flex-wrap gap-4">
          <div className="card">
            <h3>Figma</h3>
            <p>Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.</p>
          </div>
          <div className="card">
            <h3>Web Design</h3>
            <p>Web design encompasses many different skills and disciplines in the production and maintenance of websites.</p>
          </div>
          <div className="card">
            <h3>Nodejs</h3>
            <p>Node.js is used to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="cta-section">
        <div className="cta-left">
          <h3>Have Any Project On Mind?</h3>
          <p>Let’s turn your ideas into reality! Share your vision, and we’ll bring it to life with creativity and precision.</p>
          <Link href="/contact" className="btn">Contact Me</Link>
        </div>
        <div className="cta-right">
          <Image src="/Image (3).png" alt="image" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
