
import MainLayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      {/* Section Deskripsi */}
      <div className="bg-white p-6 rounded shadow-sm border mb-6">
        <h1 className="text-xl font-bold border-b-2 border-blue-900 inline-block mb-4">Komiku</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          <span className="font-bold">Komiku</span> adalah situs baca komik, baca manga, baca manhua, 
          dan baca manhwa terpopuler dalam Bahasa Indonesia...
        </p>
      </div>

      {/* Section Lanjut Baca */}
      <div className="bg-white p-6 rounded shadow-sm border">
        <h2 className="text-xl font-bold mb-4">Lanjut Baca</h2>
        <p className="text-gray-400 text-sm italic mb-4">History kamu masih kosong.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded text-blue-700 font-medium cursor-pointer">History →</div>
          <div className="bg-blue-50 p-4 rounded text-blue-700 font-medium cursor-pointer">Bookmark →</div>
        </div>
      </div>
    </MainLayout>
  );
}