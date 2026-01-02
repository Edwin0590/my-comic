import backIcon from "../assets/icons/back.svg";
import uploadIcon from "../assets/icons/upload.svg";

export default function ChapterList({ chapters, onSelect, onUpload }) {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <img src={backIcon} alt="Back" className="w-5 h-5" />
          Daftar Chapter
        </h2>

        <button
          onClick={onUpload}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          <img src={uploadIcon} alt="Upload" className="w-5 h-5" />
          Upload Chapter
        </button>
      </div>

      {/* List Chapters */}
      {chapters.length === 0 ? (
        <p className="text-gray-500 text-center py-6">Belum ada chapter</p>
      ) : (
        <ul className="space-y-2">
          {chapters.map((chapter, index) => (
            <li
              key={index}
              onClick={() => onSelect(index)}
              className="cursor-pointer bg-white p-4 rounded shadow hover:bg-gray-100 transition flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold">{chapter.title}</h3>
                <p className="text-sm text-gray-500">{chapter.images.length} halaman</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

