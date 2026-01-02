export default function Reader({ chapters, currentChapter, onBack }) {
  const chapter = chapters[currentChapter];

  if (!chapter) {
    return <p className="text-red-500">Chapter tidak ditemukan</p>;
  }

  const prevChapter = currentChapter > 0 ? currentChapter - 1 : null;
  const nextChapter = currentChapter < chapters.length - 1 ? currentChapter + 1 : null;

  return (
    <div className="flex flex-col gap-4">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="bg-gray-800 text-white px-4 py-2 rounded w-fit hover:bg-gray-700 transition"
      >
        ← Kembali
      </button>

      {/* Title */}
      <h1 className="text-2xl font-bold mb-4">{chapter.title}</h1>

      {/* Images */}
      <div className="flex flex-col gap-6">
        {chapter.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Page ${i + 1}`}
            className="w-full rounded-lg object-contain"
          />
        ))}
      </div>

      {/* Prev / Next Navigation */}
      <div className="flex justify-between mt-6 gap-2 flex-wrap">
        {prevChapter !== null ? (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" }) || currentChapter(prevChapter)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
          >
            ← Chapter Sebelumnya
          </button>
        ) : (
          <div className="flex-1"></div>
        )}

        {nextChapter !== null ? (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" }) || currentChapter(nextChapter)}
            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition text-center"
          >
            Chapter Berikutnya →
          </button>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
    </div>
  );
}

