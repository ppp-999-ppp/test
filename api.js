// จำลอง API ที่คืนข้อมูลรายการหนัง
const MovieAPI = {
  getMovies: async () => {
    // จำลองหน่วงเวลาแบบ API จริง
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
      { id: 1, title: "Inception" },
      { id: 2, title: "Interstellar" },
      { id: 3, title: "Avengers: Endgame" }
    ];
  }
};
