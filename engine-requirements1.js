const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\n❌ baileys ini tidak support node versi dibawah.\n` +
    `   Kamu menggunakan vesi nodes saat ini: ${process.versions.node}.\n` +
    `   Tolong update vesi NODE ke V20 atau diatas nya\n`
  );
  process.exit(1);
}
