// components/CertificatesSection.jsx
import { useState } from "react";

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl: string;
}

const Certificate = ({
  title,
  issuer,
  date,
  image,
  credentialUrl,
}: Certificate) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="h-48 overflow-hidden bg-gray-100">
          {image ? (
            <img
              src={image}
              alt={`${title} certificate`}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
              <img
                src="/api/placeholder/320/200"
                alt="Certificate placeholder"
                className="w-2/3 opacity-50"
              />
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-bold text-lg mb-1 text-gray-800">{title}</h3>
          <p className="text-gray-600 mb-2">{issuer}</p>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">{date}</span>
            <span className="text-sm text-blue-600">View Details</span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className=" rounded-lg max-w-xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-500 hover:text-gray-800"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <p className="text-lg text-gray-700 mb-1">{issuer}</p>
                <p className="text-gray-600">Issued: {date}</p>
              </div>

              <div className="mb-6">
                {image ? (
                  <img
                    src={image}
                    alt={`${title} certificate`}
                    className="w-full rounded-lg"
                  />
                ) : (
                  <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <img
                      src="/api/placeholder/560/320"
                      alt="Certificate placeholder"
                      className="w-2/3 opacity-50"
                    />
                  </div>
                )}
              </div>

              {credentialUrl && (
                <div className="flex justify-center">
                  <a
                    href={credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-6 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Verify Credential
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const CertificatesSection = () => {
  const certificates = [
    {
      title: "Python for Data Science Specialization",
      issuer: "IBM",
      date: "November 2023",
      image: "/api/placeholder/400/300", // Replace with actual image path
      credentialUrl: "https://www.credential-url.com/verify/123456",
    },
    {
      title: "Advanced SQL for Data Analysis",
      issuer: "PostgreSQL University",
      date: "August 2023",
      image: "/api/placeholder/400/300", // Replace with actual image path
      credentialUrl: "https://www.credential-url.com/verify/789012",
    },
    {
      title: "Linux Administration Professional",
      issuer: "Red Hat",
      date: "May 2023",
      image: "/api/placeholder/400/300", // Replace with actual image path
      credentialUrl: "https://www.credential-url.com/verify/345678",
    },
    {
      title: "Data Science Research Methods",
      issuer: "MIT Online",
      date: "February 2023",
      image: "/api/placeholder/400/300", // Replace with actual image path
      credentialUrl: "https://www.credential-url.com/verify/901234",
    },
    {
      title: "Technical Documentation Specialist",
      issuer: "Technical Writing Institute",
      date: "October 2022",
      image: "/api/placeholder/400/300", // Replace with actual image path
      credentialUrl: "https://www.credential-url.com/verify/567890",
    },
  ];

  return (
    <section id="certificates" className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Professional Certifications
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I am committed to continuous learning and professional development.
            These certifications represent my dedication to mastering the latest
            technologies and methodologies in my field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <Certificate
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              image={cert.image}
              credentialUrl={cert.credentialUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
