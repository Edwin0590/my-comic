import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Reader() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("chapters");
    if (saved) setChapters(JSON.parse(saved));
  }, []);

  const chapter = chapters[index];

  if (!chapter) {
    return <p className="text-red-500">Chapter tidak ditemukan</p>;
  }

  return (
    <div>
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
        ← Kembali
      </button>

      <h1 className="text-2xl font-bold mb-4">{chapter.title}</h1>

      <div className="space-y-6">
        {chapter.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="w-full rounded-lg"
          />
        ))}
      </div>
    </div>
  );
}