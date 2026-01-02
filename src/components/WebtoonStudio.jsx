import { useState, useEffect } from "react";
import Reader from "./Reader";
import ChapterList from "./ChapterList";
import Upload from "./Upload";

export default function WebtoonStudio() {
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Load saved chapters
  useEffect(() => {
    const saved = localStorage.getItem("chapters");
    if (saved) setChapters(JSON.parse(saved));
  }, []);

  // Save chapters to localStorage
  useEffect(() => {
    localStorage.setItem("chapters", JSON.stringify(chapters));
  }, [chapters]);

  const handleSaveChapter = (chapter) => {
    setChapters([...chapters, chapter]);
    setUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header sticky */}
      <header className="bg-black text-white px-6 py-4 sticky top-0 z-50 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Webtoon Studio</h1>
        {!uploading && currentChapter === null && (
          <button
            onClick={() => setUploading(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded text-sm transition"
          >
            Upload Chapter
          </button>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto p-4 w-full">
        {/* Upload Section */}
        {uploading && (
          <Upload
            onSave={handleSaveChapter}
            onCancel={() => setUploading(false)}
          />
        )}

        {/* Reader Section */}
        {!uploading && currentChapter !== null && (
          <Reader
            chapters={chapters}
            currentChapter={currentChapter}
            onBack={() => setCurrentChapter(null)}
          />
        )}

        {/* Chapter List */}
        {!uploading && currentChapter === null && (
          <div className="flex flex-col gap-4">
            {chapters.length === 0 ? (
              <p className="text-gray-500 italic text-center py-6">
                Belum ada chapter, silakan upload.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {chapters.map((chapter, idx) => (
                  <div
                    key={idx}
                    onClick={() => setCurrentChapter(idx)}
                    className="bg-white p-4 rounded shadow-sm border cursor-pointer hover:shadow-md transition"
                  >
                    <h3 className="font-bold text-gray-800">{chapter.title}</h3>
                    <p className="text-sm text-gray-500 truncate">{chapter.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
