/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Las fotos se sirven desde Supabase Storage. El optimizador las reescala,
    // las pasa a AVIF/WebP y guarda el resultado en el CDN durante un año, así
    // Supabase entrega cada archivo una vez y no una vez por visita.
    minimumCacheTTL: 31536000,
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mmlbslwljvmscbgsqkkq.supabase.co",
        pathname: "/storage/v1/object/**",
      },
    ],
  },
};

module.exports = nextConfig;
