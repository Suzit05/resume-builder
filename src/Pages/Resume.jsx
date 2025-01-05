import React, { useContext, useRef } from "react";
import { FormContext } from "../Context/FormContext";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const Resume = () => { //npm install html2canvas, npm install jspdf ......for pdf printing (used package)
    const { formdata } = useContext(FormContext);
    const resumeRef = useRef()
    const DownloadHandler = () => {
        console.log("click on download handler")
        const element = document.querySelector("#resumeRef")
        console.log(element)
        html2canvas(element).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF("p", "mm", "a4");
            const imgWidth = 210; // A4 width in mm
            const pageHeight = 297; // A4 height in mm
            const imgHeight = (canvas.height * imgWidth) / canvas.width;
            let heightLeft = imgHeight;
            let position = 0;

            pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;

            while (heightLeft > 0) {
                position -= pageHeight;
                pdf.addPage();
                pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
            }

            pdf.save("resume.pdf");
        });
    }

    return (
        <div className="bg-gray-200 p-12 min-h-screen flex flex-col items-center justify-center">
            <div ref={resumeRef} id="resumeRef" className="bg-white shadow-lg rounded-lg p-8 w-full max-w-5xl">
                {/* Header */}
                <div className="border-b-4 border-gray-300 pb-6 mb-8">
                    <h1 className="text-4xl font-extrabold text-gray-900">
                        {formdata.personalDetails.firstName} {formdata.personalDetails.lastName}
                    </h1>
                    <p className="text-lg text-gray-600 mt-2">
                        {formdata.personalDetails.email} | {formdata.personalDetails.phonenumber}
                    </p>
                    <p className="text-lg text-gray-600 mt-1">
                        {formdata.personalDetails.website} | {formdata.personalDetails.linkedin} |{" "}
                        {formdata.personalDetails.github}
                    </p>
                </div>

                {/* Education */}
                <div className="mb-8 border-b-4 border-gray-300 pb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Education</h2>
                    <div className="flex justify-between">
                        <p className="text-xl font-semibold text-gray-700">
                            {formdata.educationalDetails.collegeName}
                        </p>
                        <p className="text-lg text-gray-600">
                            {formdata.educationalDetails.startYear} - {formdata.educationalDetails.endYear}
                        </p>
                    </div>
                    <p className="text-lg text-gray-600 mt-1">
                        Qualification: {formdata.educationalDetails.clgQualification}
                    </p>
                    <p className="text-lg text-gray-600">CGPA: {formdata.educationalDetails.clgCgpa}</p>

                    <div className="mt-6 flex justify-between">
                        <p className="text-xl font-semibold text-gray-700">
                            {formdata.educationalDetails.schoolName}
                        </p>
                        <p className="text-lg text-gray-600">{formdata.educationalDetails.schoolPassYear}</p>
                    </div>
                    <p className="text-lg text-gray-600 mt-1">
                        Qualification: {formdata.educationalDetails.schoolQualification}
                    </p>
                    <p className="text-lg text-gray-600">CGPA: {formdata.educationalDetails.schoolCgpa}</p>
                </div>

                {/* Projects */}
                <div className="mb-8 border-b-4 border-gray-300 pb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Projects</h2>
                    <ul className="list-disc pl-6 space-y-4">
                        {[1, 2, 3].map((index) => (
                            <li key={index}>
                                <div className="flex justify-between">
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        {formdata.projects[`title${index}`]}
                                    </h3>
                                    <a
                                        href={formdata.projects[`link${index}`]}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-lg text-blue-600"
                                    >
                                        {formdata.projects[`link${index}`]}
                                    </a>
                                </div>
                                <p className="text-lg text-gray-700 mt-2">
                                    {formdata.projects[`description${index}`]}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Experience */}
                <div className="mb-8 border-b-4 border-gray-300 pb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Experience</h2>
                    <ul className="list-disc pl-6 space-y-4">
                        {[1, 2].map((index) => (
                            <li key={index}>
                                <div className="flex justify-between">
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        {formdata.experience[`organization${index}`]}
                                    </h3>
                                    <p className="text-lg text-gray-600">
                                        {formdata.experience[`duration${index}`]}
                                    </p>
                                </div>
                                <p className="text-lg text-gray-600 mt-1">
                                    {formdata.experience[`position${index}`]}
                                </p>
                                <p className="text-lg text-gray-700 mt-2">
                                    {formdata.experience[`description${index}`]}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Skills and Interests */}
                <div className=" pb-6">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Skills & Interests</h2>
                    <p className="text-lg text-gray-700">
                        <strong>Skills:</strong>{" "}
                        {[1, 2, 3, 4, 5]
                            .map((index) => formdata.extraDetails[`skills${index}`])
                            .filter((skill) => skill)
                            .join(", ")}
                    </p>
                    <p className="text-lg text-gray-700 mt-4">
                        <strong>Interests:</strong>{" "}
                        {[1, 2, 3, 4, 5]
                            .map((index) => formdata.extraDetails[`interest${index}`])
                            .filter((interest) => interest)
                            .join(", ")}
                    </p>
                </div>
            </div>

            <button onClick={DownloadHandler} className="bg-green-400 px-2 py-1 rounded-lg mt-4 font-mono text-white">Download Resume</button>
        </div>
    );
};

export default Resume;
