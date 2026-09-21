import React from "react";
import { Download, Award, CheckCircle } from "lucide-react";
import All_merged from "../assets/All_merged.pdf";
import Navbar from "../components/navbar/Navbar.jsx";
const Approvals = () => {
  // Replace this with your actual PDF path
  const pdfUrl = All_merged;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "CSR_Approval_Certificate.pdf";
    link.click();
  };

  return (
   <div className="mt-[56px]">
    <Navbar></Navbar>
     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Approval Badge */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-green-500">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Officially Registered for CSR Activities
              </h2>
              <p className="text-gray-600">
                Approved by the Ministry of Corporate Affairs, Government of
                India
              </p>
              <p className="text-sm text-gray-500 mt-2">
                CSR Registration Number:{" "}
                <span className="font-semibold text-green-700">
                  CSR00092200
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* PDF Upload and Viewer */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Approval Certificate
          </h3>

          {/* Action Button */}
          <div className="mb-6">
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              <Download className="w-5 h-5" />
              Download Certificate
            </button>
          </div>

          {/* PDF Viewer */}
          <div className="border-2 border-gray-300 rounded-lg overflow-hidden bg-gray-100">
            <iframe
              src={pdfUrl}
              className="w-full h-screen"
              title="Government Approval Certificate"
            />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Approvals;
