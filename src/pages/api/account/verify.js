export default async function handler(req, res) {
  console.log(req.headers);
  res.json("holap");
}