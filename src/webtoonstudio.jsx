import { useState, useEffect } from "react";
import Reader from "./Reader";
import ChapterList from "./ChapterList";
import Upload from "./Upload";

export default function WebtoonStudio() {
  const [chapters, setChapters] = useState([]);
  const [currentChapter, setCurrentChapter] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Load data dari localStorage saat pertama kali
  useEffect(() => {
    const savedChapters = localStorage.getItem("chapters");
    if (savedChapters) {
      setChapters(JSON.parse(savedChapters));
    }
  }, []);

  // Simpan ke localStorage setiap ada perubahan
  useEffect(() => {
    localStorage.setItem("chapters", JSON.stringify(chapters));
  }, [chapters]);

  const handleSaveChapter = (chapter) => {
    setChapters((prev) => [...prev, chapter]);
    setIsUploading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-black text-white px-6 py-4">
        <h1 className="text-2xl font-bold">Webtoon Studio</h1>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto p-4">
        {isUploading && (
          <Upload
            onSave={handleSaveChapter}
            onCancel={() => setIsUploading(false)}
          />
        )}

        {!isUploading && currentChapter !== null && (
          <Reader
            chapters={chapters}
            currentChapter={currentChapter}
            onBack={() => setCurrentChapter(null)}
          />
        )}

        {!isUploading && currentChapter === null && (
          <ChapterList
            chapters={chapters}
            onSelect={setCurrentChapter}
            onUpload={() => setIsUploading(true)}
          />
        )}
      </main>
    </div>
  );
}
