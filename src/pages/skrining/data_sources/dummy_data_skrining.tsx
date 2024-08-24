const dataSkrining = [
    // Kluster Kesehatan
    {
        id: 1,
        judulSkrining: "Skrining Kesehatan Umum",
        jenisKluster: "Kesehatan",
        totalSoal: 10,
        totalNilaiInterpretasi: 80,
        dataSoal: [
            {
                judulSoal: "Apakah Anda memiliki riwayat penyakit kronis?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Tidak", "Ya, Diabetes", "Ya, Hipertensi", "Ya, Lainnya"],
            },
            {
                judulSoal: "Seberapa sering Anda berolahraga dalam seminggu?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "1-2 kali", "3-4 kali", "Lebih dari 4 kali"],
            },
            {
                judulSoal: "Apa jenis makanan yang sering Anda konsumsi?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Buah", "Sayur", "Daging", "Makanan Olahan"],
            },
            {
                judulSoal: "Bagaimana perasaan Anda saat ini?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 2,
        judulSkrining: "Skrining Kesehatan Jantung",
        jenisKluster: "Kesehatan",
        totalSoal: 12,
        totalNilaiInterpretasi: 85,
        dataSoal: [
            {
                judulSoal: "Apakah Anda merokok?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Kadang-kadang", "Sering"],
            },
            {
                judulSoal: "Seberapa sering Anda mengonsumsi makanan tinggi kolesterol?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Tidak Pernah", "Jarang", "Sering"],
            },
            {
                judulSoal: "Bagaimana perasaan Anda tentang kesehatan jantung Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 3,
        judulSkrining: "Skrining Diabetes",
        jenisKluster: "Kesehatan",
        totalSoal: 8,
        totalNilaiInterpretasi: 75,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda mengonsumsi makanan manis?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Kadang-kadang", "Sering"],
            },
            {
                judulSoal: "Apakah Anda rutin memeriksa kadar gula darah?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Ya", "Tidak"],
            },
            {
                judulSoal: "Bagaimana Anda mengelola diabetes Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 4,
        judulSkrining: "Skrining Tekanan Darah",
        jenisKluster: "Kesehatan",
        totalSoal: 9,
        totalNilaiInterpretasi: 78,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda mengukur tekanan darah?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Setiap Hari", "Seminggu Sekali", "Sebulan Sekali", "Jarang"],
            },
            {
                judulSoal: "Apakah Anda mengonsumsi obat tekanan darah?",
                typeJawaban: "radio",
                opsiJawaban: ["Ya", "Tidak"],
            },
            {
                judulSoal: "Bagaimana perasaan Anda setelah mengonsumsi obat tekanan darah?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 5,
        judulSkrining: "Skrining Kolesterol",
        jenisKluster: "Kesehatan",
        totalSoal: 11,
        totalNilaiInterpretasi: 82,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda mengonsumsi makanan berlemak?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Jarang", "Sering"],
            },
            {
                judulSoal: "Apakah Anda pernah memeriksa kadar kolesterol?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Ya", "Tidak"],
            },
            {
                judulSoal: "Bagaimana perasaan Anda tentang tingkat kolesterol Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },

    // Kluster Nutrisi
    {
        id: 6,
        judulSkrining: "Skrining Gizi",
        jenisKluster: "Nutrisi",
        totalSoal: 10,
        totalNilaiInterpretasi: 70,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda mengonsumsi makanan tinggi gula?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Jarang", "Sering"],
            },
            {
                judulSoal: "Apa jenis lemak yang sering Anda konsumsi?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Lemak Jenuh", "Lemak Tak Jenuh", "Minyak Nabati", "Minyak Hewani"],
            },
            {
                judulSoal: "Bagaimana Anda menilai keseimbangan diet Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 7,
        judulSkrining: "Skrining Asupan Kalori",
        jenisKluster: "Nutrisi",
        totalSoal: 9,
        totalNilaiInterpretasi: 75,
        dataSoal: [
            {
                judulSoal: "Berapa banyak kalori yang Anda konsumsi dalam sehari?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Kurang dari 1500", "1500-2000", "2000-2500", "Lebih dari 2500"],
            },
            {
                judulSoal: "Apakah Anda menghitung asupan kalori Anda?",
                typeJawaban: "radio",
                opsiJawaban: ["Ya", "Tidak"],
            },
            {
                judulSoal: "Bagaimana Anda mengelola asupan kalori Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 8,
        judulSkrining: "Skrining Vitamin dan Mineral",
        jenisKluster: "Nutrisi",
        totalSoal: 12,
        totalNilaiInterpretasi: 78,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda mengonsumsi suplemen vitamin?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Jarang", "Setiap Hari"],
            },
            {
                judulSoal: "Apa jenis vitamin yang sering Anda konsumsi?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Vitamin C", "Vitamin D", "Vitamin B", "Vitamin A"],
            },
            {
                judulSoal: "Bagaimana Anda menilai keseimbangan vitamin dan mineral Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 9,
        judulSkrining: "Skrining Pola Makan",
        jenisKluster: "Nutrisi",
        totalSoal: 8,
        totalNilaiInterpretasi: 72,
        dataSoal: [
            {
                judulSoal: "Apakah Anda mengikuti pola makan tertentu?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Ya, Vegan", "Ya, Vegetarian", "Ya, Diet Rendah Karbohidrat", "Tidak"],
            },
            {
                judulSoal: "Seberapa sering Anda makan makanan cepat saji?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Jarang", "Sering"],
            },
            {
                judulSoal: "Bagaimana pola makan Anda memengaruhi kesehatan Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 10,
        judulSkrining: "Skrining Nutrisi Seimbang",
        jenisKluster: "Nutrisi",
        totalSoal: 11,
        totalNilaiInterpretasi: 80,
        dataSoal: [
            {
                judulSoal: "Apakah Anda makan sesuai dengan panduan gizi seimbang?",
                typeJawaban: "radio",
                opsiJawaban: ["Ya", "Tidak"],
            },
            {
                judulSoal: "Seberapa sering Anda mengonsumsi makanan dari semua kelompok makanan?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Karbohidrat", "Protein", "Lemak", "Vitamin dan Mineral"],
            },
            {
                judulSoal: "Bagaimana Anda menilai kualitas nutrisi Anda secara keseluruhan?",
                typeJawaban: "paragraf",
            },
        ],
    },

    // Kluster Kesehatan Mental
    {
        id: 11,
        judulSkrining: "Skrining Kesehatan Mental Umum",
        jenisKluster: "Kesehatan Mental",
        totalSoal: 10,
        totalNilaiInterpretasi: 85,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda merasa cemas?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Kadang-kadang", "Sering"],
            },
            {
                judulSoal: "Apakah Anda merasa stres dalam pekerjaan Anda?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Tidak Pernah", "Jarang", "Sering"],
            },
            {
                judulSoal: "Bagaimana perasaan Anda secara keseluruhan?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 12,
        judulSkrining: "Skrining Depresi",
        jenisKluster: "Kesehatan Mental",
        totalSoal: 9,
        totalNilaiInterpretasi: 82,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda merasa sedih atau putus asa?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Kadang-kadang", "Sering"],
            },
            {
                judulSoal: "Apakah Anda pernah mengalami kehilangan minat dalam aktivitas sehari-hari?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Tidak Pernah", "Kadang-kadang", "Sering"],
            },
            {
                judulSoal: "Bagaimana Anda menggambarkan kondisi mental Anda saat ini?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 13,
        judulSkrining: "Skrining Kecemasan",
        jenisKluster: "Kesehatan Mental",
        totalSoal: 8,
        totalNilaiInterpretasi: 78,
        dataSoal: [
            {
                judulSoal: "Apakah Anda merasa gugup atau cemas tanpa alasan yang jelas?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Kadang-kadang", "Sering"],
            },
            {
                judulSoal: "Apakah Anda mengalami kesulitan tidur karena rasa cemas?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Ya", "Tidak"],
            },
            {
                judulSoal: "Bagaimana Anda mengatasi rasa cemas?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 14,
        judulSkrining: "Skrining Stres",
        jenisKluster: "Kesehatan Mental",
        totalSoal: 12,
        totalNilaiInterpretasi: 88,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda merasa tertekan?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Kadang-kadang", "Sering"],
            },
            {
                judulSoal: "Apakah Anda memiliki mekanisme coping untuk mengatasi stres?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Olahraga", "Meditasi", "Berbicara dengan Teman", "Menghindari Situasi"],
            },
            {
                judulSoal: "Bagaimana stres mempengaruhi kehidupan sehari-hari Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 15,
        judulSkrining: "Skrining Keseimbangan Emosi",
        jenisKluster: "Kesehatan Mental",
        totalSoal: 11,
        totalNilaiInterpretasi: 83,
        dataSoal: [
            {
                judulSoal: "Apakah Anda merasa emosi Anda tidak stabil?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Kadang-kadang", "Sering"],
            },
            {
                judulSoal: "Apakah Anda pernah mengalami perubahan suasana hati yang tiba-tiba?",
                typeJawaban: "dropdown",
                opsiJawaban: ["Ya", "Tidak"],
            },
            {
                judulSoal: "Bagaimana Anda mengelola perubahan emosi Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },

    // Kluster Olahraga
    {
        id: 16,
        judulSkrining: "Skrining Kebugaran",
        jenisKluster: "Olahraga",
        totalSoal: 10,
        totalNilaiInterpretasi: 75,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda berolahraga?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "1-2 kali seminggu", "3-4 kali seminggu", "Setiap Hari"],
            },
            {
                judulSoal: "Apa jenis olahraga yang sering Anda lakukan?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Lari", "Bersepeda", "Angkat Beban", "Yoga"],
            },
            {
                judulSoal: "Bagaimana Anda menilai tingkat kebugaran Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 17,
        judulSkrining: "Skrining Kekuatan Otot",
        jenisKluster: "Olahraga",
        totalSoal: 8,
        totalNilaiInterpretasi: 80,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda melakukan latihan kekuatan otot?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "1-2 kali seminggu", "3-4 kali seminggu", "Setiap Hari"],
            },
            {
                judulSoal: "Apa jenis latihan kekuatan otot yang sering Anda lakukan?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Push-up", "Sit-up", "Squat", "Angkat Beban"],
            },
            {
                judulSoal: "Bagaimana Anda menilai kekuatan otot Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 18,
        judulSkrining: "Skrining Daya Tahan Tubuh",
        jenisKluster: "Olahraga",
        totalSoal: 9,
        totalNilaiInterpretasi: 77,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda merasa lelah setelah berolahraga?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Jarang", "Sering"],
            },
            {
                judulSoal: "Apa jenis latihan yang Anda lakukan untuk meningkatkan daya tahan tubuh?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Lari Jarak Jauh", "Bersepeda", "Renang", "Crossfit"],
            },
            {
                judulSoal: "Bagaimana Anda menilai daya tahan tubuh Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 19,
        judulSkrining: "Skrining Fleksibilitas",
        jenisKluster: "Olahraga",
        totalSoal: 11,
        totalNilaiInterpretasi: 82,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda melakukan latihan fleksibilitas?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "Jarang", "Sering"],
            },
            {
                judulSoal: "Apa jenis latihan fleksibilitas yang Anda lakukan?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Yoga", "Stretching", "Pilates", "Dance"],
            },
            {
                judulSoal: "Bagaimana Anda menilai fleksibilitas tubuh Anda?",
                typeJawaban: "paragraf",
            },
        ],
    },
    {
        id: 20,
        judulSkrining: "Skrining Kebugaran Kardio",
        jenisKluster: "Olahraga",
        totalSoal: 10,
        totalNilaiInterpretasi: 78,
        dataSoal: [
            {
                judulSoal: "Seberapa sering Anda melakukan latihan kardio?",
                typeJawaban: "radio",
                opsiJawaban: ["Tidak Pernah", "1-2 kali seminggu", "3-4 kali seminggu", "Setiap Hari"],
            },
            {
                judulSoal: "Apa jenis latihan kardio yang sering Anda lakukan?",
                typeJawaban: "checkbox",
                opsiJawaban: ["Lari", "Bersepeda", "Renang", "Zumba"],
            },
            {
                judulSoal: "Bagaimana Anda menilai kebugaran kardio Anda?",
                typeJawaban: "paragraf",
            },
        ],
    }
];

export default dataSkrining;
