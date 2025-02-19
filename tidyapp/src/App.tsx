import "./index.css";
import { useState, useEffect } from "react";
import { FolderCheck, Copy, MoveRight } from "lucide-react";
import img from "./assets/woman.jpeg";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

function App() {
  const [visibleElements, setVisibleElements] = useState(new Array(12).fill(false));
  useEffect(() => {
    const timeouts = visibleElements.map((_, index) =>
      setTimeout(() => {
        setVisibleElements((prev) => {
          const newElements = [...prev];
          newElements[index] = true;
          return newElements;
        });
      }, (index + 1) * 1000)
    );
    return () => {
      timeouts.forEach(clearTimeout);
    };
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Copied to clipboard");
    });
  };

  return (
    <div className="h-full w-full pt-40">
      <div className="max-w-xl mx-auto flex flex-col items-center ml-5 mr-5 sm:max-w-xl sm:mx-auto sm:flex sm:flex-col sm:items-center">
        <FolderCheck size={64} />
        <h1 className="font-bold text-5xl">Tidyup</h1>
        <p className="text-neutral-800 text-lg text-center mt-5">
          A simple CLI tool to organize your folders and files.
        </p>
        <div className="space-x-2 mt-3 sm:space-x-4 flex flex-row justify-center">
          <button className="py-1 px-8 bg-neutral-900 rounded-md text-white hover:bg-neutral-800 sm:py-1 sm:px-8 sm:bg-neutral-900 sm:rounded-md sm:text-white sm:hover:bg-neutral-800">
            Npm Package
          </button>
          <button className="py-2 px-8 border-2 rounded-md hover:bg-gray-100 mt-2 sm:py-2 sm:px-8 sm:border-2 sm:rounded-md sm:hover:bg-gray-100">Github</button>
        </div>

        <div className="w-full mt-28 flex flex-col gap-20">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Installation</h2>
            <div className="h-12 border rounded-md bg-gray-50 px-4 relative flex justify-between items-center ">
              <span className="text-black">npm install -g tidyup</span>
              <button
                onClick={() => copyToClipboard("npm install -g tidyup")}
                className="bg-white text-slate-900 rounded-md px-2 py-2 border"
              >
                <Copy size={16} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold">Usage</h2>
            <div className="border rounded-md bg-gradient px-4 py-4 bg-gray-55 min-h-[300px] max-h-[400px] w-full overflow-y-auto overflow-x-hidden">
              <div className="flex items-center space-x-1 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              {visibleElements[0] && (
                <div className="flex items-center space-x-1">
                  <span className="font-bold text-green-500">
                    <MoveRight size={16} />
                  </span>
                  <span className="font-bold text-green-500 text-sm">Downloads </span>
                  <span className="text-primary ml-2 font-bold text-sm"> tidyup .</span>
                </div>
              )}
              <ul className="mt-4">
                {visibleElements[1] && (
                  <li className="text-sm">🔍 Scanning directory...</li>
                )}
                {visibleElements[2] && (
                  <li className="text-sm">📦 Found 127 files</li>
                )}
                {visibleElements[3] && (
                  <li className="text-sm">🎯 Organizing files by type...</li>
                )}
                {visibleElements[4] && (
                  <li className="text-sm">✨ Created categories:</li>
                )}
              </ul>

              <ul className="ml-4 ">
                {visibleElements[6] && (
                  <li className="text-sm">📸 Images (43 files)</li>
                )}
                {visibleElements[7] && (
                  <li className="text-sm">📄 Documents (35 files)</li>
                )}
                {visibleElements[8] && (
                  <li className="text-sm">🎵 Audio (22 files)</li>
                )}
                {visibleElements[9] && (
                  <li className="text-sm">🎬 Video (15 files)</li>
                )}
                {visibleElements[10] && (
                  <li className="text-sm">💾 Archives (12 files)</li>
                )}
                {visibleElements[11] && (
                  <li className="text-sm">
                  ✅ All done! Your files are now organized.
                </li>
                )}
              </ul>
            </div>

            <div className="border-t py-8 mt-40 mx-auto max-w-xl w-full items-center flex flex-col sm:border-t sm:py-8 sm:mt-40 sm:mx-auto sm:max-w-xl sm:w-full sm:items-center sm:flex sm:flex-row sm:justify-between">
              <p className="flex items-center space-x-2 ">
                <img
                  src={img}
                  alt="woman image"
                  className="rounded-full mr-2 overflow-hidden h-9 w-10 sm:h-10 sm:w-15 sm:rounded-full sm:mr-2 sm:overflow-hidden"
                />
                by
                <a href="" className="font-bold">
                  Kwaham Grace
                </a>
              </p>
              <p className="mt-5 sm:mt-0">
                Design inspired by{" "}
                <a href="" className="font-bold">
                  Sonner
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
