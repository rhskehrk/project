import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello from Node.js on Render!");
});

// Render에서 반드시 PORT 환경변수 사용해야 함
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
