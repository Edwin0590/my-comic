import { useState } from "react";

export default function Upload({
  onSave,
  onCancel,
}) {
  const [title, setTitle] = useState("");
  const [images, setImages] = useState([]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setImages(imageUrls);
  };

  const handleSubmit = () => {
    if (!title || images.length === 0) {
      alert("Judul dan gambar wajib diisi");
      return;
    }

    onSave({
      title,
      images,
    });
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        Upload Chapter
      </h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Judul Chapter"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {/* Images */}
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleImages}
        className="mb-4"
      />

      {/* Preview */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt=""
            className="rounded"
          />
        ))}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Simpan
        </button>

        <button
          onClick={onCancel}
          className="bg-gray-400 text-white px-4 py-2 rounded"
        >
          Batal
        </button>
      </div>
    </div>
  );
}
