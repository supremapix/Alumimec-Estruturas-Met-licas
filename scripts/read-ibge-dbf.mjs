import fs from "node:fs";
const b = fs.readFileSync("../ibge-bairros-2022/PR_bairros_CD2022.dbf");
const n = b.readUInt32LE(4),
  head = b.readUInt16LE(8),
  length = b.readUInt16LE(10);
const fields = [];
let offset = 1;
for (let p = 32; b[p] !== 13; p += 32) {
  const name = b
    .subarray(p, p + 11)
    .toString()
    .replace(/\0/g, "");
  const size = b[p + 16];
  fields.push({ name, size, offset });
  offset += size;
}
const rows = [];
for (let i = 0; i < n; i++) {
  const start = head + i * length;
  if (b[start] === 42) continue;
  rows.push(
    Object.fromEntries(
      fields.map((f) => [
        f.name,
        b
          .subarray(start + f.offset, start + f.offset + f.size)
          .toString("utf8")
          .trim(),
      ]),
    ),
  );
}
fs.writeFileSync("../ibge-pr-bairros.json", JSON.stringify(rows));
console.log(JSON.stringify({ fields, rows: rows.length, sample: rows[0] }));
