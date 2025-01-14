const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");
const errorHandler = require("../middleware/errorHandler");
const swaggerUi = require("swagger-ui-express");
const swaggerFilePath = path.resolve(__dirname, "../swagger-output.json");

const Ruser = require("./Ruser");
const Rroom = require("./Rroom");
const Rcoupon = require("./Rcoupon");
const Rloginout = require("./Rloginout");
const Rproduct = require("./Rproduct");
const Rmessage = require("./Rmessage");
const Rmypage = require("./Rmypage");
const Rreview = require("./Rreview");
const RuploadImg = require("./RuploadImg");

router.use("/api/user", Ruser);
router.use("/api/room", Rroom);
router.use("/api/coupon", Rcoupon);
router.use("/api/product", Rproduct);
router.use("/api/", Rloginout);
router.use("/api/message", Rmessage);
router.use("/api/mypage", Rmypage);
router.use("/api/review", Rreview);
router.use("/api/uploadImg", RuploadImg);

// swagger-output.json 파일이 존재하는지 확인
if (fs.existsSync(swaggerFilePath)) {
  const swaggerDocument = require(swaggerFilePath);
  router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} else {
  console.log("Swagger 문서가 아직 생성되지 않았습니다.");
}

// s3 테스트용
const RuploadImgTest = require("./RuploadImgTest");
router.use("/test", RuploadImgTest);

// 404 처리 // 제일 마지막 위치
router.use((req, res, next) => {
  // res.status(404).render('404');
  res.send("404 Error");
});

router.use(errorHandler);

module.exports = router;
