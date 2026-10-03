
import { useState } from "react";
import "./App.css"

const soal = [
  {
    pertanyaan: "HTML digunakan untuk apa?",
    pilihan: [
      "Membuat struktur website",
      "Mengatur database",
      "Membuat server",
      "Mengedit gambar",
    ],
    jawaban: "Membuat struktur website",
  },
  {
    pertanyaan: "CSS digunakan untuk apa?",
    pilihan: [
      "Membuat API",
      "Mengatur tampilan website",
      "Membuat database",
      "Mengatur server",
    ],
    jawaban: "Mengatur tampilan website",
  },
  {
    pertanyaan: "JavaScript digunakan untuk apa?",
    pilihan: [
      "Membuat website menjadi interaktif",
      "Membuat kabel jaringan",
      "Mengatur monitor",
      "Membuat file PDF",
    ],
    jawaban: "Membuat website menjadi interaktif",
  },
  {
    pertanyaan: "React adalah...",
    pilihan: [
      "Database",
      "Bahasa pemrograman",
      "Library JavaScript",
      "Sistem operasi",
    ],
    jawaban: "Library JavaScript",
  },
  {
    pertanyaan: "Hook React untuk menyimpan state adalah...",
    pilihan: [
      "useEffect",
      "useState",
      "useRef",
      "useMemo",
    ],
    jawaban: "useState",
  },
];

function App() {

  const [number, setNumber] = useState(0)
  const [pilihan, setPilihan] = useState(null)
  const [skor, setSkor] = useState(0)
  const [selesai, setSelesai] = useState(false)

  const pertanyaanSekarang = soal[number]

  function jawabPertanyaan() {

    if (pilihan === pertanyaanSekarang.jawaban) {
      setSkor(skor + 1)
    }


    if (number === soal.length - 1) {

      setSelesai(true)

    } else {

      setNumber(number + 1)

    }
  }

  function quizLagi() {

    setNumber(0)

    setSkor(0)

    setPilihan(null)

    setSelesai(false)
  }

  if (selesai) {
    return (
      <div className="quiz-container">
        <div className="quiz-card">

          <h2>Quiz Selesai 🎉</h2>

          <p>Skor : {skor} / {soal.length}</p>

          <button onClick={quizLagi}>Quiz Lagi</button>

        </div>
      </div>
    )
  }

  return (

    <div className="quiz-container">

      <div className="quiz-card">

        <p>Soal {number + 1} dari {soal.length}</p>

        <h2>{pertanyaanSekarang.pertanyaan}</h2>

        <div className="pilihan">
          {pertanyaanSekarang.pilihan.map((item) => (
            <button key={item} className={pilihan === item ? "aktif" : ""} onClick={() => setPilihan(item)}>
              {item}
            </button>
          ))}
        </div>

        <button className="jawab-btn" onClick={jawabPertanyaan}>
          Jawab
        </button>

      </div>
    </div>
  )
}

export default App;