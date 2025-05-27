const chai = require("chai");
const chaiHttp = require("chai-http");
const dotenv = require("dotenv");
const fs = require("fs");

const { expect } = chai;

dotenv.config();
chai.use(chaiHttp);

const BASE_URL = process.env.BASE_URL;
const USERNAME = process.env.USER_NAME;
const PASSWORD = process.env.PASSWORD;

const bookingPayload = JSON.parse(fs.readFileSync("./TugasDay2/data/bookingData.json", "utf8"));

describe("End-to-End Booking API", () => {
  let token = "";
  let bookingId = null;

  it("Login dan mendapatkan token", async () => {
    const res = await chai.request(BASE_URL)
      .post("/auth")
      .set("Accept", "application/json")
      .send({
        username: USERNAME,
        password: PASSWORD,
      });

    expect(res).to.have.status(200);
    expect(res.body).to.have.property("token");
    token = res.body.token;
  });

  it("Membuat booking baru", async () => {
    const res = await chai.request(BASE_URL)
      .post("/booking")
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(bookingPayload);

    console.log("Response POST Booking:", res.body); // Debug log

    expect(res).to.have.status(200);
    expect(res.body).to.have.property("bookingid");
    expect(res.body).to.have.property("booking");

    expect(res.body.booking.firstname).to.equal(bookingPayload.firstname);

    bookingId = res.body.bookingid;
  });

  it("Mengambil booking berdasarkan ID", async () => {
    if (!bookingId) throw new Error("Booking ID belum dibuat.");

    const res = await chai.request(BASE_URL)
      .get(`/booking/${bookingId}`)
      .set("Accept", "application/json");

    console.log("Response GET Booking:", res.body); // Debug log

    expect(res).to.have.status(200);
    expect(res.body.firstname).to.equal(bookingPayload.firstname);
  });

  it("Menghapus booking berdasarkan ID", async () => {
    if (!bookingId) throw new Error("Booking ID belum dibuat.");

    const res = await chai.request(BASE_URL)
      .delete(`/booking/${bookingId}`)
      .set("Accept", "application/json")
      .set("Cookie", `token=${token}`);

    console.log("Response DELETE Booking:", res.status); // Debug log

    // Sesuaikan status tergantung dari API kamu, bisa 201 atau 200
    expect(res).to.have.status(201); 
  });
});
